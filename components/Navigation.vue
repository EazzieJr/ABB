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
	@apply bg-primary py-5;
	
	.NavContainer {
		.Buttons {
			@apply space-x-6;

			.ContactMe, .DownloadIcon {
				@apply hidden md:block;
			}

			.ContactMe {
				@apply text-white
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