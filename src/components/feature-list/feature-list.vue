<script>
	import FeatureItem from '../feature-item/feature-item.vue';
	import ImageContent from '../image-content/image-content.vue';

	export default {
		components: {
			FeatureItem,
			ImageContent
		}
	};
</script>

<style src="./feature-list.css" />

<template>
	<div class="feature-list">
		<div class="feature-list-content">
			<feature-item
				heading="Suspendisse"
				description=" Quisque id tellus quis risus vehicula vehicula ut turpis. In eros nulla, placerat vitae at, vehicula ut nunc. "
				>
					<image-content url="./images/img_thumb.png"></image-content>
				</feature-item>

				<feature-item
				heading="Maecenas"
				description="Ut eleifend libero sed neque rhoncus consequat. Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo."
				>
					<image-content url="./images/img_key.png"></image-content>
				</feature-item>

				<feature-item
				heading="Aliquam"
				description="Vivamus eget ante bibendum arcu vehicula ultricies. Integer venenatis mattis nisl, vitae pulvinar dui tempor non."
				>
					<image-content url="./images/img_flag.png"></image-content>
				</feature-item>

				<feature-item
				heading="Habitasse"
				description="Astehicula ultricies. Integer venenatis mattis nisl, vitae pulvinar dui tempor non."
				>
					<image-content url="./images/img_flask.png"></image-content>
				</feature-item>
		</div>
	</div>
</template>