<template>
	<nav>
		<div class="NavContainer constraint between">
			<nuxt-link to="/">
				<img src="/svg/logo.svg" alt="">
			</nuxt-link>

			<div class="Buttons start">
				<button class="ContactMe">
					Contact Me
				</button>

				<button class="DownloadIcon">
					Download Icon
				</button>
				
				<button class="MenuBurger">
					<div class="top"></div>
					<div class="bottom"></div>
				</button>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	
}
</script>

<style lang="postcss" scoped>
nav {
	@apply bg-primary py-[21px];
	
	.NavContainer {
		.Buttons {
			@apply space-x-6;

			.ContactMe, .DownloadIcon {
				@apply hidden md:block font-semibold text-sm xl:text-base leading-4 xl:leading-[18px];
			}

			.ContactMe {
				@apply text-white
			}

			.DownloadIcon {
				@apply text-primary bg-secondary px-4 py-3 xl:px-5 xl:py-[15px] rounded-[10px]
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