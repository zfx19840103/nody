<script setup lang="ts">
import { useRouter } from "vue-router";

const route = useRouter();
let path = route.currentRoute.value.path;
const linkHref = (val: string) => {
	return path == '/projectList' ? '/index' : val;
};
</script>

<template>
	<el-header>
		<el-affix :offset="0" class="affix-header">
			<el-anchor :offset="60" direction="horizontal">
				<h1 class="logo" @click="$router.push('/index')" title="KEPULE">
					<img src="../../src/assets/logo-fc0.png" alt="logo" />
				</h1>
				<div class="header-links">
					<el-anchor-link :href="linkHref('#Home')">Home</el-anchor-link>
					<el-anchor-link href='#Generators'>Generators</el-anchor-link>
					<el-anchor-link :href="linkHref('#OtherProducts')">OtherProducts</el-anchor-link>
					<el-anchor-link :href="linkHref('#Services')">Services</el-anchor-link>
					<el-anchor-link :href="linkHref('#AboutUs')">AboutUs</el-anchor-link>
					<el-anchor-link :href="linkHref('#ContactUs')">ContactUs</el-anchor-link>
				</div>
			</el-anchor>
		</el-affix>
	</el-header>
</template>

<style scoped lang="scss">
.logo {
	font-size: 36px;
	font-weight: bold;
	color: #333;
	margin: 0;
	width: 300px;
	height: 54px;
	display: block;
	text-decoration: none;
	background-color: #000;
	padding: 14px 12px 5px 30px;
	box-sizing: border-box;
	img {
		max-width: 100%;
		max-height: 100%;
		display: block;
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
		// padding: 0 36px 0 0;
	}

}
.header-links {
		display: flex;
		width: 65%;
		justify-content: space-between;
		align-items: center;
	}
@media only screen and (min-width: 1500px) {
	.el-header .header-links {
		width: 55%;
	}
}

::v-deep .header-links a.el-anchor__link.is-active {
	color: #fc0;
}
.el-anchor {
	--el-anchor-bg-color: #000;
	--el-anchor-line-height: 52px;
	--el-anchor-font-size: 24px;
	--el-anchor-color: #fc0;
	--el-anchor-active-color: var(--el-color-primary);
	--el-anchor-marker-bg-color: #fff;
}
</style>
