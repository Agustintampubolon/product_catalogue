<template>
  <div class="container mx-auto p-8">
    <div
      class="w-full border-b border-ui-medium pb-6 mb-2 lg:mb-6 flex items-center justify-between"
    >
      <h1 class="font-semibold text-3xl">Category Product</h1>
    </div>

    <div class="grid grid-cols-4 gap-8">
      <CategoryCard
        v-for="kategori in category"
        :key="kategori.id"
        :kategori="kategori"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/Item/CategoryCard.vue";
export default {
  name: "ProductDetail",
  components: {
    CategoryCard,
  },
  data() {
    return {
      //   imageToShow: "default_image",
      category: {
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

  beforeMount() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });
  },

  async fetch() {
    try {
      const response = await this.$axios.get(
        `products/category/${this.$route.params.id}`
      );

      console.log("Category: ", response.data);
      this.category = response.data;
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
