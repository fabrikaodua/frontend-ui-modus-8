<script>
	import LinkExternal from '../link-external/link-external.vue';

	export default {
		components: {
			LinkExternal
		},
		props: ['text']
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
				<div class="tile-small-text">{{text}}</div>
			</div>
		</div>
	</div>
</template>