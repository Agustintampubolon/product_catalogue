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
                    @click="imageToShow = product.image"
                    style="transform: rotateY(180deg)"
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
                class="relative h-auto w-full flex-1 flex flex-col rounded-lg overflow-hidden"
              >
                <div class="w-auto h-full">
                  <div v-if="product.image === imageToShow">
                    <img
                      alt=""
                      :src="product.image"
                      class="w-full"
                      style="transform: rotateY(180deg)"
                    />
                  </div>
                  <div v-else>
                    <img alt="" :src="product.image" class="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 lg:mt-0 lg:w-2/5 lg:max-w-xl">
            <h2 class="font-semibold text-uppercase text-2xl">
              {{ product.title }}
            </h2>
            <p class="rating text-lg mt-2 mb-4">
              {{ product.rating.rate }}
              <span class="text-muted">Penilaian | Tersisa</span>
              {{ product.rating.count }}
              <span class="text-muted">Buah</span>
            </p>
            <p v-if="product.price" class="price text-lg mt-2 mb-4">
              {{ product.price | formatPrice }}
            </p>
            <p v-else>10 USD</p>
            <p class="font-light" style="text-align: justify !important">
              {{ product.description }}
            </p>
            <div class="inline-flex mt-12">
              <button class="btn-ui mr-2 px-12" @click="addToBag()">
                Add to bag
              </button>
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
    <br />
    <br />
    <div class="flex items-center justify-between mb-2">
      <p class="text-md text-muted font-semibold text-uppercase">
        You Might Also Like
      </p>
      <nuxt-link class="text-ui-dark flex items-center" to="/products">
        <span class="mr-2 text-ui-dark">Browse all products</span>
        <svg
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z"
            fill="#89959C"
          />
        </svg>
      </nuxt-link>
    </div>
    <div
      class="mt-2 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3"
    >
      <ProductCard
        v-for="product in productFeatured"
        :key="product.id"
        :item="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Item/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  name: "ProductDetail",
  data() {
    return {
      imageToShow: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

      productFeatured: [],

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

  // async fetch() {
  //   try {
  //     const response = await this.$axios.get(
  //       `products/${this.$route.params.id}`
  //     );

  //     console.log("Product: ", response.data);
  //     this.product = response.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },

  async fetch() {
    try {
      const [responseProduct, responseProductFeatured] = await Promise.all([
        this.$axios.get(`products/${this.$route.params.id}`),
        this.$axios.get("products?sort=desc"),
      ]);
      console.log(
        "Product: ",
        responseProduct.data,
        "ProductFeatured: ",
        responseProductFeatured.data
      );
      this.product = responseProduct.data;
      this.productFeatured = responseProductFeatured.data.splice(0, 8);
    } catch (err) {
      console.log(err);
    }
  },

  filters: {
    formatPrice(price) {
      return `$${price}`;
    },
  },

  methods: {
    addToBag() {
      this.$emit("add-to-bag", {
        productId: this.product.id,
      });
    },
  },
};
</script>
<style>
.price {
  font-size: 30px;
  color: #8b0000;
  padding: 15px 20px;
  background: #fafafa;
}
</style>
