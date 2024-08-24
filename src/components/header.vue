<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
 
const props = defineProps(['activeIndex']);
const emit = defineEmits(['childEvent']);

const handleSelect = (index: string) => {
	emit('childEvent', index);
}
</script>

<template>
		<el-header>
			<el-affix :offset="0">
				<h1 class="logo" @click="$router.push('/')">
					<img src="../../src/assets/logo.png" alt="NODY" />
				</h1>
				<el-menu
					:default-active="activeIndex"
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
</style>
