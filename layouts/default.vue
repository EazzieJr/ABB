<template>
	<div>
		<Navigation />
		
		<nuxt />
	</div>
</template>

<script>
import Lenis from '@studio-freight/lenis'

export default {
	data() {
		return {
			lenis: null
		}
	},

	methods: {
		initLenis() {
			this.lenis = new Lenis({ duration: 2 })

			this.lenis.on('scroll', (e) => {
				// console.log(e)
			})

			const raf = (time) => {
				this.lenis.raf(time)
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

<style lang="postcss"></style>