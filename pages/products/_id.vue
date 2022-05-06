<template>
  <div class="container mx-auto p-8">
    <div class="card">
      <div class="card-body">
        <div class="flex flex-col lg:flex-row">
          <div class="lg:w-3/5 lg:pr-14">
            <div class="flex">
              <div class="hidden lg:flex flex-col items-center mr-4">
                <div
                  class="w-auto h-full object-center object-cover px-4 space-y-4"
                >
                  <img
                    alt=""
                    width="150"
                    :src="product.image"
                    class="cursor-pointer"
                  />
                  <img
                    alt=""
                    width="150"
                    :src="product.image"
                    class="cursor-pointer"
                  />
                </div>
              </div>

              <div
                class="h-auto w-full flex-1 flex flex-col rounded-lg overflow-hidden"
              >
                <div class="w-auto h-full">
                  <img alt="" :src="product.image" class="w-full" />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 lg:mt-0 lg:w-2/5 lg:max-w-xl">
            <h2 class="font-semibold text-uppercase text-2xl">
              {{ product.title }}
            </h2>
            <p class="text-lg mt-2 mb-4">
              {{ product.rating.rate }} Penilaian | Tersisa
              {{ product.rating.count }} Buah
            </p>
            <hr />
            <p v-if="product.price" class="price text-lg mt-2 mb-4">
              {{ formatPrice(product.price) }} USD
            </p>
            <p v-else>10 USD</p>
            <p class="font-light" style="text-align: justify !important">
              {{ product.description }}
            </p>
            <div class="inline-flex mt-12">
              <button class="btn-ui mr-2 px-12">Add to bag</button>
              <div class="flex items-center rounded-md px-4 py-2 shadow">
                <button>–</button>
                <span class="w-8 text-center">1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      imageToShow: "default_image",
      product: {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        price: [{ price: [{ amount: 0, currency_code: "usd" }] }],
        rating: [{ count: 1, rate: 5 }],
        images: [
          {
            id: "default_image",
            url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          },
          {
            id: "another_image",
            url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          },
        ],
      },
    };
  },

  async fetch() {
    try {
      const response = await this.$axios.get(
        `products/${this.$route.params.id}`
      );

      console.log("Product: ", response.data);
      this.product = response.data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
<style>
.price {
  font-size: 30px;
  color: #8b0000;
}
</style>
