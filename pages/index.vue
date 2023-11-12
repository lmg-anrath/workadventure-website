<template>
    <div class="main-content">
        <div class="index-play">
            <div class="index-play-section">
                <div class="index-play-bg">
                    <video src="~/assets/video/out.mp4" autoplay loop></video>
                </div>
                <div class="index-play-content">
                    <div class="index-play-wrapper">
                        <img src="~/assets/img/workadventure-lmg-animated-logo.png" alt="WorkAdventureLMG Logo">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <button @click="openGame">JETZT SPIELEN</button>
                        <button @click="openMap">KARTE ÖFFNEN</button>
                        <div class="index-play-platforms">
                            <img src="~/assets/svg/edge-icon.svg" alt="Edge Browser">
                            <img src="~/assets/svg/safari-icon.svg" alt="Safari Browser">
                            <img src="~/assets/svg/chrome-icon.svg" alt="Chrome Browser">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-content">
            <ScrollingAnim />
            <InfoDisplay />
        </div>
        <!-- <div ref="landing" class="index-landing">
            <AnimatedBG id="bg-wrap" class="index-bg" />
            <img src="~/assets/img/workadventure-lmg-animated-logo.png" alt="Workadventure LMG" class="index-logo">
            <button class="index-play-button" @click="openGame">Jetzt Spielen</button>
            <button class="index-play-button index-button-lower" @click="openMap">Karte ansehen</button>
        </div>
        <ScrollingAnim />
        <InfoDisplay />
        <div style="height: 440vh;"></div> -->
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