<template>
  <div class="navbar">
    <div class="navbar-logo-wrapper">
      <nuxt-link to="/" class="navbar-logo-text">
        <img
          class="navbar-logo"
          src="~/assets/img/workadventure-lmg-logo-navbar.png"
          alt="Workadventure LMG"
          draggable="false"
        />
      </nuxt-link>
    </div>
    <button class="navbar-play-button" @click="openGame" @touchend="openGame">
      Spielen
    </button>
  </div>
</template>

<script lang="ts" setup>
import "~/assets/style/navigation.sass";

function openGame() {
  window.location.href = "https://play.workadventure-lmg.de/";
}
</script>
