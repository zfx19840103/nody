<script setup lang="ts">
import { ref } from "vue";
import src from '/src/assets/homeBanner.jpg';

</script>

<template>
	<div class="home_placeholder">
		<el-row>
			<el-col :span="10">
				<div class="description">
					<h2>Create Amazing Landing Page With <el-text class="highlight" size="large" type="primary">科普勒</el-text></h2>
					<h3>Nody is a Vue 3.x UI component library that provides a set of high-quality components for building web applications.</h3>
					<p>Nody is designed for building landing pages, portfolios, and other types of websites. It provides a set of high-quality components that can be easily customized and integrated into your project.</p>
				</div>
			</el-col>
			<el-col :span="12" :offset="2">
				<div class="block">
					<el-image :src="src">
						<template #placeholder>
							<div class="image-slot">
								Loading
								<span class="dot">...</span>
							</div>
						</template>
					</el-image>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.home_placeholder {
	background-color: #fff;
	margin-top: -20px;
	padding-top: 50px;
}
.home_placeholder .block {
	padding: 50px 0 30px;
	text-align: right;
	display: inline-block;
	width: 100%;
	box-sizing: border-box;
	vertical-align: top;
}
.home_placeholder .description {
	padding: 50px 0 0;
	display: inline-block;
	color: var(--el-text-color-secondary);
	text-align: left;
	width: 100%;
	box-sizing: border-box;
	h2 {
		padding: 20px 0 0;
		color: #333333;
		font-size: 44px;
		text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
		.highlight {
			font-weight: bold;
			font-size: 44px;
		}
	}
	h3 {
		color: #9b9bae !important;
		font-size: 24px;
		margin-top: 10px;
	}
	p {
		font-size: 18px;
		margin-top: 10px;
	}
}
.home_placeholder .el-image {
	// max-width: 500px;
	max-height: 550px;
}

.home_placeholder.image-slot {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: var(--el-fill-color-light);
	color: var(--el-text-color-secondary);
	font-size: 14px;
}
.home_placeholder .dot {
	animation: dot 2s infinite steps(3, start);
	overflow: hidden;
}
</style>