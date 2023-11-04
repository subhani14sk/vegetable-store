new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 1,
                name: 'Tomato',
                description: 'Fresh and organic tomatoes',
                price: 2.5,
                image: 'istockphoto-1450576005-170667a.webp'
            },
            {
                id: 2,
                name: 'Carrot',
                description: 'Sweet and crunchy carrots',
                price: 1.8,
                image: 'depositphotos_11489080-stock-photo-fresh-carrots.jpg'
            },
            // Add more vegetable products as needed
        ],
        cart: []
    },
    methods: {
        addToCart(product) {
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price
            });
        }
    }
});
