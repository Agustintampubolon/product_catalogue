<template>
  <div>
    <nuxt-link :to="`/products/${item.id}`">
      <div class="group relative">
        <div
          class="w-full min-h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
        >
          <div class="w-auto h-full object-center object-cover bg-gray-100">
            <img alt="" :src="item.image" />
          </div>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700 font-normal">
            {{ item.title }}
          </h3>
          <p class="text-sm font-semibold text-gray-900">
            {{ formatPrice(item.price) }} USD
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
