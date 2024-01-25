<template>
    <div class="home">
        <nav-bar>
            <template v-slot:default>图书兄弟</template>
        </nav-bar>

        <div class="banners">
            <img src="~assets/images/1.png" alt="" />
        </div>

        <recommend-view :recommends="recommends"></recommend-view>
    </div>
</template>

<script>
import { getHomeAllData } from 'network/home';
import { onMounted, ref, reactive } from 'vue';
import NavBar from 'components/common/navbar/NavBar.vue';
import RecommendView from './ChildComps/RecommendView.vue';
export default {
    name: 'Home',
    setup: () => {
        let recommends = ref([]);
        onMounted(() => {
            getHomeAllData().then(res => {
                recommends.value = res.goods.data;
                console.log('==== Home ====', recommends.value);
            });
        });
        return {
            recommends,
        };
    },
    components: {
        RecommendView,
        NavBar,
    },
};
</script>

<style scoped>
.banners img {
    width: 100%;
    height: auto;
    margin-top: 45px;
}
</style>
