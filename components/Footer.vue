<template>
	<footer>
		<div class="Container constraint">
			<div class="Top col-center">
				<div class="Texts">
					<h5>
						Let's Work!
					</h5>

					<p>
						If you've got a project in mind, don't hesitate to reach out to me!
					</p>
				</div>

				<button class="ContactMe">
					Contact Me
				</button>
			</div>

			<div class="Bottom md:between">
				<span class="Copyright">
					© {{new Date().getFullYear()}} ABB Inc. All Rights Reserved
				</span>

				<div class="Links center md:start">
					<a v-for="link in links" :key="link.name" :href="link.link" class="Link">
						<img :src="`/svg/${link.name}.svg`" :alt="`An incon representing ${link.name}`">
					</a>
				</div>
			</div>
		</div>

		<img src="/svg/footer-bg.svg" alt="" class="BG">
	</footer>
</template>

<script>
import {gsap} from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {
	data() {
		return {
			links: [
				{
					name: "dribbble",
					link: ""
				},
				{
					name: "instagram",
					link: ""
				},
				{
					name: "linkedin",
					link: ""
				},
				{
					name: "twitter",
					link: ""
				},
			]
		}
	},

	methods: {
		initFooterAnimation() {
			const tl = gsap.timeline({
				default: { ease: 'none' },
				scrollTrigger: {
					trigger: 'footer',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: true
				}
			})

			tl.fromTo('footer .Container', { yPercent: -50 }, {
				yPercent: 0
			})

			tl.fromTo('.BG', { z: 150 }, {
				z: 0
			}, 0)
		}
	},

	mounted() {
		this.initFooterAnimation()
	}
}
</script>

<style lang="postcss" scoped>
footer {
	@apply bg-primary relative overflow-hidden;
	perspective: 1000px;

	.Container {
		@apply pt-16 md:pt-20 lg:pt-24 xl:pt-[120px] pb-9 space-y-40 lg:space-y-48 xl:space-y-[198px] relative z-50;

		.Top {
			@apply space-y-7 lg:space-y-10 xl:space-y-[50px] text-center;

			.Texts {
				@apply space-y-4 lg:space-y-6 xl:space-y-[30px];

				h5 {
					@apply text-white 
				}

				p {
					@apply text-white
				}
			}

			button {
				@apply px-9 lg:px-10 xl:px-[50px] py-3.5 lg:py-4 xl:py-5 rounded-[10px] bg-secondary font-semibold text-primary
			}
		}
		
		.Bottom {
			@apply space-y-5 md:space-y-0;

			.Copyright {
				@apply text-center text-sm !leading-[157%] text-[#C7C3C3] font-medium block md:text-left
			}

			.Links {
				@apply space-x-3.5 xl:space-x-4;

				.Link {
					@apply rounded-[15px] px-4 py-3.5 border border-white border-opacity-40;

					img {
						@apply w-5 xl:w-6
					}
				}
			}
		}
	}

	.BG {
		@apply absolute object-cover object-left md:object-center w-full h-full top-0 left-0
	}
}
</style>