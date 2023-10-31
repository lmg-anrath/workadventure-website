<script lang="ts" setup>
    import panzoom from 'panzoom';

    import '~/assets/style.sass';
    import '~/assets/map.sass';

    const pan = ref();
    const cursorPos = ref({ x: 0, y: 0, floor: ''});
    const floor = ref('EG');
    const isIngame = ref(false);
    const isPanning = ref(false);
    const mapsvg = ref();

    const route = useRoute();
    onMounted(() => {
        const posX = route.query.x as string;
        const posY = route.query.y as string;
        const map = route.query.map as string;

        if (posX && posY && map) {
            isIngame.value = true;
            cursorPos.value.x = parseInt(posX);
            cursorPos.value.y = parseInt(posY);

            switch (map) {
                case 'OG':
                    floor.value = 'OG';
                    cursorPos.value.floor = 'OG';
                    break;
                default:
                    floor.value = 'EG';
                    cursorPos.value.floor = 'EG';
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
        });

        pan.value.on('pan', () => {
            isPanning.value = true;
        });

        pan.value.on('panned', () => {
            isPanning.value = false;
        });
    });

    function changeFloor(event: Event) {
        const target = event.target as HTMLElement | null;
        if (target) {
            if (target.classList.contains('map-switch-element-top')) {
                floor.value = 'OG';
            } else {
                floor.value = 'EG';
            }
        }
    }

    // TODO
    function resetViewport() {
        console.warn('TODO');
    }
</script>

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
            <img src="~/assets/map-marker.svg" alt="R" width="50" height="50">
        </div>

        <div ref="mapsvg" class="map-view" :style="{ cursor: isPanning ? 'grabbing' : 'grab'}">
            <div
                v-show="floor === cursorPos.floor"
                ref="mapmarker"
                class="map-marker"
                :style="{ top: `${cursorPos.y}px`, left: `${cursorPos.x}px` }"
            >
                POS: ({{ cursorPos.x }}, {{ cursorPos.y }}) FLOOR: {{ cursorPos.floor }}
            </div>
            <MapImage :floor="floor"/>
        </div>
    </div>
</template>