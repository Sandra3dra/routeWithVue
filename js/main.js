let SplashComponent = {
    template:  `<h1>Welcome to my Super Great App!</h1>`
}

let AppComp = {
    template:  `<h1>This is APPPPPP Page</h1>`
}

let ErrorComp = {
    template:  `<h1>This page doesn't exist...</h1>`
}

// this is the same as express
const routes = [
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/app', name: 'app', component: AppComp },
    { path: '*', name: 'error', component: ErrorComp }
]

const router = new VueRouter({
    routes // short for routes: routes
})

const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");