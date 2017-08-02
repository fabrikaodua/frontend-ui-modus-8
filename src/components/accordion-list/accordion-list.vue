<template>
<div class="accordion-list">
	<expandable-box :expanded="expandedItems[0]" @click="expand(0)"></expandable-box>
	<expandable-box :expanded="expandedItems[1]" @click="expand(1)"></expandable-box>
	<expandable-box :expanded="expandedItems[2]" @click="expand(2)"></expandable-box>
</div>
</template>

<script src="./accordion-list.js"></script>