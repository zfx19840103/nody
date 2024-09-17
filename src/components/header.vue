<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";

const props = defineProps(["activeIndex"]);
const emit = defineEmits(["childEvent"]);

const handleSelect = (index: string) => {
	emit("childEvent", index);
};
</script>

<template>
	<el-header>
		<el-affix :offset="0" class="affix-header">
			<el-anchor :offset="60" direction="horizontal">
				<h1 class="logo" @click="$router.push('/')" title="KEPULE">
					<img src="../../src/assets/logo-white.png" alt="logo" />
				</h1>
				<el-anchor-link href="#Home">Home</el-anchor-link>
				<el-anchor-link href="#Generators">Generators</el-anchor-link>
				<el-anchor-link href="#OtherProducts">OtherProducts</el-anchor-link>
				<el-anchor-link href="#services">services</el-anchor-link>
				<el-anchor-link href="#aboutUs">aboutUs</el-anchor-link>
				<el-anchor-link href="#contactUs">contactUs</el-anchor-link>
			</el-anchor>
		</el-affix>
	</el-header>
</template>

<style scoped lang="scss">
.logo {
	float: left;
	font-size: 36px;
	font-weight: bold;
	color: #333;
	margin: 6px 0 0;
	width: 300px;
	height: 54px;
	display: block;
	text-decoration: none;
	background-color: #000;
	img {
		height: 100%;
		width: auto;
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

	.el-anchor.el-anchor--horizontal .el-anchor__list .el-anchor__item {
		padding: 0 36px 0 0;
	}
}

.el-anchor {
	--el-anchor-bg-color: #000;
	--el-anchor-line-height: 52px;
	--el-anchor-font-size: 24px;
	--el-anchor-color: #fff;
	--el-anchor-active-color: var(--el-color-primary);
	--el-anchor-marker-bg-color: #fff;
}
</style>
