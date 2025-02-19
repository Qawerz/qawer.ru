<template>
	<div class="masonry-grid">
		<div class="box r5 c4">
			<h1>
				Добро пожаловть на
				<span style="color: var(--primary-color)">qawerz.ru </span> -
				<span style="color: var(--secondery-color)">Главная</span>
			</h1>
			<p>
				Этот сайт является неким сборником всего того, чем я хочу поделиться с
				миром. <br />На главной странице я решил поделиться своими работами в
				<i style="color: var(--accent-color)">Stable Diffusion</i>.
			</p>
		</div>
		<div class="box r2 c3 tac">
			<p>
				Сейчас вы видите столько изображений:
				<span style="color: var(--accent-color)">{{ imgs.length }} </span>
			</p>
		</div>
		<CardItem
			v-for="(el, index) in imgs"
			v-once
			:key="index"
			:img="el"
			:index="index"
		/>
	</div>
</template>

<script setup>
import axios from "axios"
import CardItem from "../components/CardItem.vue"
import { reactive_store } from "../state.js"
import { ref } from "vue";

const imgs = ref(null)

const getImgs = async () => {
	console.log("!")
	await axios.get('/api/v1/images')
			.then(response => {
				imgs.value = response.data
			}).catch(error => console.log(error));
}
if (imgs.value == null){
	await getImgs()
}
</script>

<script>
export default {
	components: { CardItem },
	data() {
		return {
			// imgs: reactive_store.imgs,
		}
	},
	
}
</script>

<style scoped lang="scss">
.masonry-grid {
	display: grid;
	justify-content: center;
	grid-auto-flow: dense;
	grid-gap: 1.25rem;

	grid-auto-rows: 20px;
	grid-template-columns: repeat(auto-fit, 180px);
	align-items: start;
	counter-reset: items;
	margin: 2rem 3.5rem 4rem 3.5rem;
	transition: var(--tran-03);
}

.box {
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;

	height: 100%;
	width: 100%;

	z-index: 2;

	padding: 1.5rem;

	border: var(--panel-border-width) solid var(--panel-border-color);
	border-radius: var(--panel-border-radius);

	// margin: 1rem;
	background-color: var(--panel-background-color);

	h1 {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	@for $i from 1 through 5 {
		&.r#{$i} {
			grid-row: span #{$i};
		}
	}
	@for $i from 1 through 5 {
		&.c#{$i} {
			grid-column: span #{$i};
		}
	}
	&.tac {
		text-align: center;
	}
}
</style>
