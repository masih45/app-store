const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(variant) {
            this.cart.push(variant)
        },
    }
});

