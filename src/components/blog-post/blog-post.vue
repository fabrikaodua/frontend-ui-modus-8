<style src="./blog-post.css"/>

<script>
import ImageContent from '../image-content/image-content.vue';
import ContentWrapper from '../content-wrapper/content-wrapper.vue';

export default {
	components: {
		ImageContent,
		ContentWrapper
	}
};

<template>
<content-wrapper>

	<div class="blog-post">
		<div class="datum"></div>
		<div class="file-icon"></div>
		<image-content/>

		<article>
		<h2>
			<slot>Dudoododo </slot>
		</h2>

		<span></span>

		</article>
	</div>
</content-wrapper>
</template>
