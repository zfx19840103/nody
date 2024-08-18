<script setup lang="ts">
import { ref } from "vue";
import Home from "./home.vue";
import Products from "./products.vue";
import Services from "./services.vue";
import Projects from "./projects.vue";
import AboutUs from "./about-us.vue";
import ContactUs from "./contact-us.vue";

const activeIndex = ref("1");

function handleSelect(index: string) {
	activeIndex.value = index;
}
</script>

<template>
	<div class="common-layout">
		<el-container>
			<el-header>
				<el-affix :offset="0">
					<h1 class="logo"><img src="../../src/assets/logo.png" alt="NODY"></h1>
					<el-menu
						:default-active="activeIndex"
						class="header-menu"
						mode="horizontal"
						@select="handleSelect"
					>
						<el-menu-item index="1">
							<a href="#home">Home</a>
						</el-menu-item>
						<el-menu-item index="2">
							<a href="#products">Products</a>
						</el-menu-item>
						<el-menu-item index="3">
							<a href="#services">Services</a>
						</el-menu-item>
						<el-menu-item index="4">
							<a href="#projects">Projects</a>
						</el-menu-item>
						<el-menu-item index="5">
							<a href="#about-us">About Us</a>
						</el-menu-item>
						<el-menu-item index="6">
							<a href="#contact-us">Contact Us</a>
						</el-menu-item>
					</el-menu>
				</el-affix>
			</el-header>
			<el-main>
				<Home id="home" />
				<Products id="products" />
				<Services id="services" />
				<Projects id="projects" />
				<AboutUs id="about-us" />
				<ContactUs id="contact-us" />
			</el-main>
			<el-footer>
				<div class="footer-content">
					<p>© 2022 NODY. All rights reserved.</p>
					<p>
						<a href="#">Privacy Policy</a>
						<a href="#">Terms of Service</a>
						<a href="#">Contact Us</a>
						<a href="#">FAQ</a>
						<a href="#">Sitemap</a>
						<a href="#">RSS</a>
						<a href="#">Feedback</a>
						<a href="#">Help</a>
						<a href="#">About Us</a>
					</p>
				</div>
			</el-footer>
		</el-container>
	</div>
</template>

<style scoped lang="scss">
.logo {
	font-size: 36px;
	font-weight: bold;
	color: #333;
	margin: 0;
	padding: 0 30px 0 0;
	line-height: 60px;
	float: left;
	height: 60px;
	display: block;
	text-decoration: none;
	background-color: #fff;
	img {
		height: 100%;
		width: auto;
	}
}
.header-menu {
	background-color: #fff;
	border-bottom: 1px solid #eee;
	a {
		font-size: 16px;
		color: #333;
		padding: 0 10px;
	}
}
.el-main {
	padding: 0 20px;
}
.footer-content {
	background-color: #292d32;
	padding: 20px;
	text-align: center;
	p {
		color: #fff;
		margin: 20px auto;
	}
	a {
		color: #fff;
		margin-right: 20px;
		&:hover {
			color: #f5f5f5;
		}
		&:last-child {
			margin-right: 0;
		}
	}
}


</style>
