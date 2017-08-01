<script>
import PageHeader from '../components/page-header/page-header.vue';
import ImageContent from '../components/image-content/image-content.vue';
import VideoPlaceholder from '../components/video-placeholder/video-placeholder.vue';
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
import DataTable from '../components/data-table/data-table.vue';
import FeedbackQuote from '../components/feedback-quote/feedback-quote.vue';
import BlogPostHeader from '../components/blog-post-header/blog-post-header.vue';
import AddressInfo from '../components/address-info/address-info.vue';
import FeatureItem from '../components/feature-item/feature-item.vue';
import BlogPost from '../components/blog-post/blog-post.vue';
import ExpandableBox from '../components/expandable-box/expandable-box.vue';
import FormFeedback from '../components/form-feedback/form-feedback.vue';
import FeatureList from '../components/feature-list/feature-list.vue';


export default {
	components: {
		PageHeader,
		ImageContent,
		VideoPlaceholder,
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
		FeedbackQuote,
		BlogPostHeader,
		DataTable,
		AddressInfo,
		FeatureItem,
		BlogPost,
		ExpandableBox,
		FormFeedback,
		FeatureList
	}
};
</script>

<template>
	<body>
	
		<page-header></page-header>
		<top-bar> <h1 class="naiming-top-bar"> Examples</h1> </top-bar>
		<content-wrapper>
	
			UI Kit
	
			<breadcrumbs-navigation/>
	
			<address-info></address-info>
			<search-box></search-box>
			<tag-item>All</tag-item>
			<tag-item>Web design</tag-item>
			<tag-item>Logo design</tag-item>
			<tag-item>Photography</tag-item>
			<tag-item>Wordpress</tag-item>
	
			<a href="">Open Sans</a>
			<blockquote>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque.Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. </blockquote>
	
			<LinkExternal></LinkExternal>
			</br>
			<VideoPlaceholder></VideoPlaceholder>
			
			
			<motivation-info></motivation-info>
			<expandable-box></expandable-box>
			</br>
			<button-control></button-control>
			<tile-small>
				expandable-box
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
	
			<blog-post-header> </blog-post-header>
	
			<h4>Feature List</h4>
			
			<feature-list>
				
			</feature-list>

			<h4>BLOG POST </h4>
			<blog-post/>
			<form-feedback />
	
		</content-wrapper>
	
		<page-footer></page-footer>
	
	</body>
</template>