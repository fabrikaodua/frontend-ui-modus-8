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
	<a href="#" class="tag-item" :class="{'state-active': active}"><slot></slot></a>
</template>

