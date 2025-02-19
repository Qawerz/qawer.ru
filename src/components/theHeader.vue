<template>
	<div class="header">
		<button @click="toggleSidebar()" class="burger-menu">
            <i class="uil uil-bars"></i>
        </button>
		<div class="vertical-line"></div>
		<p>Главная</p>
	</div>
</template>

<script setup>
import { reactive_store } from "../state.js"
</script>

<script>
export default {
	methods: {
		toggleSidebar() {
			reactive_store.sidebarState = !reactive_store.sidebarState
		},
	},
}
</script>

<style scoped lang="scss">
.header {
    font-family: sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 20px;
    
	position: fixed;
	left: 16rem;
	top: 0;
    
    z-index: 10;

    padding-left: 1rem;

	display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 0.5rem;

	width: calc(100% - 16rem);
    height: 3rem;
	
	background: color-mix(in oklab, var(--panel-background-color), rgba(255,255,255,0.0) 50%);
    backdrop-filter: blur( 0.4rem);

    border-bottom: var(--panel-border-width) solid var(--panel-border-color);
    border-left: var(--panel-border-width) solid var(--panel-border-color);

	transition: var(--tran-03);

    .vertical-line {
        border-left: var(--panel-border-width) solid var(--panel-border-color);
        width: 1px;
        height: 1rem;
        margin-right: 0.5rem;
    }

    .burger-menu{
        border: none;
        background-color: transparent;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.25rem;
        color: #fafafa;
        font-size: 1.2rem;
        &:hover {
            background-color: color-mix(in oklab, var(--primary-color), rgba(0,0,0,0) 90%)
        }
    }
}

nav.close ~ .wrapper .header {
	left: 3rem;
	width: calc(100% - 3rem);
}
</style>
