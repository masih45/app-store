app.component('cartcontent1', {
    props: {
      selectedVariant: {
        type: Object, 
        required: true
      },
    },
    template: `
      <ul>
        <li>
          <img :src="selectedVariant.image" alt="Product Image" style="width: 50px; height: 50px;">
          <p>color: {{ selectedVariant.color }} - Quantity Left: {{ selectedVariant.quantity }} - Price: $ {{ selectedVariant.price }}</p>
        </li>
      </ul>
    `,
    computed: {

    },
  });