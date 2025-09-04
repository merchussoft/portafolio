import { createRouter, createMemoryHistory } from "vue-router";
import Home from '@/views/HomePage.vue';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: "/", component: Home}
    ],
    scrollBehavior(to) {
        if(to.hash) {
            return {
                el: to.hash,
                behavior: "smooth"
            };
        }
        return {top: 0}
    }
})

export default router;