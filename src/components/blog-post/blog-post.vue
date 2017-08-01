<style src="./blog-post.css"/>

<script>
import ImagePlaceholder from '../image-placeholder/image-placeholder.vue';
import ContentWrapper from '../content-wrapper/content-wrapper.vue';
import BlogPostHeader from '../blog-post-header/blog-post-header.vue';


export default {
	components: {
		ImagePlaceholder,
		ContentWrapper,
		BlogPostHeader
	}
};
</script>

<template>
	<div class="blog-post">
		<div class="datum">
			<span class="datum-month"> May</span>
			<span class="datum-date">26</span>
		</div>
	
		<image-placeholder class="blog-image-placeholder"></image-placeholder>
	
		<article class="blog-article">
	
			<blog-post-header/>
	
			<p class="blog-post-paragraph">
				<slot> Maecenas eget turpis turpis. Nunc vel metus augue. Aenean euismod cursus ligula eget dapibus. Praesent vel erat in tortor placerat dignissim. Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
				</slot>
			</p>
			<div class="blog-post-link">
				<a href="#">Continue reading</a>
			</div>
		</article>
	</div>
</template>
