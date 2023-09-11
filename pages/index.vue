<template>
  <div class="IndexPage">
    <section class="Branding">
      <div class="Container constraint">
        <h4>
          Branding
        </h4>

        <div class="Products">
          <div v-for="(product, index) in products" :key="index" class="Product">
            <img v-if="product.bg" :src="`/images/products/product-${index+1}-bg-image.webp`" alt="" class="BgImage">
            <img :src="`/images/products/product-${index+1}.webp`" alt="" class="ActualImage">
          </div>
        </div>

        <a href="" class="ViewMore">
          View More
        </a>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',

  data() {
    return {
      products: [
        {
          name: "Black Tote Bag",
          bg: true
        },
        {
          name: "Yellow Tote Bag",
          bg: false
        },
        {
          name: "Cups",
          bg: true
        },
        {
          name: "Checkered Bag",
          bg: true
        },
      ]
    }
  },

  methods: {

  }, 

  mounted() {

  }
}
</script>

<style lang="postcss" scoped>
.IndexPage {
  .Branding {
    @apply mt-16 md:mt-20 lg:mt-24 xl:mt-[120px] mb-14 lg:mb-20 xl:mb-[100px]; 

    .Container {
      @apply space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-[70px] 2xl:space-y-20;

      .Products {
        @apply grid grid-cols-1 md:grid-cols-2 gap-5;

        .Product {
          @apply rounded-[16px] lg:rounded-[30px] max-w-[335px] md:max-w-none h-[355px] md:h-[376px] lg:h-[512px] xl:h-[648px] 2xl:h-[720px] overflow-hidden relative;

          .BgImage {
            @apply absolute object-cover object-center w-full h-full
          }

          .ActualImage {
            @apply z-50 relative
          }

          &:nth-child(1) {
            .ActualImage {
              @apply w-60 md:w-72 lg:w-[360px] xl:w-[474px] 2xl:w-[502px] left-[20%] md:left-[15%] lg:left-[90px] xl:left-[114px] 2xl:left-32 top-6 md:top-3 lg:top-6
            }
          }

          &:nth-child(4) {
            @apply flex justify-center items-center;
            
            .ActualImage {
              @apply w-[230px] md:w-[242px] lg:w-[330px] xl:w-[417px] 2xl:w-[464px];
            }
          }
        }
      }

      .ViewMore {
        @apply w-fit mx-auto text-primary bg-secondary rounded-lg xl:rounded-xl px-5 xl:px-[30px] py-3.5 xl:py-4 block font-semibold text-sm xl:text-[15px] !leading-[120%]
      }
    }
  }
}
</style>