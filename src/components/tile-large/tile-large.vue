<script>
	import LinkExternal from '../link-external/link-external.vue';

	export default {
		components: {
			LinkExternal
		},
		props: ['text']
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
				<div class="tile-large-text">{{text}}</div>
			</div>
		</div>
	</div>
</template>
