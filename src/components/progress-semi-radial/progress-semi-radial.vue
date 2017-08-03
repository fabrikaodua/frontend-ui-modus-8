<style src='./progress-semi-radial.css' />

<script>
	export default {
		props: ['value'],
		computed: {
    		rotationAngle(){ 
				let angle = 45 + (this.value * 1.8);
				return angle + 'deg';
			}
    	}	
	}
	
</script>

<template>
	<div class="progress-semi-radial">
		<div class="progress-semi-radial-overflow">
			<div 
			class="progress-semi-radial-bar"
			:style="{
				transform: `rotate(${this.rotationAngle})`
			}"
			>
			</div>
		</div>
		<span class="value">{{value}}</span>
		<span class="heading"><slot></slot></span>
	</div>
</template>

