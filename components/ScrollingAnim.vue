<template>
  <div class="scroll-container">
    <canvas ref="canvas" class="scroll-canvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
  const canvas = ref();

  var reachedColorChange = false;

  const frameCount = 70; //148
  const currentFrame = function(index:number) {
    return `/macbook/${index.toString().padStart(4, '0')}.png`
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
  };

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  onMounted(() => {
    const context = canvas.value.getContext('2d');
    canvas.value.width = 1920; //1158;
    canvas.value.height = 1080; //770;

    const img = new Image();
    img.src = currentFrame(1);
    img.onload = function() {
      context.clearRect(0, 0, canvas.value.width, canvas.value.height);
      context.drawImage(img, 0, 0);
    };

    const updateImage = function(index:number) {
      img.src = currentFrame(index);
      context.clearRect(0, 0, canvas.value.width, canvas.value.height);
      context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {
      const html = document.documentElement;
      const scrollTop = html.scrollTop;
      if (scrollTop > 720 && !reachedColorChange) {
        reachedColorChange = true;
      }
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() =>
        updateImage(frameIndex + 1))

      preloadImages();
    });
  });
</script>

<style lang="sass" scoped>
canvas
  position: fixed
  left: 50%
  top: 50%
  max-height: 100vh
  max-width: 100vw
  transform: translate(-50%, -50%)
</style>

