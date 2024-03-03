<template>
  <div ref="infoList" class="info-list">
    <div class="info-element primary-info-element">
      <div class="scroll-line">
        <div class="scroll-line-origin"></div>
        <div class="scroll-line-element"></div>
      </div>
      <div class="element-wrapper">
        <h1>
          Mit WorkAdventure am LMG können Sie das Gymnasium hautnah digital
          erleben.
        </h1>
        <p>
          Entdecken Sie das Lise-Meitner-Gymnasium auf völlig neue Weise. Wir
          bieten Schülerinnen und Schülern die Möglichkeit, das Schulgebäude auf
          eine einzigartige Weise zu erkunden, die an ein Computerspiel
          erinnert. In einer faszinierenden zweidimensionalen Umgebung können
          Teilnehmerinnen und Teilnehmer das gesamte Schulgelände erkunden,
          Klassenräume und Fachräume besuchen sowie an DSGVO-konformen
          Videokonferenzen teilnehmen.
        </p>
      </div>
    </div>
    <div class="info-element">
      <div class="scroll-line">
        <div class="scroll-line-icon">
          <img src="~/assets/svg/info-shapes.svg" alt="" />
          <span></span>
        </div>
        <div class="scroll-line-element"></div>
      </div>
      <div class="element-wrapper">
        <img
          src="~/assets/img/workadventure-lmg-ingame.png"
          alt="Bild von einem Meeting im Forum"
        />
        <p>
          Unsere AG präsentiert eine <span>akribische Nachbildung</span> des
          Lise-Meitner-Gymnasiums in einer
          <span>detailgetreuen zweidimensionalen Umgebung</span>. Hier haben
          Schülerinnen und Schüler nicht nur die Möglichkeit, die Räume zu
          erkunden, sondern sie sind auch mit
          <span>verschiedenen Inhalten</span> wie Videos, Links und
          Präsentationen gefüllt. So können sie nicht nur den Raum erkunden,
          sondern auch <span>zusätzliche Informationen und Materialien</span> zu
          verschiedenen Themen abrufen.
        </p>
      </div>
    </div>
    <div class="info-element">
      <div class="scroll-line">
        <div class="scroll-line-icon">
          <img src="~/assets/svg/info-video-arrow-up-right.svg" alt="" />
          <span></span>
        </div>
        <div class="scroll-line-element"></div>
      </div>
      <div class="element-wrapper">
        <img
          src="~/assets/img/workadventure-lmg-video-call.png"
          alt="Video Anrufe in WorkAdventure"
        />
        <p>
          Ein weiteres herausragendes Merkmal unserer AG ist die Möglichkeit, an
          <span>DSGVO-konformen Videokonferenzen</span> teilzunehmen. In einer
          Zeit, in der digitales Lernen und virtuelle Kommunikation immer
          wichtiger werden, bietet "WorkAdventure LMG" die Chance, sich auch
          <span>virtuell zu treffen</span>
          und miteinander zu interagieren.
        </p>
      </div>
    </div>
    <div class="info-element">
      <div class="scroll-line">
        <div class="scroll-line-icon">
          <img src="~/assets/svg/info-stars.svg" alt="" />
          <span></span>
        </div>
        <div class="scroll-line-element"></div>
      </div>
      <div class="element-wrapper">
        <img
          src="~/assets/img/workadventure-lmg-terminal.png"
          alt="Minispiel in Form eines Terminals"
        />
        <p>
          Möchten Sie sich lieber spielerisch vergnügen? Keine Sorge, denn
          WorkAdventure LMG bietet eine <span>Auswahl an Minispielen</span>, die
          Schülerinnen und Schülern die Möglichkeit bieten, auf
          <span>kreative Weise</span>
          mit unserer Schule vertraut zu werden.
        </p>
      </div>
    </div>
    <div class="info-element">
      <div class="scroll-line">
        <div class="scroll-line-icon">
          <img src="~/assets/svg/info-palette.svg" alt="" />
          <span></span>
        </div>
        <div class="scroll-line-element"></div>
      </div>
      <div class="element-wrapper">
        <img
          src="~/assets/img/workadventure-lmg-hilfe.png"
          alt="Hilfe gesucht"
        />
        <p>
          Bist du bereits <span>Schüler am LMG</span> und gehörst der 10. Klasse
          oder der Oberstufe an? Dann hast du die Möglichkeit, ein
          <span>Teil dieses aufregenden Projekts</span> zu werden. Du kannst
          dich ganz unkompliziert bei <span>Herrn Tanriverdi</span> melden oder
          ihm eine Nachricht über Teams senden. Wir schätzen jede Form der
          Mitarbeit sehr. <span>Vielen Dank!</span>
        </p>
      </div>
    </div>
    <div class="info-element">
      <div class="scroll-line">
        <div class="scroll-line-icon">
          <img src="~/assets/svg/info-rocket.svg" alt="" />
          <span></span>
        </div>
      </div>
      <div class="element-wrapper">
        <button class="info-element-play" @click="openGame">
          Jetzt spielen
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const infoList = ref<HTMLElement>();
let infoElements: NodeListOf<HTMLElement>;

