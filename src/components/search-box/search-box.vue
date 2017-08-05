<style src="./search-box.css" />

<template>
	<div class="search-box">
		<button class="search-box-button" v-on:click="toggle"></button>
		<div class="search-box-input" :class="{shown: shown}">
			<input type="text" placeholder="Search the site">
		</div>
	</div>
</template>

<script src="./search-box.js"></script>
