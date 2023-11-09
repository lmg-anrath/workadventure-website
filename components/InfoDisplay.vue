<template>
    <div ref="infoList" class="info-list">
        <div class="info-element">
            <div class="scroll-line">
                <div class="scroll-line-element"></div>
            </div>
            <div class="element-wrapper">
                <img src="~/assets/img/workadventure-lmg-ingame.png" alt="Bild von einem Meeting im Forum">
                <p>
                    Unsere AG präsentiert eine <span>akribische Nachbildung</span> des Lise-Meitner-Gymnasiums
                    in einer <span>detailgetreuen zweidimensionalen Umgebung</span>. Hier haben Schülerinnen und
                    Schüler nicht nur die Möglichkeit, die Räume zu erkunden, sondern sie sind auch
                    mit <span>verschiedenen Inhalten</span> wie Videos, Links und Präsentationen gefüllt.
                    So können sie nicht nur den Raum erkunden, sondern auch <span>zusätzliche Informationen
                        und Materialien</span> zu verschiedenen Themen abrufen.
                </p>
            </div>
        </div>
        <div class="info-element">
            <div class="scroll-line">
                <div class="scroll-line-element"></div>
            </div>
            <div class="element-wrapper">
                <img src="~/assets/img/workadventure-lmg-video-call.png" alt="Video Anrufe in WorkAdventure">
                <p>
                    Ein weiteres herausragendes Merkmal unserer AG ist die Möglichkeit,
                    an <span>DSGVO-konformen Videokonferenzen</span> teilzunehmen. In einer Zeit,
                    in der digitales Lernen und virtuelle Kommunikation immer wichtiger werden,
                    bietet "WorkAdventure LMG" die Chance, sich auch <span>virtuell zu treffen</span>
                    und miteinander zu interagieren.
                </p>
            </div>
        </div>
        <div class="info-element">
            <div class="scroll-line">
                <div class="scroll-line-element"></div>
            </div>
            <div class="element-wrapper">
                <img src="~/assets/img/workadventure-lmg-terminal.png" alt="Minispiel in Form eines Terminals">
                <p>
                    Möchten Sie sich lieber spielerisch vergnügen?
                    Keine Sorge, denn WorkAdventure LMG bietet eine <span>Auswahl an Minispielen</span>,
                    die Schülerinnen und Schülern die Möglichkeit bieten, auf <span>kreative Weise</span>
                    mit unserer Schule vertraut zu werden.
                </p>
            </div>
        </div>
        <div class="info-element">
            <div class="scroll-line">
                <div class="scroll-line-element"></div>
            </div>
            <div class="element-wrapper">
                <img src="~/assets/img/workadventure-lmg-hilfe.png" alt="Hilfe gesucht">
                <p>
                    Bist du bereits <span>Schüler am LMG</span> und gehörst der 10. Klasse oder der Oberstufe an?
                    Dann hast du die Möglichkeit, ein <span>Teil dieses aufregenden Projekts</span> zu werden.
                    Du kannst dich ganz unkompliziert bei <span>Herrn Tanriverdi</span> melden oder ihm eine
                    Nachricht über Teams senden. Wir schätzen jede Form der Mitarbeit sehr. <span>Vielen Dank!</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const infoList = ref<HTMLElement>();
let infoElements: NodeListOf<HTMLElement>;

const transitionQueue: number[] = [];

const func = () => {
    transitionQueue.forEach((element, index) => {
        const scrollLine: HTMLElement | null = infoElements[element].querySelector('.scroll-line');
        if (scrollLine && scrollLine.style.transform != 'scaleY(1)') {
            scrollLine.style.transform = 'scaleY(1)';
            transitionQueue.shift();
        }
        setTimeout(() => {}, 2000);
    });
};

const fadeInEffect = () => {
    const transitionDutation = 2000;

    infoElements.forEach((element, index) => {
        const elementTop = element.offsetTop;
        const infoListTop = infoList.value?.offsetTop;
        const scrollTop = document.documentElement.scrollTop;

        if (!infoListTop) return console.error('infoListTop is undefined');

        if (scrollTop + window.innerHeight * (3 / 4) >= elementTop + infoListTop) {
            element.style.opacity = '1';
            const scrollLine: HTMLElement | null = element.querySelector('.scroll-line');
            if (scrollLine) {
                transitionQueue.push(index);
                func();
                //scrollLine.style.transform = 'scaleY(1)';
            }
        } else {
            element.style.opacity = '0';
            const scrollLine: HTMLElement | null = element.querySelector('.scroll-line');
            if (scrollLine) {
                scrollLine.style.transform = 'scaleY(0)';
            }
        }
    });
};

onMounted(() => {
    infoElements = document.querySelectorAll('.info-element');
    window.addEventListener('scroll', fadeInEffect);
});

</script>

<style lang="sass" scoped>
.info-list
  position: absolute
  top: 300vh

.info-element
  box-sizing: border-box
  position: relative
  width: 80vw
  margin-left: 10vw
  margin-right: 10vw
  margin-bottom: 50px
  color: #aaa
  display: flex
  opacity: 0
  transition: opacity .7s cubic-bezier(0.16, 1, 0.3, 1),transform .7s cubic-bezier(0.16, 1, 0.3, 1)


  img
    max-width: 50vw
    border-radius: 20px

  span
    color: #fff

  .element-wrapper
    width: 91.5%

  .scroll-line
        position: relative
        left: 0
        width: 8.5%
        display: flex
        flex-direction: column
        transform: scaleY(0)
        transform-origin: top
        transition: transform 2s ease-in-out

        .scroll-line-origin
            border: 2px solid #fff4
            display: inline-block
            padding: 4px
            border-radius: 50%
            box-sizing: border-box
            aspect-ratio: 1/1
            margin: 35px auto 0 auto

        .scroll-line-element
            background: linear-gradient(#7C72FF, #2DA44E 80%, #3FB950)
            width: 3px
            margin: 10px auto 0 auto
            height: 100%
            border-radius: 6px
            box-sizing: border-box

.info-element:nth-child(1) .scroll-line-element
    background: linear-gradient(#7C72FF, #323ea1 80%, #323ea1)

.info-element:nth-child(2) .scroll-line-element
    background: linear-gradient(#323ea1, #7a2da7 80%, #7a2da7)

@media screen and (max-width: 700px )
  .info-element
    display: block

    img
      display: block
      margin-left: auto
      margin-right: auto
    
    p
      margin: 20px 10vw

</style>
