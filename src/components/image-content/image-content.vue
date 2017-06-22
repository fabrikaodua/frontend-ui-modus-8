<style src="./image-content.css" />
<script src="./image-content.js"></script>
<script>
	export default {
		props: ['src']
	}
</script>

<template>
  <picture class="image-content" >
	 <img class="image" :src="src" alt="Any picture">
  </picture>
</template>