function openGame() {
  window.location.href = "https://play.workadventure-lmg.de/";
}

const fadeInEffect = () => {
  infoElements.forEach((element, index) => {
    const elementTop = element.offsetTop;
    const infoListTop = infoList.value?.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    if (!infoListTop) return console.error("infoListTop is undefined");

    console.warn(index);

    if (scrollTop - window.innerHeight * (1 / 5) >= elementTop + infoListTop) {
      element.style.opacity = "1";
      const scrollLine: HTMLElement | null = element.querySelector(
        ".scroll-line .scroll-line-element"
      );
      if (scrollLine) {
        scrollLine.style.transform = "scaleY(1)";
      }
    } else if (index === 5 && scrollTop >= maxScroll - 200) {
      element.style.opacity = "1";
    } else {
      element.style.opacity = "0";
      const scrollLine: HTMLElement | null = element.querySelector(
        ".scroll-line .scroll-line-element"
      );
      if (scrollLine) {
        scrollLine.style.transform = "scaleY(0)";
      }
    }
  });
};

onMounted(() => {
  infoElements = document.querySelectorAll(".info-element");
  window.addEventListener("scroll", fadeInEffect);
});
</script>

<style lang="sass" scoped>
.info-list
  position: relative

.primary-info-element
    color: #fff !important

    //.element-wrapper
    //    width: 51.5% !important


.info-element
  box-sizing: border-box
  position: relative
  width: min(80vw, 800px)
  margin: 0 auto
  margin-bottom: 10px
  color: #aaa
  display: flex
  opacity: 0
  transition: opacity .7s cubic-bezier(0.16, 1, 0.3, 1),transform .7s cubic-bezier(0.16, 1, 0.3, 1)

  p
    max-width: 60vw
    font-size: 1.2rem
    line-height: 1.5rem
    text-shadow: 0 0 5px #0d1117

  img
    max-width: min(50vw, 800px)
    border-radius: 20px

  span
    color: #fff

  .element-wrapper
    width: 91.5%
    margin-bottom: 100px

    .info-element-play
      background-color: transparent
      color: #fff
      border: 2px solid #fff
      padding: 10px 100px
      border-radius: 10px
      font-family: "Ubuntu", sans-serif
      font-size: 1.5rem
      cursor: pointer
      transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1)

      &:hover
        filter: invert(1)
        background-color: #000

  .scroll-line
        position: relative
        left: 0
        width: 8.5%
        display: flex
        flex-direction: column

        .scroll-line-origin
            border: 2px solid #fff4
            display: inline-block
            padding: 4px
            border-radius: 50%
            box-sizing: border-box
            aspect-ratio: 1/1
            margin: 35px auto 0 auto

        .scroll-line-icon
            width: 90%
            margin: 0 auto
            aspect-ratio: 1/1
            position: relative

            img
                width: 80%
                position: absolute
                left: 50%
                top: 50%
                transform: translate(-50%, -50%)
                z-index: -1

            span
                position: absolute
                left: 50%
                top: 50%
                transform: translate(-50%, -50%)
                width: 80%
                height: 80%
                background-color: #0000
                filter: blur(18px)
                z-index: -2

        .scroll-line-element
            background: linear-gradient(#7C72FF00, #2DA44E 80%, #3FB950)
            width: 3px
            margin: 10px auto 0 auto
            height: 100%
            border-radius: 6px
            box-sizing: border-box
            transform: scaleY(0)
            transform-origin: top
            transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0s !important

.info-element:nth-child(1)
    .scroll-line-element
        background: linear-gradient(#7C72FF00, #3ECDFA 80%, #3ECDFA)


.info-element:nth-child(2)
    .scroll-line-element
        background: linear-gradient(#3ECDFA, #7AFA3E 80%, #7AFA3E)

    .scroll-line-icon
        span
            background-color: #3ECDFA

.info-element:nth-child(3)
    .scroll-line-element
        background: linear-gradient(#7AFA3E, #FA3E3E 80%, #FA3E3E)

    .scroll-line-icon
        span
            background-color: #7AFA3E

.info-element:nth-child(4)
    .scroll-line-element
        background: linear-gradient(#FA3E3E, #F63EFA 80%, #F63EFA)

    .scroll-line-icon
        span
            background-color: #FA3E3E

.info-element:nth-child(5)
    .scroll-line-element
        background: linear-gradient(#F63EFA, #3E46FA 80%, #3E46FA)

    .scroll-line-icon
        span
            background-color: #F63EFA

.info-element:nth-child(6)
  .scroll-line-icon
      span
          background-color: #3E46FA
</style>
