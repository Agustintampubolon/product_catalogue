<template>
  <div class="sticky top-0 z-20">
    <header class="relative bg-white">
      <nav
        class="px-4 sm:px-6 lg:px-8 border-b border-ui-medium flex items-center justify-between"
      >
        <div class="flex items-center">
          <div class="hidden lg:flex lg:items-center">
            <div
              class="hidden flex-grow items-center justify-center lg:flex text-sm font-medium"
            >
              <nuxt-link
                to="/"
                class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 last:mr-0"
              >
                Home
              </nuxt-link>
              <nuxt-link
                to="/"
                class="block mt-4 mr-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-600 last:mr-0"
              >
                Products
              </nuxt-link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
