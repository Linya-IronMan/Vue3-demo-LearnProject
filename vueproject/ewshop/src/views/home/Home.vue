<template>
    <div class="home">
        <nav-bar>
            <template v-slot:default>图书兄弟</template>
            <template v-slot:right></template>
        </nav-bar>
    </div>
</template>

<script>
import { getHomeAllData } from 'network/home';
import { onMounted, ref } from 'vue';
import NavBar from 'components/common/navbar/NavBar.vue';
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
    components: {
        NavBar,
    },
};
</script>

<style scoped></style>
