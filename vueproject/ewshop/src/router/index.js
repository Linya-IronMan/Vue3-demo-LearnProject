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
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/shopcart',
        name: 'ShopCart',
        component: ShopCart,
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

export default router;
