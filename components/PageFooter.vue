<template>
  <div class="footer">
    <div class="footer-links">
      <ul>
        <li><a href="https://www.lmg-anrath.de/impressum/">Impressum</a></li>
        <li><nuxt-link to="#">Über</nuxt-link></li>
      </ul>
    </div>
    <div class="footer-lmg">
      <a href="https://www.lmg-anrath.de">
        <img
          class="footer-logo"
          src="https://www.lmg-anrath.de/wp-content/uploads/2017/10/LM-Logo_blau.png"
          alt="Workadventure LMG"
        />
      </a>
    </div>
    <div class="footer-copyright">
      <p>
        &copy; 2023 - 2024 LMG Anrath, Fabian Sölle, Mika Rottländer<br />
        Alle Rechte vorbehalten.
      </p>
    </div>
    <div class="footer-usk">
      <a
        href="https://usk.de/fuer-unternehmen/spiele-und-apps-pruefen-lassen/lehr-infoprogramme/"
      >
        <img
          src="~/assets/img/usk.png"
          alt="Lernprogramm gemäß § 14 Jugendschutzgesetz"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import "~/assets/style/navigation.sass";
</script>
