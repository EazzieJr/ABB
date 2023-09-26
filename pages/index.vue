<template>
  <div class="IndexPage" data-cursor-sprite="">
    <section class="Hero">
      <div class="Container constraint md:between">
        <div class="TopLeft block">
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
              Download Icons
            </button>
            
            <button class="ContactMe" @click="toggleModal">
              Contact Me
            </button>
          </div>

          <div class="Tools between md:start">
            <div v-for="tool in tools" :key="tool.name">
              <img :src="`/svg/${tool.name}.svg`" alt="">
            </div>
          </div>
        </div>

        <div class="BottomRight">
          <div class="Image">
            <img src="/images/hero-image.webp" alt="">
          </div>
        </div>
      </div>
    </section>
    
    <section class="Styles">
      <div class="Container">
        <div class="Top constraint">
          <div class="TextAnim">
            <h2>
              Two Dynamic Styles
              Where Linear Meets Bold
            </h2>

            <span>
              Two Dynamic Styles
              Where Linear Meets Bold
            </span>
          </div>

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
                <img class="Bold" :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}-bold.svg`" alt="">
                <img class="Linear" :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}.svg`" alt="">
              </div>

              <span>
                {{ marquee }}
              </span>
            </div>
          </div>

          <div class="MarqueeTwo start">
            <div v-for="(marquee, index) in marqueeTwo" :key="index" class="MarqueeItem start">
              <div class="Icon">
                <img class="Bold" :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}-bold.svg`" alt="">
                <img class="Linear" :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}.svg`" alt="">
              </div>

              <span>
                {{ marquee }}
              </span>
            </div>
          </div>

          <div class="MarqueeThree start">
            <div v-for="(marquee, index) in marqueeThree" :key="index" class="MarqueeItem start">
              <div class="Icon">
                <img class="Bold" :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}-bold.svg`" alt="">
                  <img class="Linear" :src="`/svg/marquee/${marquee.toLowerCase().split(' ').join('-')}.svg`" alt="">
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
        <div class="TextAnim">
          <h3>
            About Our Creator
          </h3>

          <span>
            About Our Creator
          </span>
        </div>

        <div class="Content md:between">
          <div class="TopLeft">
            <p>
              I'm Carol, based in Toronto, Canada. I've polished my skills in Adobe Creative Suite, with a strong focus on Illustrator and Photoshop.
            </p>

            <p>
              What makes me stand out is my talent for turning ideas into designs that are seriously captivating. Whether I'm whipping up snazzy brand identities, nailing those pixel-perfect icons, or bringing illustrations to life, I'm all about adding that extra dash of pizzazz.
            </p>

            <p>
              If you've got a project in mind, don't hesitate to reach out to me!
            </p>

            <button @click="toggleModal" href="" class="ContactMe">
              Contact Me
            </button>
          </div>

          <div class="BottomRight">
            <div class="Image">
              <img src="/images/carol.webp" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Illustrations">
      <div class="Container constraint">
        <div class="TextAnim">
          <h4>
            Illustrations
          </h4>

          <span>
            Illustrations
          </span>
        </div>
        
        <div class="SwiperContainer">
          <div class="SwiperProducts">
            <div v-for="(el, index) in carousel" :key="index" class="Carousel-cell">
              <img :src="`/images/illustrations/${el.src}.webp`" alt="">
            </div>
          </div>
        </div>

        <div class="Controllers between">
          <div class="Dots start">
             <button
              v-for="(el, index) in carousel"
              :key="index"
              :class="{ 'active': flkty &&  index === flkty.selectedIndex }"
              class="Dot"
              @click="goToSlide(index)"
            ></button>
          </div>

          <div class="Arrows start">
            <button class="Left center" :class="{'active': flkty && flkty.selectedIndex >= 1}" @click=previousSlide>
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7.58301H1" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 1.58301L1 7.58301L7 13.583" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <button class="Right center" :class="{ 'active': flkty && flkty.selectedIndex <= 4 }" @click="nextSlide">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.58301H13" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 1.58301L13 7.58301L7 13.583" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <section class="Branding">
      <div class="Container constraint">
        <div class="TextAnim">
          <h4>
            Branding
          </h4>

          <span>
            Branding
          </span>
        </div>

        <div class="Products">
          <a v-for="(product, index) in products" :key="index" href="/" class="Product">
            <img :src="`/images/products/product-${index+1}.webp`" alt="" class="ActualImage">
          </a>
        </div>
<!-- 
        <a href="" class="ViewMore">
          View More
        </a> -->
      </div>
    </section>

    <transition name="fade">
      <div v-if="modalOpened" class="Modal center" @click.self="toggleModal">
        <div class="Popup" @click.self="closeSelection">
          <div class="Top between">
            <span>
              Contact me
            </span>
  
            <button class="Close" @click="toggleModal">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="25" height="25" rx="12.5" fill="#212121"/>
                <rect width="15" height="15" transform="translate(5 5)" fill="#212121"/>
                <path d="M16.25 8.75L8.75 16.25" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.75 8.75L16.25 16.25" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
  
          <div class="Mid">
            <form action="" @submit.prevent="sendMail" @click.self="closeSelection">
              <div class="Input">
                <label for="Name">Name</label>
  
                <input type="text" v-model="guest.name" placeholder="Enter name" name="Name">
              </div>
  
              <div class="Input">
                <label for="Email">Email</label>
  
                <input type="text" v-model="guest.email" placeholder="Enter email" name="Email">
              </div>
  
              <div class="Input">
                <label>Services</label>
  
                <div class="PickServices between" @click.self="toggleServicesSelection">
                  <span v-if="guest.services.length === 0" @click="toggleServicesSelection">
                    Select service
                  </span>
                  
                  <div v-else class="Services" @click="toggleServicesSelection">
                    <div v-for="(service, index) in guest.services" :key="service.name" class="Service">
                      <span>
                        {{ service.name }}
                      </span>
  
                      <div @click="removeIndex(index)">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 4.5L4 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M4 4.5L12 12.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
  
                  <svg @click="toggleServicesSelection" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.72456 6.64137C3.94645 6.41948 4.29367 6.39931 4.53835 6.58086L4.60845 6.64137L9.99984 12.0325L15.3912 6.64137C15.6131 6.41948 15.9603 6.39931 16.205 6.58086L16.2751 6.64137C16.497 6.86326 16.5172 7.21048 16.3356 7.45516L16.2751 7.52525L10.4418 13.3586C10.2199 13.5805 9.87267 13.6006 9.628 13.4191L9.5579 13.3586L3.72456 7.52525C3.48048 7.28118 3.48048 6.88545 3.72456 6.64137Z" fill="#656565"/>
                  </svg>
  
                  <transition name="fade">
                    <div v-if="toggleServices" class="Selection">
                      <div v-for="(option, index) in options" :key="index" class="Option start" :class="{'Selected' : option.selected}">
                        <div class="Checked" @click="option.selected = !option.selected">
                          <svg v-if="!option.selected" class="false" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="17" height="17" rx="3.5" stroke="#8F92A1"/>
                          </svg>
  
                          <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="18" height="18" rx="4" fill="#212121"/>
                            <path d="M7.72136 12.375C7.54127 12.375 7.37019 12.2997 7.24412 12.1678L4.69585 9.50266C4.43472 9.22955 4.43472 8.77751 4.69585 8.5044C4.95698 8.2313 5.38919 8.2313 5.65033 8.5044L7.72136 10.6704L12.3497 5.82983C12.6108 5.55672 13.043 5.55672 13.3042 5.82983C13.5653 6.10294 13.5653 6.55498 13.3042 6.82809L8.1986 12.1678C8.07254 12.2997 7.90145 12.375 7.72136 12.375Z" fill="white"/>
                          </svg>
                        </div>
  
                        <span>
                          {{ option.name }}
                        </span>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
  
              <div class="Input">
                <label for="Message">Message</label>
  
                <textarea v-model="guest.message" placeholder="Write here..." name="Message"></textarea>
              </div>
            </form>
          </div>
  
          <div class="Bottom">
            <button class="Send" @click="sendMail">
              Send
            </button>
          </div>
        </div>
      </div>
    </transition>

    <div class="mf-cursor z-[1000] -left-5 -top-5 translate-x-1/2 translate-y-1/2">
      <div class="mf-cursor-inner">
        <div class="mf-cursor-media">
          <div class="mf-cursor-media-box"></div>
        </div>
        <div class="mf-cursor-text"></div>
      </div>
    </div>
  </div>
</template>

<script>
let Flickity;
if (process.client) {
  Flickity = require('flickity');
}
import MouseFollower from "mouse-follower";
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { mapState, mapMutations } from 'vuex'

MouseFollower.registerGSAP(gsap);
gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default {
  name: 'IndexPage',

  data() {
    return {
      flkty: null,
      
      products: [
        {
          name: "Black Tote Bag",
        },
        {
          name: "Yellow Tote Bag",
        },
        {
          name: "Cups",
        },
        {
          name: "Checkered Bag",
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
      ],

      list: [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
        { backgroundColor: '#eee', width: '100%', height: '100%' },
        { backgroundColor: '#f44336', width: '100%', height: '100%' },
      ],

      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true

        // any options from Flickity can be used
      },

      carousel: [
        {
          src: "burger",
          link: "/"
        },
        {
          src: "sandwich",
          link: "/"
        },
        {
          src: "popcorn",
          link: "/"
        },
        {
          src: "cupcake",
          link: "/"
        },
        {
          src: "hotdog",
          link: "/"
        },
        {
          src: "fries",
          link: "/"
        },
      ],

      guest: {
        name: null,
        email: null,
        services: [],
        message: null
      },

      options: [
        {
          name: "Branding",
          selected: false
        },
        {
          name: "Icons",
          selected: false
        },
        {
          name: "Illustrations",
          selected: false
        }
      ],

      toggleServices: false,
    }
  },

  computed: {
    ...mapState(["modalOpened"])
  },

  methods: {
    ...mapMutations(["toggleModal"]),
    
    initCursor() {
      const cursor = new MouseFollower({
        // el: ".mf-cursor",
        skewing: 3,
        stateDetection: {
          '-pointer': 'a,button',
          '-exclusion': 'h1, h2, h3, h4, h5, h6, .TextAnim span',
          // '-hidden': '.my-input'
        }
      });
    },
    
    initFlkty() {
      const elem = document.querySelector('.SwiperProducts');
      this.flkty = new Flickity(elem, {
        // options
        cellAlign: 'left',
        // autoPlay: 5000,
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: true,
        pauseAutoPlayOnHover: true,
        selectedAttraction: 0.01,
        friction: 0.15,
        hash: false,
        accessibility: true
      });

      let isScrollingHorizontally = false; // Initialize to false

      elem.addEventListener('wheel', (event) => {
        // Prevent the default behavior of the wheel event, which is scrolling the page
        event.preventDefault();

          // Calculate the absolute values of deltaX and deltaY
        const deltaX = Math.abs(event.deltaX);
        const deltaY = Math.abs(event.deltaY);

        // Set a threshold value (adjust as needed)
        const threshold = 50;

        // Check if the movement is primarily horizontal
        if (deltaX > deltaY && deltaX > threshold) {
          isScrollingHorizontally = true;
        } else {
          isScrollingHorizontally = false;
        }

        // Determine the scroll direction and perform actions based on whether it's horizontal or vertical
        if (isScrollingHorizontally) {
          // Horizontal scroll: Handle it as needed
          // For example, navigate between slides horizontally
          if (event.deltaX < 0) {
            // Scroll to the next slide
            this.flkty.next();
          } else {
            // Scroll to the previous slide
            this.flkty.previous();
          }
        }
      });
    },

    animateHero() {
      const h1 = document.querySelector(".Hero h1")
      const body = document.querySelector(".Hero p")
			const splittedH1 = this.$splitting({ target: h1, by: "lines" });
			const splittedBody = this.$splitting({ target: body, by: "lines" });

      const tl = gsap.timeline({
        defaults: {
          y: 0,
          ease: "power4.out",
          duration: 1,
          stagger: 0.05,
        }
      })
      
      splittedH1[0].lines.forEach(line => {
        // console.log(line)
        const span = document.createElement("span")
        const outerSpan = document.createElement("span")
        const whitespaces = document.querySelectorAll("h1 > .whitespace")
        whitespaces.forEach(el => {
          el.remove()
        })

        line.forEach(word => {
          const whitespace = document.createElement("span")
          whitespace.innerHTML = " "

          span.appendChild(word)
          span.appendChild(whitespace)
          // console.log(span, word.innerHTML)
        })


        span.className = "Line"
        outerSpan.appendChild(span)
        h1.appendChild(outerSpan)

        gsap.set(outerSpan, { overflow: "hidden", display: "block" })
        gsap.set("h1 .word", { y: "100%", display: "inline-block" })
      })

      splittedBody[0].lines.forEach(line => {
        // console.log(line)
        const span = document.createElement("span")
        const outerSpan = document.createElement("span")
        const whitespaces = document.querySelectorAll("h1 > .whitespace")
        whitespaces.forEach(el => {
          el.remove()
        })

        line.forEach(word => {
          const whitespace = document.createElement("span")
          whitespace.innerHTML = " "

          span.appendChild(word)
          span.appendChild(whitespace)
          // console.log(span, word.innerHTML)
        })


        span.className = "Line"
        outerSpan.appendChild(span)
        body.appendChild(outerSpan)

        gsap.set(outerSpan, { overflow: "hidden", display: "block" })
        gsap.set(".Hero p .Line", { y: "100%", display: "block" })
      })


      tl.to(splittedH1[0].lines, {
        delay: 1,
        onStart: () => {
          gsap.set("h1", {opacity: 1})
        }
      })

      tl.to(".Hero p .Line", {
        onStart: () => {
          gsap.set(".Hero p ", {opacity: 1})
        }
      }, '-=1')
      
      tl.to(".Buttons button", {
        opacity: 1
      }, '-=1')

      tl.to(".Tools div", {
        opacity: 1
      }, '-=1')

      tl.to(".Hero .BottomRight img", {
        opacity: 1
      }, 0.5)
    },
    
    initStylesInteractions() {
      const styles = document.querySelectorAll('.Type')
      
      this.animateMarquees()
      this.textAnim('.Styles', '.Styles .TextAnim span', 2)

      styles.forEach(el => {
        gsap.set(el, { yPercent: 50 })
      })

      gsap.to(styles, {
        scrollTrigger: {
          trigger: '.StyleTypes',
          start: "top bottom",
          end: "bottom bottom",
          scrub: true
        },

        yPercent: 0,
        stagger: 0.2
      })
    },

    initAboutAnimation() {
      
      const bodies = document.querySelectorAll(".About p")

			const bodyOne = bodies[0]
			const bodyTwo = bodies[1]
      const bodyThree = bodies[2]
      
			const splittedTextOne = this.$splitting({ target: bodyOne, by: "lines" });
			const splittedTextTwo = this.$splitting({ target: bodyTwo, by: "lines" });
      const splittedTextThree = this.$splitting({ target: bodyThree, by: "lines" });

      this.textAnim('.About', '.About .TextAnim span')

      const animateLines = (el, trigger) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: trigger,
            start: "top 60%",
            toggleActions: "play none none reset"
          },

          y: 0,
          ease: "power4.out",
          duration: 1,
          stagger: 0.1
        })
      }

      splittedTextOne[0].lines.forEach(line => {
        // console.log(line)
        const span = document.createElement("span")
        const outerSpan = document.createElement("span")
        const whitespaces = document.querySelectorAll("p > .whitespace")
        whitespaces.forEach(el => {
          el.remove()
        })

        line.forEach(word => {
          const whitespace = document.createElement("span")
          whitespace.innerHTML = " "

          span.appendChild(word)
          span.appendChild(whitespace)
          // console.log(span, word.innerHTML)
        })


        span.className = "Line"
        outerSpan.appendChild(span)
        bodyOne.appendChild(outerSpan)

        gsap.set(outerSpan, { overflow: "hidden", display: "block" })
        gsap.set(".About p .Line", { y: "100%", display: "block" })
      })

      splittedTextTwo[0].lines.forEach(line => {
        // console.log(line)
        const span = document.createElement("span")
        const outerSpan = document.createElement("span")
        const whitespaces = document.querySelectorAll("p > .whitespace")
        whitespaces.forEach(el => {
          el.remove()
        })

        line.forEach(word => {
          const whitespace = document.createElement("span")
          whitespace.innerHTML = " "

          span.appendChild(word)
          span.appendChild(whitespace)
          // console.log(span, word.innerHTML)
        })


        span.className = "Line"
        outerSpan.appendChild(span)
        bodyTwo.appendChild(outerSpan)

        gsap.set(outerSpan, { overflow: "hidden", display: "block" })
        gsap.set(".About p .Line", { y: "100%", display: "block" })
      });

      splittedTextThree[0].lines.forEach(line => {
        // console.log(line)
        const span = document.createElement("span")
        const outerSpan = document.createElement("span")
        const whitespaces = document.querySelectorAll("p > .whitespace")
        whitespaces.forEach(el => {
          el.remove()
        })

        line.forEach(word => {
          const whitespace = document.createElement("span")
          whitespace.innerHTML = " "

          span.appendChild(word)
          span.appendChild(whitespace)
          // console.log(span, word.innerHTML)
        })


        span.className = "Line"
        outerSpan.appendChild(span)
        bodyThree.appendChild(outerSpan)

        gsap.set(outerSpan, { overflow: "hidden", display: "block" })
        gsap.set(".About p .Line", { y: "100%", display: "block" })
      })

      const innerBodies = document.querySelectorAll(".About p > span")
      const base = window.matchMedia("(max-width: 767px)")

       gsap.to(".About .TopLeft", {
        scrollTrigger: {
          trigger: ".About .TopLeft",
          start: base.matches ? "top 70%" : "top 50%",
          onEnter: () => {
            innerBodies.forEach((el, index) => {
              gsap.to(el.children, {
                y: 0,
                ease: "power4.out",
                duration: 1,
                delay: index * 0.05,
              })
            })
          }
         }, onComplete: () => {
           gsap.to(".About .ContactMe", {
            opacity: 1
          })
        }
      })

      // tl.to(splittedTextTwo[0].lines, {
      //   opacity: 1,
      //   y: 0,
      //   ease: "power4.in",
      //   duration: 0.75,
      //   stagger: 0.01
      // }, '<0.1')

      // tl.to(splittedTextThree[0].lines, {
      //   opacity: 1,
      //   y: 0,
      //   ease: "power4.in",
      //   duration: 0.75,
      //   stagger: 0.01
      // }, '<0.1')
    },

    initIllustrationInteractions() {
      this.textAnim('.Illustrations', '.Illustrations .TextAnim span')
    },

    animateBranding() {
      const products = document.querySelectorAll('.Branding .Product')
      this.textAnim('.Branding', '.Branding .TextAnim span')

      products.forEach((el, index) => {
        el.addEventListener('mouseover', () => {
          gsap.to(el.lastChild, {
            scale: 1.15,
            ease: "power3.inOut",
            duration: 0.75
          })
        })

        el.addEventListener('mouseleave', () => {
          gsap.to(el.lastChild, {
            scale: 1,
            ease: "power3.inOut",
            duration: 0.75
          })
        })
      })
    },

    textAnim(trigger, el, duration) {
      let bigText = document.querySelector(el)
      let word = bigText.innerText
      bigText.innerText = ""

      gsap.to(bigText, {
        scrollTrigger: {
          trigger: trigger,
          start: 'top 80%'
        },

        text: {
          delimiter: "",
          value: word
        },

        duration: duration ? duration : 1,
        ease: "power2.out"
      })
    },

    animateMarquees() {
      const base = window.matchMedia("(max-width: 1023px)")
      const lg = window.matchMedia("(min-width: 1024px) and (max-width: 1279px)")
      const marqueeOne = document.querySelector('.MarqueeOne')
      const marqueeTwo = document.querySelector('.MarqueeTwo')
      const marqueeThree = document.querySelector('.MarqueeThree')
      const marqueeItems = document.querySelectorAll('.MarqueeItem')

      const m1 = gsap.timeline()
      const m2 = gsap.timeline()
      const m3 = gsap.timeline()

      console.log(marqueeOne.clientWidth, marqueeOne.clientWidth/3)
      m1.to(marqueeOne, {
        x: -(marqueeOne.clientWidth/3 + (base.matches ? 10 : lg.matches ? 14 : 20)),
        duration: 25,
        repeat: -1,
        ease: "none"
      })

      m2.fromTo(marqueeTwo,{x : -(marqueeTwo.clientWidth / 3 + (base.matches ? 10 : lg.matches ? 14 : 20)) }, {
        x: 0,
        duration: 30,
        repeat: -1,
        ease: "none"
      })

      m3.to(marqueeThree, {
        x: -(marqueeThree.clientWidth/3 + (base.matches ? 10 : lg.matches ? 14 : 20)),
        duration: 20,
        repeat: -1,
        ease: "none"
      })

      marqueeOne.addEventListener('mouseover', () => {
        m1.pause()
      })

      marqueeOne.addEventListener('mouseleave', () => {
        m1.play()
      })

      marqueeTwo.addEventListener('mouseover', () => {
        m2.pause()
      })

      marqueeTwo.addEventListener('mouseleave', () => {
        m2.play()
      })

      marqueeThree.addEventListener('mouseover', () => {
        m3.pause()
      })

      marqueeThree.addEventListener('mouseleave', () => {
        m3.play()
      })

      marqueeItems.forEach((el, index) => {
        el.addEventListener("mouseover", () => {
          gsap.to(el, {
            backgroundColor: "#B1FC03",
            color: "#212121",
            fontWeight: 500,
          })
        })

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            backgroundColor: "rgba(255, 255, 255, 0.01)",
            color: "white",
            fontWeight: 400
          })
        })
      })
    },

    goToSlide(index) {
      // Programmatically move to a specific slide
      this.flkty.select(index);
    },

    previousSlide() {
      // Go to the previous slide
      if (this.flkty) {
        this.flkty.previous();
      }
    },

    nextSlide() {
      // Go to the next slide
      if (this.flkty) {
        this.flkty.next();
      }
    },

    sendMail() {
      console.log(this.guest)

      this.guest = {
        name: null,
        email: null,
        services: [],
        message: null
      }
    },

    removeIndex(index) {
      const removedService = document.querySelectorAll('.Service')[index]
      gsap.to(removedService, {
        opacity: 0,
        onComplete: () => {
          console.log(this.guest)
          const newServices = this.guest.services.filter((ser, i) => i !== index)
          // Update the selected services on the options list
          this.options.forEach(el => {
            if (el.name === removedService.firstChild.innerText) {
              el.selected = false
            }
          })
          this.guest.services = newServices
          gsap.set(removedService, { opacity: 1 })
        }
      })
    },

    toggleServicesSelection() {
      if (this.toggleServices) {
        const newSelections = this.options.filter(el => el.selected)
        this.toggleServices = false
        this.guest.services = newSelections
        console.log(this.guest.services)
        
      } else {
        this.toggleServices = true
      }
    },

    openServices() {
      console.log("Services Opened")
    },

    closeSelection() {
      if (this.toggleServices) {
        console.log("Services Closed")
        this.toggleServices = false
      } else {
        return
      }
    }
  }, 

  mounted() {
    this.animateHero()
    this.initAboutAnimation()
    this.initCursor()
    this.initStylesInteractions()
    this.initIllustrationInteractions()
    this.animateBranding()
    this.initFlkty()
  }
}
</script>

<style lang="postcss" scoped>
.IndexPage {
  .Hero {
    @apply lg:h-[calc(100svh_-_90px)] bg-[#F7F7F7] pt-10 xl:pt-20 pb-0 md:pb-14 lg:pb-20 xl:pb-[100px] overflow-hidden;

    .Container {
      .TopLeft {
        @apply space-y-[30px] md:space-y-10 lg:space-y-11 xl:space-y-[50px] md:w-[54vw] lg:w-[48.4vw] shrink-0 mb-14 md:mb-0;

        .Texts {
          @apply space-y-4 xl:space-y-5 text-left;

          h1 {
            @apply opacity-0;
            
            span {
              @apply block
            }
          }

          p {
            @apply opacity-0
          }
        }

        .Buttons {
          @apply space-x-5 font-inter;

          .ContactMe, .DownloadIcon {
            @apply font-semibold text-xs xl:text-[15px] 2xl:text-base !leading-[120%] rounded-lg xl:rounded-xl block w-fit text-primary opacity-0;
          }

          .DownloadIcon {
            @apply bg-secondary px-4 py-2.5 xl:px-5 xl:py-4
          }

          .ContactMe {
            @apply bg-[#EAEAEA] border-[1.5px] border-[#E5E5E5] py-2.5 xl:py-4 px-4 xl:px-6 
          }
        }

        .Tools {
          @apply space-x-5 xl:space-x-[46px];

          > div {
            @apply block opacity-0;

            img {
              @apply w-11 md:w-[3.81vw]
            }
          }
        }
      }

      .BottomRight {
        @apply grow shrink-0 -mb-[68px];

        .Image {
          @apply relative md:-right-[6.24vw] xl:-right-[3vw] 2xl:-right-[6.24vw] md:w-full;

          img {
            @apply w-[340px] h-[346px] md:h-auto md:w-[40vw] xl:w-[44vw] 2xl:w-[40vw] mx-auto lg:mx-0 opacity-0
          }
        }
      }
    }
  }
  
  .Styles {
    @apply bg-primary py-14 lg:py-[6.94vw] overflow-hidden;

    .Container {
      @apply space-y-8 md:space-y-10 lg:space-y-11 xl:space-y-[50px];

      .Top {
        @apply space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-20;

        .TextAnim {
          @apply lg:w-[70%] md:w-[75%] xl:w-[75%] 2xl:w-[70%];
          
          h2 {
            @apply text-white
          }

          span {
            @apply text-white
          }
        }

        .StyleTypes {
          @apply grid grid-cols-1 md:grid-cols-2 gap-4;

          .Type {
            @apply border border-white border-opacity-20 rounded-2xl xl:rounded-[25px] w-full py-10 lg:py-12 xl:py-14 pl-5 lg:pl-7 xl:pl-[30px] pr-5 xl:pr-0 space-y-5 lg:space-y-7 xl:space-y-[30px];

            img {
              @apply w-14 lg:w-20 xl:w-[100px] 2xl:w-[120px]
            }

            .Texts {
              @apply space-y-3 xl:space-y-5;

              span {
                @apply block font-interTight font-semibold text-white text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl capitalize;
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
          @apply space-x-5 lg:space-x-7 xl:space-x-10 w-max;

          .MarqueeItem {
            @apply shrink-0 space-x-2 xl:space-x-2.5 rounded-full border border-white border-opacity-20 bg-white text-white bg-opacity-[0.01] p-2 xl:pl-2.5 xl:py-[9px] pr-4 xl:pr-5;

            .Icon {
              img {
                @apply w-7 lg:w-8 xl:w-[38px]
              }

              .Bold {
                @apply hidden
              }
            }

            span {
              @apply font-inter text-sm lg:text-base xl:text-xl text-opacity-[0.65]
            }

            &:hover {
              .Icon {
                .Bold {
                  @apply block;
                }

                .Linear {
                  @apply hidden
                }
              }
            }
          }
        }
      }
    }
  }
  
  .About {
    @apply my-16 md:my-20 lg:my-24 xl:my-[8.33vw] overflow-hidden;
    
    .Container {
      @apply space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-[70px] 2xl:space-y-20 md:!pr-0;

      .TextAnim {
        @apply  w-fit mx-auto;

        h3 {
          @apply text-center
        }
      }

      .Content {
        @apply space-y-9 md:space-y-0 md:space-x-5 xl:space-x-[5.55vw];

        .TopLeft {
          @apply md:w-[46%] xl:w-[42vw] shrink-0 space-y-5 lg:space-y-7 xl:space-y-10;

          p {
            @apply xl:-tracking-[0.01em] 2xl:tracking-normal;

            span {
              @apply block
            }
          }

          .ContactMe {
            @apply bg-[#EAEAEA] border-[1.5px] border-[#E5E5E5] rounded-lg xl:rounded-xl py-2.5 xl:py-4 px-4 xl:px-6 font-semibold text-primary text-xs xl:text-[15px] 2xl:text-base leading-[120%] block w-fit opacity-0
          }
        }

        .BottomRight {
          .Image {
            @apply xl:w-[45.48vw] rounded-[16px] md:rounded-none overflow-hidden
          }
        }
      }
    }
  }

  .Illustrations {
    @apply overflow-hidden;

    .Container {
      @apply space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-[70px] 2xl:space-y-20;

      .SwiperContainer {
        @apply -mx-5 xl:-mx-[4.86vw] pl-5 xl:pl-[4.86vw];
        .SwiperProducts {
          /* @apply space-x-5 lg:space-x-7 xl:space-x-[30px]; */

          .Carousel-cell {
            @apply shrink-0 mr-5 lg:mr-7 xl:mr-[30px] w-[276px] h-[322px] lg:w-[440px] lg:h-auto xl:w-[36.11vw] xl:h-[42.08vw];

            img {
              @apply w-full duration-500;
              filter: saturate(0);

              &:hover {
                filter: saturate(1);
              }
            }

            /* &:nth-child(1) {
              @apply ml-5 xl:ml-[4.86vw]
            } */
          }
        }
      }

      .Controllers {
        .Dots {
          @apply space-x-3 md:space-x-5;

          .Dot {
            @apply w-2 h-2 xl:w-[15px] xl:h-[15px] rounded-full bg-[#DDDCDB];

            &.active {
              @apply bg-primary
            }
          }
        }

        .Arrows {
          @apply space-x-3.5 xl:space-x-[15px];

          button {
            @apply w-9 h-9 xl:w-[50px] xl:h-[50px] bg-[#DDDCDB] rounded-full;

            &.active {
              @apply bg-primary;

              svg path {
                @apply stroke-white
              }
            }

            svg {
              @apply w-2 xl:w-3 duration-500;
            }

            &:hover {
              svg {
                @apply scale-150
              }
            }
          }
        }
      }
    }
  }
  
  .Branding {
    @apply mt-16 md:mt-20 lg:mt-24 xl:my-[8.33vw] mb-14 lg:mb-20 xl:mb-[100px] overflow-hidden; 

    .Container {
      @apply space-y-10 md:space-y-14 lg:space-y-16 xl:space-y-[70px] 2xl:space-y-20;

      .Products {
        @apply grid grid-cols-1 md:grid-cols-2 gap-5;

        .Product {
          @apply rounded-[16px] lg:rounded-[1.23vw] w-full max-w-[335px] md:max-w-none h-[355px] md:h-[376px] lg:h-[512px] xl:h-[47.22vw] overflow-hidden relative place-self-center md:place-self-auto;

          .ActualImage {
            @apply z-50 relative w-full h-full
          }
        }
      }

      .ViewMore {
        @apply w-fit mx-auto text-primary bg-secondary rounded-lg xl:rounded-xl px-5 xl:px-[30px] py-3.5 xl:py-4 block font-semibold text-sm xl:text-[15px] !leading-[120%]
      }
    }
  }

  .Modal {
    @apply bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full z-[1000];
    backdrop-filter: blur(4px);

    .Popup {
      @apply bg-white space-y-6 xl:space-y-[30px] rounded-2xl xl:rounded-[20px] overflow-hidden w-full mx-5 max-w-[360px] lg:max-w-[420px] xl:max-w-[480px];

      .Top {
        @apply bg-[#F8F8F8] border-b-[1.5px] border-[#E5E5E5] py-3.5 xl:py-5 px-5 xl:px-[30px];

        span {
          @apply block tracking-[0.016em] font-interTight font-semibold text-sm xl:text-base text-[#292D32];
          font-feature-settings: 'clig' off, 'liga' off;
        }

        button {
          svg {
            @apply w-5 xl:w-auto
          }
        }
      }

      .Mid {
        @apply px-5 xl:px-[30px];

        form {
          @apply space-y-4 xl:space-y-[22px];

          .Input {
            @apply space-y-2 xl:space-y-2.5 w-full;

            label {
              @apply block text-xs xl:text-sm font-medium !leading-[128.571%] text-primary
            }

            input, textarea {
              @apply border border-[#E0E0E0] rounded-lg xl:rounded-xl placeholder:text-[#8F92A1] tracking-[-0.015em] w-full text-primary text-sm xl:text-base focus:border-primary !leading-[100%];
            }

            input {
              @apply py-3.5 xl:py-[18px] px-3 xl:px-[15px]
            }

            textarea {
              @apply bg-[#F8F8F8] px-3 xl:px-[15px] py-2.5 xl:py-3 h-[120px] xl:h-[150px] resize-none;         
            }

            .PickServices {
              @apply border border-[#E0E0E0] rounded-lg xl:rounded-xl pb-2 xl:pb-2.5 px-3 xl:px-[15px] relative;

              > span {
                @apply text-[#8F92A1] tracking-[-0.015em] mt-2 xl:mt-2.5 text-sm xl:text-base
              }

              .Services {
                @apply space-x-2 xl:space-x-2.5 text-xs xl:text-sm;

                .Service {
                  @apply p-1.5 xl:p-2 bg-[#F8F8F8] space-x-2 xl:space-x-2.5 rounded-md xl:rounded-lg inline-flex mt-2 xl:mt-2.5;

                  button {
                    svg {
                      @apply w-3 xl:w-4
                    }
                  }
                }
              }

              > svg {
                @apply mt-2 xl:mt-2.5
              }

              .Selection {
                @apply absolute top-16 left-0 right-0 rounded-lg xl:rounded-xl overflow-hidden divide-y divide-[#E0E0E0] bg-white border border-primary;
                box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

                .Option {
                  @apply px-3 xl:px-[15px] py-4 xl:py-5 space-x-3 xl:space-x-[15px];

                  span {
                    @apply block text-xs xl:text-sm font-medium !leading-[128.571%] text-primary
                  }

                  &.Selected {
                    @apply bg-[#F8F8F8]
                  }
                }
              }
            }
          }
        }
      }

      .Bottom {
        @apply border-t-[1.5px] border-[#F2F2F2] py-3 xl:py-[15px] px-5 xl:px-[30px];

        .Send {
          @apply w-full bg-primary py-3 xl:py-4 rounded-lg xl:rounded-[10px] text-sm xl:text-base font-semibold text-white;
        }
      }
    }
  }
}

.TextAnim {
  @apply relative;

  h2, h3, h4 {
    @apply opacity-0;
  }

  > span {
    @apply absolute top-0 left-0
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>