<style src="./page-footer.css" />


<script>
import ContentWrapper from '../content-wrapper/content-wrapper.vue';

export default {
	components: {
		ContentWrapper
	}
};
</script>

<template>
	<div class="page-footer">
		<content-wrapper>
			<div class="bottom-wrapper">
				<div class="bottom-wrapper-part">
					<article class="bottom-part part-logo">
						<img src="./page-logo/modus.png" alt="logo" width="192" heigth="21" class="main-logo">
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec.</p>

						<ul class="part-phone">
							<li class="part-phone-list">Phone:</li>
							<li class="part-phone-list">182 2569 5896</li>
						</ul>
						<ul class="part-mail">
							<li class="part-phone-mail ">e-mail:</li>
							<li class="part-phone-mail">info@modu.versus</li>
						</ul>
					</article>
					<article class="bottom-part part-list">
						<ul class="part-bottom-list part-company">
						<h3 class="company-menu">Company</h3>
							<ul class="bottom-menu-list">
								<li class="tant-list">About</li>
								<li class="tant-list">FAQ</li>
								<li class="tant-list">Contact</li>
								<li class="tant-list">Terms</li>
								<li class="tant-list">Privacy</li>
								<li class="tant-list">Testimonials</li>
							</ul>
						</ul>
						<ul class="part-bottom-list part-community">
						<h3 class="community-menu">Community</h3>
							<ul class="bottom-menu-list">
								<li class="tant-list list-left">Blog</li>
								<li class="tant-list list-left">Forum</li>
								<li class="tant-list list-left">Support</li>
								<li class="tant-list list-left">Newsletter</li>
							</ul>
						</ul>
					</article>
					<article class="bottom-part part-blog">
						<div class="imageblog">
							<div class="member">
								<ul class="blog-from">
									<li class="part-from from">from the</li>
									<li class="part-from blog">BLOG</li>
								</ul>
									<table>
										<tr>
											<td rowspan="2" class="figure">
												<img src="./page-png/foto.png" alt="" width="70" heigth="70" class="left-img ">
											</td>
											<td class="blog-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit
											</td>

											<td rowspan="2" class="figure part-none">
												<img src="./page-png/foto.png" alt="" width="70" heigth="70" class="left-img ">
											</td>
											<td class="blog-text part-none">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit
											</td>
											
										</tr>
										<tr >
											<td class="blog-data">
												26 May, 2013
											</td>

											<td class="blog-data part-none">
												26 May, 2013
											</td>
										</tr>

										<tr class="margin-image"></tr>

										<tr class="part-bottom-none">
											<td rowspan="2" class="figure">
												<img src="./page-png/foto.png" alt="" width="70" heigth="70" class="left-img ">
											</td>
											<td class="blog-text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit
											</td>

											<td rowspan="2" class="figure part-none">
												<img src="./page-png/foto.png" alt="" width="70" heigth="70" class="left-img ">
											</td>
											<td class="blog-text part-none">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit
											</td>
											
										</tr>
										<tr class="part-bottom-none">
											<td class="blog-data">
												26 May, 2013
											</td>

											<td class="blog-data part-none">
												26 May, 2013
											</td>
										</tr>
									</table>
							</div>  
						</div>
					</article>
				</div>
			</div>
		</content-wrapper>
		<div class="page-bottom-line">
			<content-wrapper>
			
				<div class="modus-versus">2013  ModusVersus</div>

				<nav class="fa-go-tw-rs">
					<a href="" alt="facebook"><span class="facebook"></span></a>
					<a href="" alt="google"><span class="google"></span></a> 
					<a href="" alt="twitter"><span class="twitter"></span></a> 
					<a href="" alt="rss"><span class="rss"></span></a> 
				</nav>
			</content-wrapper>
		</div>
   </div>
</template>


