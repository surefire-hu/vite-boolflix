<script>
export default {
    name: 'Flag',
    props: {
        language: {
            type: String,
            required: true,
        },
    },
    computed: {
        flagUrl() {
            return `https://flagpedia.net/data/flags/w580/${this.language}.webp`;
        }
    },
};
</script>

<template>
    <img v-if="flagUrl" :src="flagUrl" alt="Language Flag" class="w-6 h-4" />
</template>

<style scoped>
</style>