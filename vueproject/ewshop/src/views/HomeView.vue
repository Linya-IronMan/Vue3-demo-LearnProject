<template>
    <div class="home">
        <div id="demo"></div>
        <img alt="Vue logo" src="@/assets/images/1.png" />
        <!--    别名前加上波浪线，启用别名。否则会直接去找当前目录下的 assets      -->
        <img alt="Vue logo" src="~assets/images/2.png" />
        <img alt="Vue logo" :src="imgsrc" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <Home />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld.vue';
import Home from 'views/home/Home.vue';

export default {
    name: 'HomeView',
    data() {
        return {
            imgsrc: require('../assets/images/2.png'),
        };
    },
    components: {
        HelloWorld,
        Home,
    },
};
</script>

<style>
#demo {
    background-image: url('~assets/images/3.png');
    height: 300px;
    width: 300px;
}
</style>
