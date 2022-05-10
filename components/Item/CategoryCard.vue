<template>
  <div>
    <div class="card">
      <div class="card-body">
        <nuxt-link :to="`/products/${kategori.id}`">
          <div class="group relative">
            <div
              class="w-full min-h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
            >
              <div class="w-auto h-full object-center object-cover bg-gray-100">
                <img alt="" :src="kategori.image" />
              </div>
            </div>
            <div class="pb-2 pt-2">
              <h3
                class="mt-1 mb-2 text-sm text-gray-700 font-semibold text-base leading-tight truncate"
              >
                {{ kategori.title }}
              </h3>
              <div class="font-semibold text-red-800">
                {{ kategori.price | formatPrice }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    kategori: {
      type: Array,
    },
  },

  filters: {
    formatPrice(price) {
      return `$${price}`;
    },
  },
};
</script>
