<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps(["activeIndex"]);
const emit = defineEmits(["childEvent"]);

const handleSelect = (index: string) => {
	emit("childEvent", index);
};
</script>

<template>
	<el-header>
		<el-affix :offset="0" class="affix-header">
			<div class="container">
				<h1 class="logo" @click="$router.push('/')">
					<img src="../../src/assets/logo.png" alt="NODY" />
				</h1>
				<el-menu
					:default-active="props.activeIndex"
					class="header-menu"
					mode="horizontal"
					@select="handleSelect"
				>
					<el-menu-item index="home">
						<a href="#home">Home</a>
					</el-menu-item>
					<el-menu-item index="products">
						<a href="#products">Products</a>
					</el-menu-item>
					<el-menu-item index="services">
						<a href="#services">Services</a>
					</el-menu-item>
					<el-menu-item index="projects">
						<a href="#projects">Projects</a>
					</el-menu-item>
					<el-menu-item index="aboutUs">
						<a href="#aboutUs">About Us</a>
					</el-menu-item>
					<el-menu-item index="contactUs">
						<a href="#contactUs">Contact Us</a>
					</el-menu-item>
				</el-menu>
			</div>
		</el-affix>
	</el-header>
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
	background-color: #000;
	img {
		height: 100%;
		width: auto;
	}
}
.el-menu--horizontal.el-menu {
	border-bottom-width: 0;
}
.header-menu {
	border-bottom-width: 0;
	background-color: #000;
	a {
		font-size: 20px;
		color: #fff;
		padding: 0 10px;
		font-weight: bold;
	}
}
.el-header {
	background-color: #000;
	text-align: center;
	padding: 0;
	.container {
			max-width: 1280px;
			margin: 0 auto;
	}
}
.el-menu--horizontal>.el-menu-item.is-active {
	border-bottom: #fff solid 2px;
}
</style>
