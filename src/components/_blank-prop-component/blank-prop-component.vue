<style src="./blank-prop-component.css" />

<script>
export default {
	components: {},
	// List of supported custom attributes, where key is attribute name and value is an attribute value type
	props: {
		tip: String,
		author: String,
		active: Boolean
	},
	// ALternative simplified version of properties listThe list of supported custom attributes,
	// but it doesn't support Boolean values
	// props: ['tip', 'author']
};
</script>

<template>
	<!-- How to bind custom attributes to HTML attributes.
		`:title="tip"` - passes value from `tip` to `title` attribute
		`:class="{'state-active': active}"` - enables 'state-active' class on element, when `active` value is true.
	-->
	<div class="blank-prop-component" :title="tip" :class="{'state-active': active}">
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