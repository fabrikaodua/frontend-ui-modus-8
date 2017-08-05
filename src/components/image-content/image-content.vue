<style src="./image-content.css" />
<script src="./image-content.js"></script>
<script>
	export default {
		props: ['url', 'alt']
	}

</script>

<template>
  <picture class="image-content" >
	 <img :src="url" :alt="alt">
  </picture>
</template>
