<template>
    <div class="home">
        <nav-bar>
            <template v-slot:default>图书兄弟</template>
        </nav-bar>

        <div class="banners">
            <img src="~assets/images/1.png" alt="" />
        </div>

        <recommend-view :recommends="recommends"></recommend-view>
        <tab-control
            @tabClick="tabClick"
            :title="['畅销', '新书', '精选']"
        ></tab-control>

        <goods-list></goods-list>

        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
        <div>{{ temid }}</div>
    </div>
</template>

<script>
import { getHomeAllData } from 'network/home';
import { onMounted, ref, reactive } from 'vue';
import NavBar from 'components/common/navbar/NavBar.vue';
import RecommendView from './ChildComps/RecommendView.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue';
export default {
    name: 'Home',
    setup: (props, { emit }) => {
        let recommends = ref([]);
        // 临时变量
        let temid = ref(0);
        const tabClick = index => (temid.value = index);
        onMounted(() => {
            getHomeAllData().then(res => {
                recommends.value = res.goods.data;
            });
        });
        return {
            tabClick,
            temid,
            recommends,
        };
    },
    components: {
        GoodsList,
        TabControl,
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
