<style src="./expandable-box.css"/>

<template>
<div class="expandable-box" :class="{expanded: opened}">
	<button title="Аккордеон" class="accordion-title" @click="toggle">Accordion Title</button>
	<span class="text-message">Vivamus eget ante bibendum arcu vehicula ultricies. Integer venenatis mattis nisl, vitae pulvinar dui tempor.Ut eleifend libero sed neque rhoncus consequat. Maecenas tincidunt, augue et rutrum condimentum, libero lectus mattis orci, ut commodo.</span>
</div>
</template>

<script src="./expandable-box.js"></script>