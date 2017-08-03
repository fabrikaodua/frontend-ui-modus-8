<script>
	import ButtonControl from '../button-control/button-control.vue';

	export default {
		components: {
			ButtonControl
		},
		props: ['heading', 'description']
	};
</script>

<style src="./feature-item.css" />

<template>
	<div class="feature-item">
		<div class="feature-item-content">
			<slot></slot>
          	<div class="feature-item-heading">{{heading}}</div>
          	<div class="feature-item-description">{{description}}</div>
		</div>
		<button-control>Read more</button-control>
	</div>
</template>