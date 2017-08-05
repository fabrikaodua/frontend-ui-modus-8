<script>
	import LinkExternal from '../link-external/link-external.vue';

	export default {
		components: {
			LinkExternal
		},
		props: ['text']
	};
</script>

<style src="./tile-medium.css" />

<template>
	<div class="tile-medium">
		<div class="tile-medium-content">
			<slot></slot>  <!-- Slot for image -->
			<div class="tile-medium-hover">
				<button type="button" class="hover-button" />
				<link-external></link-external>
				<div class="tile-medium-text">{{text}}</div>
			</div>
		</div>
	</div>
</template>
