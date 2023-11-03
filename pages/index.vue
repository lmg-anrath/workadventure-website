<template>
    <Navbar />
    <div ref="landing" class="index-landing">
        <AnimatedBG id="bg-wrap" class="index-bg" />
        <img src="/workadventure-lmg-animated-logo.png" alt="Workadventure LMG" class="index-logo">
        <button class="play-button" @click="openGame">JETZT SPIELEN</button>
    </div>
    <ScrollingAnim class="index-scrolling-anim" :style="`display: ${displayScrollingAnim}`" />
    <PageFooter />
</template>

<script lang="ts" setup>
import '~/assets/index.sass'

const landing = ref();
const displayScrollingAnim = ref('none');

onMounted(() => {
    window.addEventListener('scroll', () => {
        const html = document.documentElement;
        const scrollTop = html.scrollTop;

        console.warn(scrollTop);

        if (scrollTop > 0) {
            landing.value.style.opacity = 0;
            displayScrollingAnim.value = 'flex';
        } else {
            landing.value.style.opacity = 1;
            displayScrollingAnim.value = 'none';
        }
    });
});

function openGame() {
    window.location.href = 'https://play.workadventure-lmg.de/'
}

function getScrollTop() {
    return document.documentElement.scrollTop;
}

</script>