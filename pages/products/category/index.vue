<template>
  <div class="container mx-auto p-8">
    <div
      class="w-full border-b border-ui-medium pb-6 mb-2 lg:mb-6 flex items-center justify-between"
    >
      <h1 class="font-semibold text-3xl">All Category</h1>
    </div>

    <div
      class="mt-2 grid grid-cols-1 gap-y-5 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3"
    >
      <CategoryCard
        v-for="(kategori, i) in categories"
        :key="i"
        :kategori="kategori"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from "@/components/Item/CategoryCard.vue";
export default {
  components: {
    CategoryCard,
  },
  name: "CategoryIndex",
  data() {
    return {
      categories: [
        {
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
      ],
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.get("products/categories");

      console.log("Category: ", response.data);
      this.categories = response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
