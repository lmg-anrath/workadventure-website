<template>
  <div class="footer">
    <div class="footer-links">
      <ul>
        <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
        <li><nuxt-link to="#">Über</nuxt-link></li>
      </ul>
    </div>
    <div class="footer-lmg">
      <a href="https://www.lmg-anrath.de">
        <img class="footer-logo" src="https://www.lmg-anrath.de/wp-content/uploads/2017/10/LM-Logo_blau.png" alt="Workadventure LMG">
      </a>
    </div>
    <div class="footer-copyright">
      <p>&copy; 2023 LMG Anrath, Fabian Sölle, Mika Rottländer<br>
          Alle Rechte vorbehalten.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import '~/assets/navigation.sass'
</script>