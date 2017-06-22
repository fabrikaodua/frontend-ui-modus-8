<script>
import PageHeader from '../components/page-header/page-header.vue';
import ImageContent from '../components/image-content/image-content.vue';
import TagItem from '../components/tag-item/tag-item.vue';
import SearchBox from '../components/search-box/search-box.vue';
import ButtonControl from '../components/button-control/button-control.vue';
import ContentWrapper from '../components/content-wrapper/content-wrapper.vue';
import PageFooter from '../components/page-footer/page-footer.vue';
import TileSmall from '../components/tile-small/tile-small.vue';
import TileMedium from '../components/tile-medium/tile-medium.vue';
import TileLarge from '../components/tile-large/tile-large.vue';
import LinkExternal from '../components/link-external/link-external.vue';
import BreadcrumbsNavigation from '../components/breadcrumbs-navigation/breadcrumbs-navigation.vue';
import TopBar from '../components/top-bar/top-bar.vue';
import ListCross from '../components/list-cross/list-cross.vue';
import ListArrow from '../components/list-arrow/list-arrow.vue';
import ListCheck from '../components/list-check/list-check.vue';
import ListUnordered from '../components/list-unordered/list-unordered.vue';
import BlogSideBar from '../components/blog-side-bar/blog-side-bar.vue';
import TeaserItem from '../components/teaser-item/teaser-item.vue';
import MotivationInfo from '../components/motivation-info/motivation-info.vue';
import ShareBar from '../components/share-bar/share-bar.vue';
import DataTable from '../components/data-table/data-table.vue';
import FeedbackQuote from '../components/feedback-quote/feedback-quote.vue';
import BlogPostHeader from '../components/blog-post-header/blog-post-header.vue';
import AddressInfo from '../components/address-info/address-info.vue';


export default {
	components: {
		PageHeader,
		ImageContent,
		TagItem,
		SearchBox,
		ButtonControl,
		ContentWrapper,
		PageFooter,
		TileSmall,
		TileMedium,
		TileLarge,
		LinkExternal,
		BreadcrumbsNavigation,
		TopBar,
		ListCross,
		ListArrow,
		ListCheck,
		ListUnordered,
		BlogSideBar,
		TeaserItem,
		MotivationInfo,
		ShareBar,
		FeedbackQuote,
		BlogPostHeader,
		DataTable,
		AddressInfo
	}
};
</script>

<template>
	<body>
	
		<page-header></page-header>
		<top-bar/>
		<content-wrapper>
	
			UI Kit
	
			<breadcrumbs-navigation/>
	
			<address-info></address-info>
			<tag-item></tag-item>
	
			<a href="">Open Sans</a>
			<blockquote>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </blockquote>
	
			<LinkExternal></LinkExternal>
			</br>
			<motivation-info></motivation-info>
			<button-control></button-control>
			<tile-small>
			</tile-small>
			<feedback-quote/>
	
			<tabs></tabs>
	
			<tile-small>
	
			</tile-small>
	
			<tile-medium></tile-medium>
			<tabs></tabs>
	
			<list-cross></list-cross>
	
			<list-arrow></list-arrow>
	
			<list-check></list-check>
	
			<list-unordered></list-unordered>
	
			<teaser-item> </teaser-item>
			<br>
			<blog-side-bar></blog-side-bar>
	
			<data-table></data-table>
	
			<share-bar></share-bar>
	
			<blog-post-header> </blog-post-header>
	
		</content-wrapper>
	
		<page-footer></page-footer>
	
	</body>
</template>