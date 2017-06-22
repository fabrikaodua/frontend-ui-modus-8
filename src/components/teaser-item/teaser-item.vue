<style src="./teaser-item.css" />

<script>
import ImageContent from '../image-content/image-content.vue';
import LinkExternal from '../link-external/link-external.vue';
import ButtonControl from '../button-control/button-control.vue';

export default {
	components: {
		ImageContent,
		LinkExternal,
		ButtonControl
	}
};
</script>

<template>
	<div class="teaser-item" >
		<image-content src="./components/image-content/image-placeholder.png"></image-content>
		<h4>Donec faucibus ultricies congue</h4>
		<p>Maecenas eget turpis turpis. Nunc vel metus augue. Aenean euismod cursus ligula eget dapibus. Praesent vel erat in tortor placerat dignissim. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
		<LinkExternal>www.project.dom</LinkExternal>

		<button-control>View Details</button-control>

	</div>
</template>
