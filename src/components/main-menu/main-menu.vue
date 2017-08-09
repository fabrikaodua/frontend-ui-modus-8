<style src="./main-menu.css" />


<template>
	<nav class="main-menu">
		<button class="menu-icon" @click="show = !show"><svg xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink" height="24px" version="1.1" viewBox="0 0 24 24" width="24px"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="miu" stroke="none" stroke-width="1"><g id="Artboard-1" transform="translate(-395.000000, -479.000000)"><g id="slice" transform="translate(215.000000, 119.000000)"/><path d="M396.500836,485 C396.224232,485 396,485.214035 396,485.504684 L396,486.495316 C396,486.774045 396.217742,487 396.500836,487 L417.499164,487 C417.775768,487 418,486.785965 418,486.495316 L418,485.504684 C418,485.225955 417.782258,485 417.499164,485 L396.500836,485 Z M396.500836,490 C396.224232,490 396,490.214035 396,490.504684 L396,491.495316 C396,491.774045 396.217742,492 396.500836,492 L417.499164,492 C417.775768,492 418,491.785965 418,491.495316 L418,490.504684 C418,490.225955 417.782258,490 417.499164,490 L396.500836,490 Z M396.500836,495 C396.224232,495 396,495.214035 396,495.504684 L396,496.495316 C396,496.774045 396.217742,497 396.500836,497 L417.499164,497 C417.775768,497 418,496.785965 418,496.495316 L418,495.504684 C418,495.225955 417.782258,495 417.499164,495 L396.500836,495 Z" fill="#fff" id="editor-list-view-hambuger-menu-glyph"/></g></g></svg></button>
		<ul class="menu-list" v-bind:class="{'state-hidden' : !show }">
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