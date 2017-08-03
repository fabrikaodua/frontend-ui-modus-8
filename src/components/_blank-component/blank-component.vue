<style src="./blank-component.css" /> <!-- Include component styles -->

<!-- The component may reuse another components. In such case we need to import them in <script> section.
If there no dependencies the <script> may be removed at all -->
<script>
// define relative paths starting from this component
import AnotherComponent from '../another-component/another-component.vue';
import YetAnotherComponent from '../yet-another-component/yet-another-component.vue';

export default {
	components: { AnotherComponent, YetAnotherComponent }, // list here all imported components separated by comma
};
</script>

<template>
	<!-- Use any tag that is necessary for this component -->
	<div class="blank-component">
		<!-- Class name should be the same as file and folder name -->
		<!-- If some components was imported they may be used in the template with lowercase dashed names-->
		<another-component>
			content
		</another-component>
		<yet-another-component />
		<!-- Self closed example -->

		<span>
			<!-- Just a regular HTML -->
			<!-- Use optionaly a special <slot> tag to point where to insert children -->
			<slot>
				<!-- Put here a text or markup that will be displayed if no children were passed to this component -->
			</slot>
		</span>
	</div>
</template>
