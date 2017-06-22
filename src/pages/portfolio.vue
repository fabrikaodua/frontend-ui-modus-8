
<script>
import PageHeader from '../components/page-header/page-header.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import ImageContent from '../components/image-content/image-content.vue';
import TopBar from '../components/top-bar/top-bar.vue';
import PaginationMenu from '../components/pagination-menu/pagination-menu.vue';
import ButtonControl from '../components/button-control/button-control.vue';
import LinkExternal from '../components/link-external/link-external.vue';
import TeaserItem from '../components/teaser-item/teaser-item.vue';


export default {
	components: {
		PageHeader,
		PageFooter,
		ContentWrapper,
		TagItem,
		ImageContent,
		TopBar,
		PaginationMenu,
		ButtonControl,
		LinkExternal,
		TeaserItem

	}
};
</script>
<style src="../styles/common.css"/>
<template>
	<body>
	
		<page-header />
		<top-bar>
			<h1>Portfolio</h1>
		</top-bar>
	
		<content-wrapper>
	
			<tag-item class="tag-item-portfolio"> </tag-item>

			<teaser-item class="teaser-item-portfolio"> </teaser-item>
			<teaser-item class="teaser-item-portfolio"> </teaser-item>
			<teaser-item class="teaser-item-portfolio"> </teaser-item>
			<teaser-item class="teaser-item-portfolio"> </teaser-item>


			<pagination-menu class="pagination-portfolio"> </pagination-menu>

		 </content-wrapper>

		 <page-footer></page-footer>
		
	</body>
</template>
