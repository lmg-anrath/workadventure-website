<script lang="ts" setup>
import '~/assets/style.sass';

    const timeoutComplete = ref(false);

    onMounted(() => {
        setTimeout(() => timeoutComplete.value = true, 1000);
    });
</script>

<template>
    <div v-show="timeoutComplete">
        If you are not redirected automatically, follow this <a href='https://www.lmg-anrath.de/workadventure/'>link</a>.
    </div>
</template>