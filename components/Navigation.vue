<template>
	<nav>
		<div class="NavContainer constraint between">
			<nuxt-link to="/">
				<img src="/svg/logo.svg" alt="">
			</nuxt-link>

			<div class="Buttons start">
				<button class="ContactMe" @click="toggleModal">
					Contact Me
				</button>

				<a href="https://drive.google.com/uc?export=download&id=1wB_cSFhbh7SRnMQZgZZY-Itac19uYlEB" target="_blank" class="DownloadIcon">
					Download Icons
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	methods: {
		...mapMutations(["toggleModal"])
	}
}
</script>

<style lang="postcss" scoped>
nav {
	@apply bg-primary py-[21px] sticky top-0 z-[1000];
	
	.NavContainer {
		.Buttons {
			@apply space-x-6;

			.ContactMe, .DownloadIcon {
				@apply font-semibold text-sm xl:text-base leading-4 xl:leading-[18px];
			}

			.ContactMe {
				@apply text-white hidden md:block
			}

			.DownloadIcon {
				@apply text-primary bg-secondary px-4 py-3 xl:px-5 xl:py-[15px] rounded-[10px] !font-interTight md:font-inter
			}
			
			.MenuBurger {
				@apply space-y-2 md:hidden;

				div {
					@apply h-0.5 w-8 bg-white;
				}
			}
		}
	}
}
</style>