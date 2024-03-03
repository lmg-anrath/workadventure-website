<template>
  <div class="main-content">
    <div class="index-play">
      <div class="index-play-section">
        <div class="index-play-bg">
          <video src="~/assets/video/out.mp4" autoplay loop></video>
        </div>
        <div class="index-play-content">
          <div class="index-play-wrapper">
            <img
              src="~/assets/img/workadventure-lmg-animated-logo.png"
              alt="WorkAdventureLMG Logo"
            />
            <h2>Das LMG digital erkunden.</h2>
            <button @click="openGame">JETZT SPIELEN</button>
            <button @click="openMap">KARTE ÖFFNEN</button>
            <div class="index-play-platforms">
              <img src="~/assets/svg/edge-icon.svg" alt="Edge Browser" />
              <img src="~/assets/svg/safari-icon.svg" alt="Safari Browser" />
              <img src="~/assets/svg/chrome-icon.svg" alt="Chrome Browser" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-content">
      <h1 class="index-content-heading" @click="scrollToInfo">
        Weitere Informationen
      </h1>
      <ScrollingAnim />
      <img
        src="~/assets/svg/desktop_1.svg"
        class="index-content-bg-image index-content-bg-image-first"
      />
      <img
        src="~/assets/svg/desktop_2.svg"
        class="index-content-bg-image index-content-bg-image-second"
      />
      <img
        src="~/assets/svg/desktop_3.svg"
        class="index-content-bg-image index-content-bg-image-third"
      />
      <img
        src="~/assets/svg/desktop_4.svg"
        class="index-content-bg-image index-content-bg-image-fourth"
      />
      <InfoDisplay />
    </div>
  </div>
</template>

<script lang="ts" setup>
import "~/assets/style/index.sass";

function openGame() {
  window.location.href = "https://play.workadventure-lmg.de/";
}

function openMap() {
  navigateTo("/map");
}

const scrollToInfo = () => {
  const info = document.querySelector(".index-content");
  if (info) {
    info.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
