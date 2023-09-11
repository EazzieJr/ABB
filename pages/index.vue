<template>
  <div class="IndexPage">
    <section class="Hero">
      <div class="Container constraint">
        <div class="TopLeft">
          <div class="Texts">
            <h1>
              Explore my curated collections to find the perfect pairings
            </h1>

            <p>
              250+ meticulously designed icons for seamless web, app, and mobile perfection. Suitable for any kind of project now available for download in your favourite format.
            </p>
          </div>
          
          <div class="Buttons start">
            <button class="DownloadIcon">
              Download Icon
            </button>
            
            <button class="ContactMe">
              Contact Me
            </button>
          </div>

          <div class="Tools start">
            <a v-for="tool in tools" :key="tool.name" :href="tool.link">
              <img :src="`/svg/${tool.name}.svg`" alt="">
            </a>
          </div>
        </div>

        <div class="BottomRight">
          <div class="Image">
            <img src="/images/hero-temp.png" alt="">
          </div>
        </div>
      </div>
    </section>
    
    <section class="Styles">
      <div class="Container">
        <div class="Top constraint">
          <h2>
            Two Dynamic Styles <br class="hidden md:block">
            Where Linear Meets Bold
          </h2>

          <div class="StyleTypes">
            <div v-for="(style, index) in styleTypes" :key="index" class="Type">
              <img :src="`/svg/${style.type}.svg`" alt="">

              <div class="Texts">
                <span>
                  {{ style.type }}
                </span>

                <p>
                  {{ style.deats }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="Marquees">
          <div class="MarqueeOne start">
            <div v-for="(marquee, index) in marqueeOne" :key="index" class="MarqueeItem start">
              <div class="Icon">
                <img :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}.svg`" alt="">
              </div>

              <span>
                {{ marquee }}
              </span>
            </div>
          </div>

          <div class="MarqueeTwo start">
            <div v-for="(marquee, index) in marqueeTwo" :key="index" class="MarqueeItem start">
              <div class="Icon">
                <img :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}.svg`" alt="">
              </div>

              <span>
                {{ marquee }}
              </span>
            </div>
          </div>

          <div class="MarqueeThree start">
            <div v-for="(marquee, index) in marqueeThree" :key="index" class="MarqueeItem start">
              <div class="Icon">
                <img :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}.svg`" alt="">
              </div>

              <span>
                {{ marquee }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="About">
      <div class="Container constraint">
        <h3>
          About Our Creator
        </h3>

        <div class="Content md:between">
          <div class="TopLeft">
            <p>
              I'm Carol, based in Toronto, Canada. I've polished my skills in Adobe Creative Suite, with a strong focus on Illustrator and Photoshop.
              <br/><br/>
              What makes me stand out is my talent for turning ideas into designs that are seriously captivating. Whether I'm whipping up snazzy brand identities, nailing those pixel-perfect icons, or bringing illustrations to life, I'm all about adding that extra dash of pizzazz.
              <br/><br/>
              If you've got a project in mind, don't hesitate to reach out to me!
            </p>

            <a href="" class="ContactMe">
              Contact Me
            </a>
          </div>

          <div class="BottomRight">
            <div class="Image">
              <img src="/images/abb-temp.webp" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    
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
      ],

      styleTypes: [
        {
          type: "linear",
          deats: "Elegant and adaptable for today's design needs."
        },

        {
          type: "bold",
          deats: "Bold icons for attention-grabbing projects."
        }
      ],

      marqueeOne: [
        "Home",
        "Heart",
        "Search",
        "Trend down",
        "Notification",
        "Message",
        "Circle slash",
        "List",
        "Home",
        "Heart",
        "Search",
        "Trend down",
        "Notification",
        "Message",
        "Circle slash",
        "List",
        "Home",
        "Heart",
        "Search",
        "Trend down",
        "Notification",
        "Message",
        "Circle slash",
        "List",
      ],

      marqueeTwo: [
        "Trend down",
        "User",
        "Map",
        "Settings",
        "Navigation",
        "Bar chart",
        "Pie chart",
        "Search",
        "Trend down",
        "User",
        "Map",
        "Settings",
        "Navigation",
        "Bar chart",
        "Pie chart",
        "Search",
        "Trend down",
        "User",
        "Map",
        "Settings",
        "Navigation",
        "Bar chart",
        "Pie chart",
        "Search",
      ],

      marqueeThree: [
        "Bar chart",
        "Map point",
        "Menu",
        "List",
        "Close",
        "Trend down",
        "Circle slash",
        "Trend down",
        "Bar chart",
        "Map point",
        "Menu",
        "List",
        "Close",
        "Trend down",
        "Circle slash",
        "Trend down",
        "Bar chart",
        "Map point",
        "Menu",
        "List",
        "Close",
        "Trend down",
        "Circle slash",
        "Trend down",
      ],

      tools: [
        {
          name: "figma",
          link: "/"
        },
        {
          name: "xd",
          link: "/"
        },
        {
          name: "sketch",
          link: "/"
        },
        {
          name: "illustrator",
          link: "/"
        },
        {
          name: "svg",
          link: "/"
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
  .Hero {
    @apply md:h-[100svh] bg-[#F7F7F7] pt-10 md:pt-14 lg:pt-16 xl:pt-20 pb-10 md:pb-14 lg:pb-20 xl:pb-[100px];

    .Container {
      @apply space-y-8;
      .TopLeft {
        @apply space-y-8 md:space-y-10 lg:space-y-11 xl:space-y-[50px];

        .Texts {
          @apply space-y-3 xl:space-y-5
        }

        .Buttons {
          @apply space-x-5 font-inter;

          .ContactMe, .DownloadIcon {
            @apply font-semibold text-sm xl:text-[15px] 2xl:text-base !leading-[120%] rounded-lg xl:rounded-xl block w-fit text-primary;
          }

          .DownloadIcon {
            @apply bg-secondary px-4 py-3.5 xl:px-5 xl:py-4
          }

          .ContactMe {
            @apply bg-[#EAEAEA] border-[1.5px] border-[#E5E5E5] py-3.5 xl:py-4 px-5 xl:px-6 
          }
        }

        .Tools {
          @apply space-x-5 xl:space-x-[46px];

          a {
            @apply block;

            img {
              @apply w-11 xl:w-[55px]
            }
          }
        }
      }
    }
  }
  
  .Styles {
    @apply bg-primary py-14 lg:py-20 xl:py-[100px];

    .Container {
      @apply space-y-8 md:space-y-10 lg:space-y-11 xl:space-y-[50px];

      .Top {
        @apply space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-20;

        h2 {
          @apply text-white
        }

        .StyleTypes {
          @apply grid grid-cols-1 md:grid-cols-2 gap-4;

          .Type {
            @apply border border-white border-opacity-20 rounded-2xl xl:rounded-[25px] w-full py-10 lg:py-12 xl:py-14 pl-5 lg:pl-7 xl:pl-[30px] pr-5 xl:pr-0 space-y-5 lg:space-y-7 xl:space-y-[30px];

            img {
              @apply w-16 lg:w-20 xl:w-[100px] 2xl:w-[120px]
            }

            .Texts {
              @apply space-y-3 xl:space-y-5;

              span {
                @apply block font-interTight font-semibold text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl capitalize;
              }

              p {
                @apply text-white text-opacity-50
              }
            }
          }
        }
      }

      .Marquees {
        @apply overflow-hidden space-y-5 lg:space-y-7 xl:space-y-10;

        > div {
          @apply space-x-5 lg:space-x-7 xl:space-x-10;

          .MarqueeItem {
            @apply shrink-0 space-x-2 xl:space-x-2.5 rounded-full border border-white border-opacity-20 bg-white bg-opacity-[0.01] p-2 xl:pl-2.5 xl:py-[9px] pr-4 xl:pr-5;

            .Icon {
              img {
                @apply w-7 lg:w-8 xl:w-[38px]
              }
            }

            span {
              @apply font-inter text-sm lg:text-base xl:text-xl text-white text-opacity-[0.65]
            }
          }
        }
      }
    }
  }
  
  .About {
    @apply my-16 md:my-20 lg:my-24 xl:my-[120px];
    
    .Container {
      @apply space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-[70px] 2xl:space-y-20;

      h3 {
        @apply text-center
      }

      .Content {
        @apply space-y-10 md:space-y-0 md:space-x-5 2xl:space-x-20;

        .TopLeft {
          @apply md:w-[46%] xl:w-[50%] shrink-0 space-y-5 lg:space-y-7 xl:space-y-10;

          p {
            @apply xl:-tracking-[0.01em] 2xl:tracking-normal
          }

          .ContactMe {
            @apply bg-[#EAEAEA] border-[1.5px] border-[#E5E5E5] rounded-lg xl:rounded-xl py-3 xl:py-4 px-5 xl:px-6 font-semibold text-primary text-sm xl:text-[15px] 2xl:text-base leading-[120%] block w-fit
          }
        }

        .BottomRight {
          .Image {
            @apply -mr-5 xl:-mr-[100px]
          }
        }
      }
    }
  }
  
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