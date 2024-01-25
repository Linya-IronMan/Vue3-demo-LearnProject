import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Detail = () => import('views/detail/Detail.vue');
const Profile = () => import('views/profile/Profile.vue');
const ShopCart = () => import('views/shopcart/ShopCart.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '图书兄弟-首页',
        },
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
        meta: {
            title: '图书兄弟-商品分类',
        },
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        meta: {
            title: '图书兄弟-商品详情',
        },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            title: '图书兄弟-个人中心',
        },
    },
    {
        path: '/shopcart',
        name: 'ShopCart',
        component: ShopCart,
        meta: {
            title: '图书兄弟-购物车',
        },
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
];

// .env.development 无法控制值
console.log('======', process.env.BASE_URL);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    // 如果没有登录，在这里 next
    next();
    document.title = to.meta.title;
});
export default router;
