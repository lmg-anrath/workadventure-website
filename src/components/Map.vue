<template>
  <div class="map-page">
    <div class="map-header">
      <h1>Karte des <span>LMG</span></h1>
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

    <div class="map-reset-view" @click="resetViewport">
      <img src="@/assets/map-marker.svg" alt="C" width="50" height="50">
    </div>

    <div ref="mapsvg" class="map-view" :style="{ cursor: isPanning ? 'grabbing' : 'grab' }">
      <div
        v-show="floor === cursorPos.floor"
        ref="mapmarker"
        class="map-marker"
        :style="{ top: `${cursorPos.y}px`, left: `${cursorPos.x}px` }"
      >
        POS: ({{cursorPos.x}},{{cursorPos.y}}) FLOOR: {{cursorPos.floor}}
      </div>
      <MapImage :floor="floor"/>
    </div>
  </div>
</template>

<script>
import panzoom from 'panzoom';
import MapImage from './MapImage.vue'
export default {
  name: 'Map',
  data() {
    return {
      pan: null,
      cursorPos: { x: 0, y: 0, floor: '' },
      floor: 'EG',
      isIngame: false,
      isPanning: false,
    };
  },
  components: {
    MapImage,
  },
  mounted: function () {
    const posX = this.$route.query.x;
    const posY = this.$route.query.y;
    const map = this.$route.query.map;

    if (posX && posY && map) {
      console.warn(posX, posY, map);
      this.isIngame = true;
      this.cursorPos.x = posX;
      this.cursorPos.y = posY;

      switch (map) {
        case 'OG':
          this.floor = 'OG';
          this.cursorPos.floor = 'OG';
          break;
        default:
          this.floor = 'EG';
          this.cursorPos.floor = 'EG';
          break;
      }
    }

    this.pan = panzoom(this.$refs.mapsvg, {
      maxZoom: 1.75,
      minZoom: 0.25,
      initialZoom: 0.5,
      smoothScroll: false,
      bounds: true,
      boundsPadding: 0.5,
      zoomDoubleClickSpeed: 1,
    });

    this.pan.on('pan', () => {
      //console.log('panning process', e);
      this.isPanning = true;
      //console.warn(pan.getTransform());
    });

    this.pan.on('panend', () => {
        //console.log('pan ended', e);
        this.isPanning = false;
    });
  },
  methods: {
    changeFloor(event) {
      if (event.target.classList.contains('map-switch-element-top')) {
        this.floor = 'OG';
      } else {
        this.floor = 'EG';
      }
    },
    resetViewport() {
      if (this.$refs.mapmarker.style.display==='') {
        console.log('asa');
        this.pan.smoothMoveTo(0, 0);
      }
    },
  },
  computed: {
  },
};
</script>

<style scoped>
.map-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(#082b36, #07011a);
  overflow: hidden;
  user-select: none;
}

.map-switch {
  position: absolute;
  top: 140px;
  left: 20px;
  width: 50px;
  border-radius: 15px;
  background: #5555;
  backdrop-filter: blur(10px);
  cursor: pointer;
  z-index: 2;
}

.map-switch-element {
  height: 40px;
  width: 100%;
  color: #fff;
  line-height: 40px;
}

.map-switch-element:hover {
  background: #fffa;
  color: #000;
}

.map-switch-element-top {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.map-switch-element-bottom {
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

.map-switch-active {
  background: #0f0a;
}

.map-reset-view {
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 20px;
  left: 20px;
  border-radius: 15px;
  background: #5555;
  backdrop-filter: blur(10px);
  cursor: pointer;
  z-index: 2;
}

.map-reset-view:hover {
  background: #fffa;
  color: #000;
}

.map-header {
  position: absolute;
  width: 100vw;
  height: 120px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  text-align: center;
  color: #fff;
  background: #0005;
  backdrop-filter: blur(10px);
  cursor: default;
  z-index: 2;
}

.map-view {
  width: 6200px;
  height: 4250px;
  cursor: grab;
}

.map-marker {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #f0f;
  z-index: 1;
}
</style>