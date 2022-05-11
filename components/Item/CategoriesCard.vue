<template>
  <div>
    <nuxt-link :to="`/products/category/${kategori}`">
      <div class="group relative">
        <div
          class="w-full min-h-auto bg-orange-600 rounded-md overflow-hidden group-hover:opacity-90 lg:h-20 lg:aspect-none"
        >
          <div class="mt-4 mb-4">
            <p
              class="text-md text-center text-uppercase font-semibold text-gray-800"
            >
              {{ kategori }}
            </p>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CategoriesCard",
  props: {
    kategori: {
      type: String,
    },
  },
};
</script>
