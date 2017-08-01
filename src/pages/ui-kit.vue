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
import DataTable from '../components/data-table/data-table.vue';
import FeedbackQuote from '../components/feedback-quote/feedback-quote.vue';
import BlogPostHeader from '../components/blog-post-header/blog-post-header.vue';
import AddressInfo from '../components/address-info/address-info.vue';
import FeatureItem from '../components/feature-item/feature-item.vue';
import BlogPost from '../components/blog-post/blog-post.vue';
import ExpandableBox from '../components/expandable-box/expandable-box.vue';
import FormFeedback from '../components/form-feedback/form-feedback.vue';
import FeatureList from '../components/feature-list/feature-list.vue';
import Tabs from '../components/tabs/tabs.vue';
import Tab from '../components/tab/tab.vue';


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
		FeedbackQuote,
		BlogPostHeader,
		DataTable,
		AddressInfo,
		FeatureItem,
		BlogPost,
		ExpandableBox,
		FormFeedback,
		FeatureList,
		Tabs,
		Tab,
	}
};
</script>

<template>
	<body>
	
		<page-header></page-header>
		<top-bar>
			<h1 class="naiming-top-bar"> Examples</h1>
		</top-bar>
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
		</content-wrapper>
		<motivation-info></motivation-info>
		<content-wrapper>
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
	
			<!--TABS       -->
			<tabs class="tabs">
				<tab name="tab 1" :selected="true">
					<div class="tab-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit omnis dolorem totam unde hic dolorum quaerat quos modi, minus enim tempora saepe explicabo quidem ipsam alias voluptatem, commodi vero laboriosam!</p>
					</div>
				</tab>
				<tab name="tab 2">
					<div class="tab-content">
						<p>Velit voluptatum suscipit voluptatem, est expedita incidunt saepe impedit? Magni tempore neque, voluptas quos aliquam aperiam eos nemo, quo ut eaque, laborum aspernatur inventore qui accusantium quasi fuga eius fugiat.</p>
					</div>
				</tab>
				<tab name="tab 3">
					<div class="tab-content">
						<p>Eum a minima reprehenderit placeat ea impedit vero ipsa, ullam nulla! Dignissimos beatae eius minima rerum explicabo consequatur dolorem tempore sed ut molestiae necessitatibus ducimus esse eveniet maxime, omnis totam?</p>
					</div>
				</tab>
				<tab name="tab 4">
					<div class="tab-content">
						<p>Hic quidem perferendis magnam sint delectus ea debitis, officiis. Nesciunt maiores dicta neque unde voluptatem, ipsum beatae officia, ab, animi error recusandae quidem itaque in magnam. Nisi possimus culpa atque.</p>
					</div>
				</tab>
			</tabs>
	
		</content-wrapper>
	
		<page-footer></page-footer>
	
	</body>
</template>