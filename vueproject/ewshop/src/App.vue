<template>
    <router-link to="/">首页</router-link>
    |
    <router-link to="/category">分类</router-link>
    |
    <router-link to="/shopcart">购物车</router-link>
    |
    <router-link to="/profile">我的</router-link>
    <router-view />
</template>

<style lang="scss">
@import url('assets/css/base.css');
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
