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
		</div>
	</footer>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
footer {
	@apply bg-primary;

	.Container {
		@apply pt-16 md:pt-20 lg:pt-24 xl:pt-[120px];

		.Top {
			@apply space-y-7 lg:space-y-10 xl:space-y-[50px] text-center;

			.Texts {
				@apply space-y-4 lg:space-y-6 xl:space-y-[30px];

				h5 {
					@apply text-white font-semibold text-5xl xl:text-[78px]
				}
			}
		}
	}
}
</style>