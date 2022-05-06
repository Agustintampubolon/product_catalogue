<template>
  <div>
    <div class="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12">
      <div
        class="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto"
      >
        <div class="w-auto h-full object-center object-cover p-12">
          <img
            width="600"
            alt=""
            src="~/static/img/81Zt42ioCgL._AC_SX679_.png"
          />
        </div>
        <div>
          <h1 class="text-4xl">CLAIM YOUR MERCH</h1>
          <p class="mt-2 text-lg font-normal">
            Men's Clothing, Jewelery, Electronics, Women's Clothing
          </p>
          <br />
          <a href="/products" class="btn-ui mt-4 min-w-full lg:min-w-0"
            >Learn more
          </a>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-8 py-16">
      <div class="card">
        <div class="card-body">
          <div class="flex items-center justify-between mb-6">
            <p class="category text-2xl font-semibold text-uppercase">
              Kategori
            </p>
          </div>
          <div class="grid grid-cols-4 gap-8">
            <CategoriesCard
              v-for="(kategori, i) in categories"
              :key="i"
              :kategori="kategori"
            />
          </div>
        </div>
      </div>
      <br />
      <div class="card">
        <div class="card-body">
          <div class="flex items-center justify-between mb-6">
            <p class="featured text-2xl font-semibold text-uppercase">
              Featured
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
          <div class="grid grid-cols-4 gap-8">
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :item="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/Item/ProductCard.vue";
import CategoriesCard from "@/components/Item/CategoriesCard.vue";

export default {
  components: {
    ProductCard,
    CategoriesCard,
  },
  name: "IndexPage",
  data() {
    return {
      products: [],

      categories: [],
    };
  },

  async asyncData({ $axios }) {
    try {
      const [responseProduct, responseCategories] = await Promise.all([
        $axios.get("products"),
        $axios.get("products/categories"),
      ]);

      console.log(
        "Product: ",
        responseProduct.data,
        "Categories: ",
        responseCategories.data
      );

      return {
        products: responseProduct.data.splice(0, 4),
        categories: responseCategories.data,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
.btn-ui {
  @apply py-2 px-4 bg-ui-dark text-white text-sm font-medium rounded-md shadow;
  @apply focus:outline-none focus:ring-2 focus:ring-ui-dark focus:ring-opacity-75 disabled:bg-ui-medium;
}

.category {
  font-size: 20px;
  color: #8b0000;
}

.featured {
  font-size: 30px;
  color: #8b0000;
}
</style>
