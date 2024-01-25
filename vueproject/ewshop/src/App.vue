<template>
    <router-view />
    <nav id="nav">
        <router-link class="tab-bar-item" to="/">
            <div class="icon"><i class="iconfont icon-home"></i></div>
            <div>首页</div>
        </router-link>
        <router-link class="tab-bar-item" to="/category">
            <div class="icon"><i class="iconfont icon-category"></i></div>
            <div>分类</div>
        </router-link>
        <router-link class="tab-bar-item" to="/shopcart">
            <div class="icon"><i class="iconfont icon-cart"></i></div>
            <div>购物车</div>
        </router-link>
        <router-link class="tab-bar-item" to="/profile">
            <div class="icon"><i class="iconfont icon-profile"></i></div>
            <div>我的</div>
        </router-link>
    </nav>
</template>

<style lang="scss">
@import url('assets/css/base.css');
@import url('assets/font/iconfont.css');
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1);
    a {
        &.router-link-exact-active {
            color: var(--color-high-text);
        }
        color: var(--color-text);
    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 50px;
        font-size: var(--font-size);
    }
    .tab-bar-item .icon {
        vertical-align: middle;
        margin-top: 3px;
        display: inline-block;
        height: 24px;
        width: 24px;
    }
}
</style>
