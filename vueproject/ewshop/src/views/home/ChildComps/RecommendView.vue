<template>
    <div class="recommend">
        <div
            class="recommend-item"
            v-for="item in recommends.slice(0, 4)"
            :key="item.id"
        >
            <a href="#" @click="goD(item.id)">
                <img :src="item.cover_url" :alt="item.description" />
                <div>{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default: () => [],
        },
    },
    setup: props => {
        const router = useRouter();

        const goD = id => {
            router.push({ path: '/detail', query: { id } });
        };
        return {
            goD,
        };
    },
    components: {},
};
</script>

<style scoped lang="scss">
.recommend {
    width: 100%;
    display: flex;
    text-align: center;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
}
.recommend-item {
    flex: 1;
    img {
        width: 80px;
        height: 70px;
        margin-bottom: 10px;
    }
}
</style>
