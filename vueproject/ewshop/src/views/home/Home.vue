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

        <goods-list :goods="showGoods"></goods-list>

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
import { onMounted, ref, reactive, computed } from 'vue';
import NavBar from 'components/common/navbar/NavBar.vue';
import RecommendView from './ChildComps/RecommendView.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from '@/components/content/goods/GoodsList.vue';
import { getHomeGoods } from '@/network/home';
export default {
    name: 'Home',
    setup: (props, { emit }) => {
        let recommends = ref([]);
        // 临时变量
        let temid = ref(0);
        // 商品列表((数据模型))
        let goods = reactive({
            sales: { page: 0, list: [] },
            new: { page: 0, list: [] },
            recommend: { page: 0, list: [] },
        });
        let currentType = ref('sales');

        const showGoods = computed(() => {
            return goods[currentType.value].list;
        });

        const tabClick = index => {
            temid.value = index;

            let types = ['sales', 'new', 'recommend'];
            currentType.value = types[index];
        };
        onMounted(() => {
            getHomeAllData().then(res => {
                recommends.value = res.goods.data;
            });

            getHomeGoods('sales').then(
                res => (goods.sales.list = res.goods.data)
            );

            getHomeGoods('recommend').then(res => {
                goods.recommend.list = res.goods.data;
            });

            getHomeGoods('new').then(res => (goods.new.list = res.goods.data));
        });
        return {
            showGoods,
            tabClick,
            temid,
            recommends,
            goods,
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
