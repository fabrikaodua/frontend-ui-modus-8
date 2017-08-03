<style src="./main-menu.css" />


<template>
	<nav class="main-menu">
		<ul class="menu-list">
			<li class="menu-item">
				<router-link to="/index" class="link" active-class="current">Main</router-link>
			</li>
			<li class="menu-item">
				<router-link to="/contacts" class="link" active-class="current">Contacts</router-link>
			</li>
			<li class="menu-item">
				<router-link to="/blog" class="link" active-class="current">Blog</router-link>
			</li>
			<li class="menu-item item-portfolio" @click="showSubMenu">
				<router-link to="/portfolio" class="link" active-class="current">Portfolio</router-link>
				<ul class="sub-menu">
					<li class="sub-item">
						<router-link to="/portfolio-2" class="link-sub" active-class="current">Portfolio-2</router-link>
					</li>
	
					<li class="sub-item">
						<router-link to="/portfolio-3" class="link-sub" active-class="current">Portfolio-3</router-link>
					</li>
	
					<li class="sub-item">
						<router-link to="/portfolio-4" class="link-sub" active-class="current">Portfolio-4</router-link>
					</li>
				</ul>
			</li>
			</li>
			<li class="menu-item">
				<router-link to="/ui-kit" class="link" active-class="current">Examples</router-link>
			</li>
		</ul>
	</nav>
</template>
<script src="./main-menu.js"></script>