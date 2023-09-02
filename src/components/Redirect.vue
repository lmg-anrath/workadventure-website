<template>
    <div v-show="timeoutComplete">
       If you are not redirected automatically, follow this <a href='https://www.lmg-anrath.de/workadventure/'>link</a>. 
    </div>
</template>

<script>
export default {
    name: 'Redirect',
    data() {
        return {
            timeoutComplete: false,
        };
    },
    created() {
        setTimeout(() => this.timeoutComplete = true, 1000);
    }
}
</script>

<style scoped>

</style>