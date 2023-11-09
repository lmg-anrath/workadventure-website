<template>
    <Navbar />
    <div ref="landing" class="index-landing">
        <AnimatedBG id="bg-wrap" class="index-bg" />
        <img src="~/assets/img/workadventure-lmg-animated-logo.png" alt="Workadventure LMG" class="index-logo">
        <button class="index-play-button" @click="openGame">Jetzt Spielen</button>
        <button class="index-play-button index-button-lower" @click="openMap">Karte ansehen</button>
    </div>
    <ScrollingAnim />
    <!-- <div class="index-spacer"></div> -->
    <InfoDisplay />
    <div style="height: 440vh;"></div>
    <div class="footer-wrapper">
        <PageFooter />
    </div>
</template>

<script lang="ts" setup>
import '~/assets/index.sass'

function openGame() {
    window.location.href = 'https://play.workadventure-lmg.de/'
}

function openMap() {
    window.location.href = '/map'
}

function getScrollTop() {
    return document.documentElement.scrollTop;
}
</script>