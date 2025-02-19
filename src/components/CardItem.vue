<template>
	<div class="grid-item" :data-id="index" :data-ratio="getRatioName()">
		<a>
			<img class="img-fill" loading="lazy" :src="'https://qawerz.ru/' + img.path" />
			<img class="img-shadow" loading="lazy" :src="'https://qawerz.ru/' + img.path" />
		</a>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	props: {
		img: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
	},
	methods: {
		getRatioName() {
			const ratio = this.img.w / this.img.h
			if (ratio > 2.56) {
				return "h-short"
			} else if (2.56 >= ratio && ratio > 1.8) {
				return "h-tall"
			} else if (1.8 >= ratio && ratio > 1.75) {
				return "h-taller"
			} else if (1.75 >= ratio && ratio > 1) {
				return "h-tallest"
			} else if (1 >= ratio && ratio > 0.8) {
				return "short"
			} else if (0.8 >= ratio && ratio > 0.75) {
				return "tall"
			} else if (0.75 >= ratio && ratio > 0.56) {
				return "taller"
			} else if (0.56 > ratio) {
				return "tallest"
			}
		},
	},
}
</script>

<style scoped lang="scss">
.grid-item {
	position: relative;
	border-radius: 10px;
	transition: var(--tran-03);
	content-visibility: auto;
	&[data-ratio=short] {
		grid-row: span 5;

		a img {
			height: calc(5 * 20px + 4 * 20px);
			object-fit: cover;
		}
	}

	&[data-ratio=tall] {
		grid-row: span 6;

		a img {
			height: calc(6 * 20px + 5 * 20px);
			object-fit: cover;
		}
	}

	&[data-ratio=taller] {
		grid-row: span 7;

		a img {
			height: calc(7 * 20px + 6 * 20px);
			object-fit: cover;
		}
	}

	&[data-ratio=tallest] {
		grid-row: span 9;

		a img {
			height: calc(9 * 20px + 8 * 20px);
			object-fit: cover;
		}
	}

	&[data-ratio=h-short] {
		grid-row: span 4;
		grid-column: span 2;

		a img {
			height: calc(4 * 20px + 3 * 20px);
			object-fit: cover;
		}
	}
	&[data-ratio=h-tall] {
		grid-row: span 6;
		grid-column: span 2;

		a img {
			height: calc(6 * 20px + 5 * 20px);
		}
	}
	&[data-ratio=h-taller] {
		grid-row: span 12;
		grid-column: span 4;

		a img {
			height: calc(12 * 20px + 11 * 20px);
			object-fit: cover;
		}
	}

	&[data-ratio=h-tallest] {
		grid-row: span 14;
		grid-column: span 4;

		a img {
			height: calc(14 * 20px + 13 * 20px);
			object-fit: cover;
		}
	}

	a img {
		position: relative;
		width: 100%;
		content-visibility: auto;
	}

    .img-fill {
		z-index: 1;
		position: relative;
		border-radius: 10px 10px;
		transition: var(--tran-03);
		border: 1px solid #000;
		cursor: pointer;

		&:hover {
			+ .img-shadow {
				opacity: 1;
				filter: blur(20px);
			}
		}
	}

	.img-shadow {
		border-radius: 10px 10px;
		transition: 0.5s;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
}
</style>
