<style src="./video-content.css" />
<script>
	export default {
		props: ['src', 'alt']
	};

</script>

<template>
	<div class="video-content">
		<video controls>
			<source :src="src">
		</video>
	</div>
</template>
