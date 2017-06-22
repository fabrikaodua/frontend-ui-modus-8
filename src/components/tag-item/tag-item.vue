<style src="./tag-item.css" />

<template>
	 <nav class="tag-item">
		<div class="tag-design">
				<div class="item-menu"><a href="#">ALL</a></div>
				<div class="item-menu"><a href="#">WEB DESIGN</a></div>
				<div class="item-menu logo"><a href="#">LOGO DESIGN</a>
				    <slot></slot>
				</div>
				<div class="item-menu"><a href="#">PHOTOGRAPHY</a></div>
				<div class="item-menu"><a href="#">WORDPRESS</a></div>
		</div> 
	 </nav>
</template>