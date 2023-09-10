<template>
  <section class="bg-black h-screen w-4/5">
  </section>
</template>

<script>
import Lenis from '@studio-freight/lenis'

export default {
  name: 'IndexPage',

  methods: {
    initLenis() {
      const lenis = new Lenis({duration: 2})

      lenis.on('scroll', (e) => {
        // console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  }, 

  mounted() {
    this.initLenis()
  }
}
</script>
