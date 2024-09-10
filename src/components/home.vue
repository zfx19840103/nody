<script setup lang="ts" type="module">
import { ref } from "vue";
import homeBannerImg from "/src/assets/homeBanner.jpg";
// import { home } from "../api/content";

let content = ref({
	text_large: "",
	text_font: "",
	text_h2: "",
	text_p: "WHAT WE DO?",
	home_banner: homeBannerImg
});

// const getArticles = () => {
// 	home()
// 		.then((res: any) => {
// 			if (res.code === 0) {
// 				content.value = res.data;
// 			} else {
// 				console.log("failed");
// 			}
// 		})
// 		.catch((err: any) => {
// 			console.log(err);
// 		});
// };
// getArticles();

// const contentTextpFunc = (value: string) => {
// 	if (!!value && value.includes("/n")) {
// 		value = value.replace("/n", "<br><br>");
// 	}
// 	return value;
// };
</script>

<template>
	<div class="home_placeholder">
		<el-row>
			<el-col :span="11" :offset="1">
				<div class="description">
					<h2>
						Create Amazing Landing Page With
						<el-text class="highlight" size="large" type="primary">科普勒</el-text>
					</h2>
					<h3>BEIJING KPL COMPANY PROFILE COMPANY PROFILE TECHNOLOGY CO., LTD</h3>
					<h4>WHAT WE DO?</h4>
					<p>SCOPE OF PRODUCT SPECIALIZATION</p>
					<p>
						<strong>EXCAVATORS</strong>
						<strong>LOADERS</strong>
						<strong>GRADERS</strong>
						<strong>FOKLIFTS</strong>
						<strong>GENERATOR SETS</strong>
						<strong>ENERGY STORAGE SYSTEMS</strong>
						<strong>AGRICULTURAL EQUIPMENTS</strong>
						<strong>WELDING MACHINES</strong>
						<strong>WATER PUMPS</strong>
					</p>
				</div>
			</el-col>
			<el-col :span="10" :offset="1">
				<div class="block">
					<el-image :src="content.home_banner">
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
	padding-top: 30px;
}
.home_placeholder .block {
	margin-top: 50px;
	text-align: right;
	display: inline-block;
	width: 100%;
	box-sizing: border-box;
	vertical-align: top;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	overflow: hidden;
}
.home_placeholder .description {
	padding: 50px 0 0;
	display: inline-block;
	color: var(--el-text-color-secondary);
	text-align: left;
	width: 100%;
	box-sizing: border-box;
	h2 {
		padding: 10px 0 0;
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
	h4 {
		color: #9b9bae !important;
		font-size: 21px;
		margin: 0;
		font-weight: 700;
	}
	p {
		font-size: 18px;
		margin-top: 10px;
		word-break: break-all;
		strong {
			font-weight: 500;
			margin-right: 20px;
		}
	}
}
.home_placeholder .el-image {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	max-height: 550px;
	transition: all 0.3s ease;
	
}
.home_placeholder .el-image:hover {
	transform: scale(1.05);
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