<template>
	<nav :class="{ close: reactive_store.sidebarState }">
		<RouterLink class="logo" to="/">
			<div class="logo-image">
				<img src="../assets/QawerzIGTG.jpg" alt="Qawerz" />
			</div>
			<div class="logo-text">
				<span class="logo-name">
					qawerz.<span style="color: var(--primary-color)">ru</span>
				</span>
				<span class="logo-desc">Галерея от Qawerz</span>
			</div>
		</RouterLink>
		<RouterLink to="/about">
			about
		</RouterLink>
	</nav>
</template>

<script setup>
import { reactive_store } from "../state.js"
</script>

<script>
export default {}
</script>

<style scoped lang="scss">
nav {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 16rem;
	background-color: var(--panel-background-color);
	border-right: var(--panel-border-width) solid var(--panel-border-color);
	transition: var(--tran-03);

	display: flex;
	flex-direction: column;

	&.close {
		width: 3rem;
		transition: var(--tran-03);

		.logo {
			padding: 0;
			transition: var(--tran-03);
		}
		.logo-name {
			opacity: 0;
			transition: var(--tran-03);
		}
		.logo-desc {
			opacity: 0;
			transition: var(--tran-03);
		}
	}

	.logo {
		display: flex;
		align-items: center;
		height: 3rem;
		transition: var(--tran-03);
		gap: 0.5rem;

		@at-root {
			nav:not(.close) {
				.logo {
					margin: 0.5rem;
					&:hover {
						background-color: color-mix(
							in oklab,
							var(--primary-color),
							rgba(0, 0, 0, 0) 90%
						);
						border-radius: var(--panel-border-radius);
					}
				}
			}
		}

		.logo-text {
			display: flex;
			flex-direction: column;

			.logo-name {
				font-size: 0.875rem;
				font-weight: 500;
				line-height: 20px;
				color: var(--text-color);
				transition: var(--tran-03);
			}
			.logo-desc {
				font-size: 0.75rem;
				font-weight: 400;
				line-height: 16px;
				color: var(--text-muted-color);
				transition: var(--tran-03);
			}
		}

		.logo-image {
			display: flex;
			justify-content: center;
			align-items: center;

			min-width: 3rem;
			min-height: 3rem;
			scale: 0.7;
			@at-root {
				nav.close {
					.logo .logo-image {
						&:hover {
							background-color: color-mix(
								in oklab,
								var(--primary-color),
								rgba(0, 0, 0, 0) 90%
								
							);
							border-radius: var(--panel-border-radius);
						}
					}
				}
			}

			img {
				width: 20px;
				aspect-ratio: 1/1;
				object-fit: cover;
				border-radius: 50%;
				scale: 2;
			}
		}
	}
}
</style>
