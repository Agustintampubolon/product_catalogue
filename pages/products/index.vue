<template>
  <div class="container mx-auto p-8">
    <div class="border-b border-ui-medium pb-6 mb-2 md:mb-6 flex items-center">
      <input
        type="text"
        class="form-control"
        placeholder="Mens Cotton Jacket....."
        v-model="searchQuery"
      />
    </div>
    <div
      class="w-full border-b border-ui-medium pb-6 mb-2 lg:mb-6 flex items-center justify-between"
    >
      <h1 class="font-semibold text-3xl">Products</h1>
    </div>

    <div
      class="mt-2 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3"
    >
      <ProductCard
        v-for="product in filterProducts"
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
  name: "ProductsIndex",
  data() {
    return {
      searchQuery: "",

      products: [],
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
      const response = await this.$axios.get("products");

      console.log("Product: ", response.data);
      this.products = response.data;
    } catch (err) {
      console.log(err);
    }
  },

  computed: {
    filterProducts() {
      if (this.searchQuery != "" && this.searchQuery) {
        return this.products.filter((products) => {
          return products.title
            .toUpperCase()
            .includes(this.searchQuery.toUpperCase());
        });
      } else {
        return this.products;
      }
    },
  },
};
</script>
