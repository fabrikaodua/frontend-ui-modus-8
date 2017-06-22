<script>
	import TileSmall from '../tile-small/tile-small.vue';

	export default {
		components: {
			TileSmall
		}
	};

</script>

<style src="./tiles-grid.css" />

<template>
	<div class="tiles-grid">
		<div class="tiles-grid-content">
			<slot></slot>
			<slot></slot>
			<slot></slot>
			<slot></slot>
			<slot></slot>
			<slot></slot>
			<slot></slot>
			<slot></slot>
		</div>
	</div>
</template>