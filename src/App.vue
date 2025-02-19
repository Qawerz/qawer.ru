<template>
	<theSidebar />
	<div class="wrapper">
		<theHeader />
		<main class="content">
			<Suspense>
				<template #default>
					<RouterView />
				</template>
				<template #fallback>
					<h1 style="color: red">Loading...</h1>
				</template>
			</Suspense>
			
		</main>
	</div>
</template>

<script setup>
import { reactive_store } from "./state.js";
import Card from "./components/CardItem.vue"
import theHeader from "./components/theHeader.vue"
import theSidebar from "./components/theSidebar.vue"
import { Suspense } from "vue";
</script>

<script>
export default {
	components: { Card, theHeader, theSidebar },
	data() {
		return {
			
		}
	},
}
</script>

<style lang="scss" scoped>

.wrapper{
	position: relative;
    left: 16rem;

    height: 100vh;
    width: calc(100% - 16rem);

    transition: var(--tran-03);

	.content {
        padding-top: 4rem;
    }
}

nav.close ~ .wrapper {
	left: 3rem;
	width: calc(100% - 3rem);
}




</style>



