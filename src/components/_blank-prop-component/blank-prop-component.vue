<style src="./blank-prop-component.css" />

<script>
	export default {
		components: {  },
		props: ['tip', 'active', 'author'] // The list of supported custom attributes
	};
</script>

<template>
	<!-- How to bind custom attributes to HTML attributes.
		`:title="tip"` - passes value from `tip` to `title` attribute
		`:class="{'state-active': active}"` - enables 'state-active' class on element, when `active` value is true.
	 -->
	<div 
		class="blank-prop-component" 
		:title="tip"
		:class="{'state-active': active}"
	> 
		<slot></slot>
		<!-- The attribute `author` is used as a text in HTML -->
		<div class="author-name">{{author}}</div>
	</div>
</template>

<!-- Usage:
	<blank-prop-component tip="Quotr from semebody" active author="Jim Kerry">
		Inner text
	</blank-prop-component>
-->