<style src="./image-content.css" />
<script src="./image-content.js"></script>
<script>
	export default {
		props: ['src', 'alt']
	};

</script>

<template>
  <picture class="image-content" >
	 <img :src="src" :alt="alt">
  </picture>
</template>
