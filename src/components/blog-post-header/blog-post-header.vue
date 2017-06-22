<style src="./blog-post-header.css"/>


<script>

import ContentWrapper from '../content-wrapper/content-wrapper.vue';



export default {
	components: {
		ContentWrapper

	}
};
</script>

<template>
	<content-wrapper>
	<div class="blog-post-header">
		<div class="blog-title">
			<h3>
				<slot> Duis dapidus aliquam mi, eget euismod sem scelerisque ut.</slot>
			</h3>
		</div>
		<div class="image-file-container"></div>
		<div class="datum">
			<slot>25 May 2013</slot>,
		</div>
		<div class="author">
			<slot>
				Hosted by <a href="#">Admin</a> in <a href="#">Wordpress</a>
			</slot>
		</div>
		
		<div class="icon-category"><img src="./icon-design.png" alt=""> </div>
		<div class="category">
				<a href="#"><slot>Design</slot></a> ,
				<a href="#"><slot>Template</slot></a>
		</div>
		
		<div class="icon-comments"><img src="./icon-comments.png" alt=""></div>
		<div class="comments">
				<a href="#"><slot>22</slot></a>
		</div>
	</div>
	</content-wrapper>

</template>