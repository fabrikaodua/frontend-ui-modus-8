<script>
	export default {
		props: ['src', 'alt']
	};

</script>

<template>
	<video width="420" height="315" controls>
		<source :src="src">
	</video>
</template>
