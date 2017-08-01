<style src="./tabs.css"/>

<template>
	<div>
		<div>
			<ul class="tab-list">
				<li v-for="menuItem in navItemsArray" class="tab-item" :class="{ selectedMenuItem: menuItem.isActive }" @click="selectMenuItem(menuItem)">
					<a>{{ menuItem.name }}</a>
				</li>
			</ul>
		</div>
	
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			navItemsArray: []
		}
	},
	mounted() {
		this.navItemsArray = this.$children;
	},
	methods: {
		selectMenuItem(passedMenuItemObject) {
			this.navItemsArray.forEach(item => {
				item.isActive = (item == passedMenuItemObject)
			})
			passedMenuItemObject.isActive = true;
		}
	}

}
</script>

