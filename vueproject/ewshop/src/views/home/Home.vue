<template>
    <div class="home">
        <h1>首页</h1>
    </div>
</template>

<script>
import { getHomeAllData } from 'network/home';
import { onMounted, ref } from 'vue';
export default {
    name: 'Home',
    setup: () => {
        const banner = ref([]);
        onMounted(() => {
            getHomeAllData().then(res => {
                banner.value = res.slides;
                console.log('getHomeAllData', banner.value);
            });
        });
        return {
            banner,
        };
    },
    components: {},
};
</script>

<style scoped></style>
