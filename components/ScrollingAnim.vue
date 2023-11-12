<template>
    <div ref="container" class="scroll-container">
        <canvas ref="canvas" class="scroll-canvas"></canvas>
        <div ref="content" class="scroll-content">
            <div class="scroll-text-spacer"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const container = ref();
const canvas = ref();
const content = ref();

const frameCount = 35; //148
const currentFrame = function (index: number) {
    if (index < 0 || index > 35) {
        return '/macbook2/0000.png';
    }
    return `/macbook2/${index.toString().padStart(4, '0')}.png`
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
};

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const stickCanvasAtCenter = () => {
    const scrollY = window.scrollY;
    const containerTop = container.value.offsetParent.offsetTop;
    console.log(containerTop);
    const containerHeight = container.value.offsetHeight;
    const canvasHeight = canvas.value.offsetHeight;
    const contentTop = content.value.offsetTop;
    const contentHeight = content.value.offsetHeight;

    // Stick, if the canvas has reached the center of the screen (vertically)
    if (scrollY + window.innerHeight / 2 >= containerTop + canvasHeight / 2 && scrollY < containerHeight + containerTop - window.innerHeight / 2 - canvasHeight / 2) {
        canvas.value.style.position = 'fixed';
        canvas.value.style.top = '50%';
        canvas.value.style.transform = 'translate(-50%, -50%)';
        content.value.style.opacity = '0';
    } else if (scrollY > containerTop + containerHeight - window.innerHeight / 2 - canvasHeight / 2) {
        canvas.value.style.position = 'absolute';
        canvas.value.style.top = `${containerHeight - canvasHeight}px`;
        canvas.value.style.transform = 'translateX(-50%)';
        content.value.style.opacity = '1';
    } else {
        canvas.value.style.position = 'absolute';
        canvas.value.style.top = '0';
        canvas.value.style.transform = '';
    }

    if (scrollY + window.innerHeight / 2 >= contentTop + containerTop) {
        // content element has reached the center of the screen
        content.value.style.marginLeft = '10vw';
        content.value.style.marginRight = '10vw';
    } else {
        content.value.style.marginLeft = '20vw';
        content.value.style.marginRight = '0vw';
    }
};

onMounted(() => {
    const context = canvas.value.getContext('2d');
    canvas.value.width = 1920; //1158;
    canvas.value.height = 1080; //770;

    const img = new Image();
    img.src = currentFrame(1);
    img.onload = function () {
        context.clearRect(0, 0, canvas.value.width, canvas.value.height);
        context.drawImage(img, 0, 0);
    };

    const updateImage = function (index: number) {
        img.src = currentFrame(index);
        context.clearRect(0, 0, canvas.value.width, canvas.value.height);
        context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {
        var scrollTop = window.scrollY - container.value.offsetParent.offsetTop / 2;
        if (scrollTop < 0) {
            scrollTop = 0;
        }
        const maxScrollTop = container.value.offsetHeight - canvas.value.offsetHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
            frameCount - 1,
            Math.ceil(scrollFraction * frameCount)
        );

        requestAnimationFrame(() =>
            updateImage(frameIndex + 1));

        stickCanvasAtCenter();
    });

    preloadImages();
});
</script>

<style lang="sass" scoped>
.scroll-container
    position: relative
    width: 100%
    height: 200vh
    display: flex
    justify-content: center
    align-items: flex-start
    overflow: hidden
    .scroll-canvas
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-50%)
        width: 100%
        min-width: 300px
        max-width: 1500px

    .scroll-content
        position: inherit
        top: 170vh
        left: 0
        width: 80vw
        opacity: 0
        transition: opacity 0.5s ease-in-out, margin 1s ease-in-out
        display: flex
        flex-direction: column

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

        .scroll-line-element
            background: linear-gradient(transparent, #7C72FF 30%)
            width: 3px
            margin: 10px auto 0 auto
            height: 100%
            border-radius: 6px
            box-sizing: border-box

    .scroll-text
        text-align: left
        padding-left: 0
        width: calc(91.5% - 20vw)
        box-sizing: border-box

    .scroll-text-spacer
        width: 20vw
</style>

