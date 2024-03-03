<template>
  <div class="map-page">
    <div class="map-header">
      <button
        v-if="!isIngame"
        @click="() => $router.back()"
        class="map-back-button"
      >
        <img
          src="~/assets/svg/map-arrow-circle-left.svg"
          alt="Zurück"
          width="50"
          height="50"
        />
      </button>
      <h1>
        Karte des
        <nuxt-link
          to="/map?x=1100&y=1100&map=OG"
          style="color: #fff; text-decoration: none; cursor: default"
          >LMG</nuxt-link
        >
      </h1>
      <h3>
        Hier können Sie die Karte der Schule
        <span v-if="isIngame">und Ihre Position in dieser</span> sehen.
      </h3>
    </div>

    <div class="map-switch">
      <div
        class="map-switch-element map-switch-element-top"
        :class="[floor === 'OG' ? 'map-switch-active' : null]"
        @click="changeFloor"
        @touchend="changeFloor"
      >
        OG
      </div>
      <div
        class="map-switch-element map-switch-element-bottom"
        :class="[floor === 'EG' ? 'map-switch-active' : null]"
        @click="changeFloor"
        @touchend="changeFloor"
      >
        EG
      </div>
    </div>

    <div v-if="isIngame" class="map-reset-view" @click="resetViewport">
      <img
        src="~/assets/svg/map-marker-icon.svg"
        alt="R"
        width="50"
        height="50"
      />
    </div>

    <div
      ref="mapsvg"
      class="map-view"
      :style="{ cursor: isPanning ? 'grabbing' : 'grab' }"
    >
      <div
        v-if="isIngame"
        v-show="floor === cursorPos.floor"
        ref="mapmarker"
        class="map-marker"
        :style="{ top: `${cursorPos.y}px`, left: `${cursorPos.x}px` }"
      >
        <div class="map-marker-dropshadow" />
        <img
          class="map-marker-icon"
          src="~/assets/svg/map-marker-location.svg"
          alt="<>"
          width="100"
          height="100"
        />
        <p v-if="false">
          POS: ({{ cursorPos.x }}, {{ cursorPos.y }}) FLOOR:
          {{ cursorPos.floor }}
        </p>
      </div>
      <MapImage :floor="floor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import panzoom from "panzoom";

import "~/assets/style/style.sass";
import "~/assets/style/map.sass";

const pan = ref();
const cursorPos = ref({ x: 0, y: 0, floor: "" });
const floor = ref("EG");
const isIngame = ref(false);
const isPanning = ref(false);
const mapsvg = ref();

const route = useRoute();

definePageMeta({
  layout: "empty",
});

onMounted(() => {
  const posX = route.query.x as string;
  const posY = route.query.y as string;
  const map = route.query.map as string;

  if (posX && posY && map) {
    isIngame.value = true;
    cursorPos.value.x = parseInt(posX) - 75; // Place cursor center at coordinates
    cursorPos.value.y = parseInt(posY) - 75;

    switch (map) {
      case "OG":
        floor.value = "OG";
        cursorPos.value.floor = "OG";
        break;
      default:
        floor.value = "EG";
        cursorPos.value.floor = "EG";
    }
  }

  pan.value = panzoom(mapsvg.value, {
    maxZoom: 1.75,
    minZoom: 0.25,
    initialZoom: 0.5,
    smoothScroll: false,
    bounds: true,
    boundsPadding: 0.5,
    zoomDoubleClickSpeed: 1,
    transformOrigin: { x: 0.5, y: 0.5 },
  });

  pan.value.on("pan", () => {
    isPanning.value = true;
  });

  pan.value.on("panend", () => {
    isPanning.value = false;
  });
});

function changeFloor(event: Event) {
  const target = event.target as HTMLElement | null;
  if (target) {
    if (target.classList.contains("map-switch-element-top")) {
      floor.value = "OG";
    } else {
      floor.value = "EG";
    }
  }
}

function resetViewport() {
  const mapSRT = pan.value.getTransform();

  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const centerX = viewportWidth / 2 - 75 * mapSRT.scale;
  const centerY = viewportHeight / 2 - 75 * mapSRT.scale;

  pan.value.smoothMoveTo(
    centerX - cursorPos.value.x * mapSRT.scale,
    centerY - cursorPos.value.y * mapSRT.scale
  );
  console.error(pan.value.getTransform());
}
</script>
