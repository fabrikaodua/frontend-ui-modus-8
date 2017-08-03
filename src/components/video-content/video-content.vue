<style src="./video-content.css" />
<script>
	export default {
		props: ['src']
	}

</script>

<template>
	<video width="420" height="315" controls>
		<source :src="src">
	</video>
</template>
