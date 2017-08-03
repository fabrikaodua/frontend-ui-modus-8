
<script>
import BreadcrumbsNavigation from '../breadcrumbs-navigation/breadcrumbs-navigation.vue';
import ContentWrapper from '../content-wrapper/content-wrapper.vue';

export default {
	components: {
		BreadcrumbsNavigation,
		ContentWrapper
	}
};

</script>
<style src="./top-bar.css" />

<template>

	<div class="top-bar">
	<content-wrapper>
	<slot></slot>

		<breadcrumbs-navigation class="breadcrumbs"></breadcrumbs-navigation>
		</content-wrapper>
	</div>


</template>
