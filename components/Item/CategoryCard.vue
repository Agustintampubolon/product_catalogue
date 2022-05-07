<template>
  <div>
    <nuxt-link :to="`/products/${kategori.id}`">
      <div class="group relative">
        <div
          class="w-full min-h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
        >
          <div class="w-auto h-full object-center object-cover bg-gray-100">
            <img alt="" :src="kategori.image" />
          </div>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700 font-normal">
            {{ kategori.title }}
          </h3>
          <p class="text-md font-semibold text-red-800">
            {{ kategori.price | formatPrice }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    kategori: {
      type: Object,
    },
  },

  filters: {
    formatPrice(price) {
      return `$${price}`;
    },
  },
};
</script>
