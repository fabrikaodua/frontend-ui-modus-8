<style src="./tag-item.css" />

<script>
export default {
	components: {  },
	props: {
		active: Boolean,
	}
}
</script>

<template>
	 <div class="tag-item" :class="{'state-active': active}"><a href="#"><slot></slot></a></div>
</template>

