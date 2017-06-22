<script>
	import LinkExternal from '../link-external/link-external.vue';

	export default {
		components: {
			LinkExternal
		}
	};
</script>

<style src="./tile-large.css" />

<template>
	<div class="tile-large">
		<div class="tile-large-content">
			<slot></slot>  <!-- Slot for image -->
			<div class="tile-large-hover"> 
				<button type="button" class="hover-button" />
				<link-external></link-external>
				<span> Lorem ipsum </span>
			</div> 
		</div>
	</div>
</template>
