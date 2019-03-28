export const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("@/views/homes.vue"),
        meta: {
            name: '首页',
            tabbars: 0
        }
    },
    {
        path: "/sales",
        name: "sales",
        component: () =>
            import ("@/views/sales.vue"),
        meta: {
            name: '高销量',
            tabbars: 1
        }
    },
    {
        path: "/future",
        name: "future",
        component: () =>
            import ("@/views/future.vue"),
        meta: {
            name: '近期',
            tabbars: 4
        }
    },
    {
        path: "/brokerage",
        name: "brokerage",
        component: () =>
            import ("@/views/brokerage.vue"),
        meta: {
            name: '高佣金',
            tabbars: 3
        }
    }, {
        path: "/explos",
        name: "explos",
        component: () =>
            import ("@/views/explos.vue"),
        meta: {
            name: '爆款',
            tabbars: 2
        }
    }
];