<template>
    <div>
        <nav-bar>
            <template v-slot:default>商品详情</template>
        </nav-bar>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NavBar from 'components/common/navbar/NavBar.vue';
export default {
    name: 'Detail',
    setup: () => {
        const route = useRoute();
        let id = ref(0);
        id.value = route.query.id;
        return {
            id,
        };
    },
    components: {
        NavBar,
    },
};
</script>

<style scoped></style>
