<template>
    <div class="goods-item">
        <img src="~assets/images/11.png" alt="" />
        <div class="goods-info">
            <p>标题</p>
            <span class="price">
                <small>￥</small>
                100
            </span>
            <span class="collect"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GoodsListItem',
    setup: () => {
        return {};
    },
    components: {},
};
</script>
<style lang="scss" scoped>
.goods-item {
    width: 46%;
    padding-bottom: 40px;
    position: relative;

    img {
        width: 100%;
        border-radius: 5px;
    }
    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        // 内容居中
        left: 0;
        right: 0;

        overflow: hidden;
        text-align: center;
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 3px;
        }

        .price {
            color: red;
            margin-right: 20px;
        }
        .collect {
            position: relative;
        }
        .collect::before {
            content: '';
            position: absolute;
            left: -15px;
            top: 14px;
            width: 14px;
            height: 14px;
            top: 0px;
            // 设置图片位置；图片宽高
            background: url('~assets/images/collect.png') 0 0/14px 14px;
        }
    }
}
</style>
