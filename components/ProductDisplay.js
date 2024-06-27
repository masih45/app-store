app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template: 
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
          <cartcontent1 v-if="showCart" :selectedVariant="variants[selectedVariant]"></cartcontent1>
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
  
          <p>Shipping: {{ shipping }}</p>
          <p>Price: $ {{ variants[selectedVariant].price }}</p>
          
          <product-details :details="details"></product-details>
  
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data() {
      return {
          product: 'Mens Suits Slim Fit 2 Piece Formal for Men Wedding Casual Business Jacket Pants',
          brand: 'KUDORO',
          selectedVariant: 0,
          details: ['Can be costomized', 'Short sleeve，long sleeve，Half sleeve，sleeveless, etc','Green, Blue'],
          variants: [
            { id: 2234, color: 'green', image: 'green.jpeg', quantity: 5, price: 20 },
            { id: 2235, color: 'blue', image: 'blue1.jpeg', quantity: 0, price: 18 },
          ],
          reviews: [],
          showCart: false,
      }
    },
    methods: {
      addToCart() {
        if (this.inStock > 0) {
            this.$emit('add-to-cart', this.variants[this.selectedVariant]);
            this.variants[this.selectedVariant].quantity -= 1;
            this.showCart = true; // Reduce the quantity after adding to the cart
            
        }
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
          this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
          if (this.premium) {
            return 'Free'
          }
          return 2.99
        }
    }
  })