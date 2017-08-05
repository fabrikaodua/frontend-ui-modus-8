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
				<h2>
					<slot> Duis dapidus aliquam mi, eget euismod sem scelerisque ut.</slot>
				</h2>
			</div>
			<div class="datum-header">
				<slot>25 May 2013</slot>,
			</div>
			<div class="author">
				<slot>
					Hosted by
					<a href="#">Admin</a> in
					<a href="#">Wordpress</a>
				</slot>
			</div>

			<div class="category">
				<a href="#">
					<slot>Design</slot>
				</a> ,
				<a href="#">
					<slot>Template</slot>
				</a>
			</div>

			<div class="comments">
				<a href="#">
					<slot>22</slot>
				</a>
			</div>
		</div>
	</content-wrapper>
</template>