<script>
	import LinkExternal from '../link-external/link-external.vue';

	export default {
		components: {
			LinkExternal
		}
	};
</script>

<style src="./tile-small.css" />

<template>
	<div class="tile-small">
		<div class="tile-small-content">
			<slot></slot>  <!-- Slot for image -->
			<div class="tile-small-hover"> 
				<button type="button" class="hover-button" />
				<link-external></link-external>
				<span> Lorem ipsum </span>
			</div> 
		</div>
	</div>
</template>
