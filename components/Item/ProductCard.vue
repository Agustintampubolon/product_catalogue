<template>
  <div>
    <div class="card">
      <div class="card-body">
        <nuxt-link :to="`/products/${item.id}`">
          <div class="group relative">
            <div
              class="w-full min-h-auto bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
            >
              <div class="w-auto h-full object-center object-cover bg-gray-100">
                <img
                  alt=""
                  :src="item.image"
                  style="max-width: 100%; display: block; position: static"
                />
              </div>
            </div>
            <div class="pb-2 pt-2">
              <h3
                class="mt-1 mb-2 text-sm text-gray-700 font-semibold text-base leading-tight truncate"
              >
                {{ item.title }}
              </h3>
              <div class="text-lg font-semibold text-red-800">
                {{ item.price | formatPrice }}
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
  name: "ProductCard",
  props: {
    item: {
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

<style>
/* html,
body {
  font-family: Roboto, "Helvetica Neue", Helvetica, Arial, 文泉驛正黑,
    "WenQuanYi Zen Hei", "Hiragino Sans GB", "儷黑 Pro", "LiHei Pro", "Heiti TC",
    微軟正黑體, "Microsoft JhengHei UI", "Microsoft JhengHei", sans-serif;
} */
</style>
