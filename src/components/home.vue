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
			<el-col :span="12" >
				<div class="description">
					<div class="text">
						<h2>
							Create amazing products with
							<el-text class="highlight" size="large" type="primary">科普勒</el-text>
						</h2>
						<h3>BEIJING KPL TECHNOLOGY CO.,LTD COMPANY PROFILE</h3>
						<h4>WHAT WE DO?</h4>
						<p>SCOPE OF PRODUCT SPECIALIZATION</p>
						<p>
							<strong>EXCAVATORS</strong>
							<strong>LOADERS</strong>
							<strong>GRADERS</strong>
							<strong>Forklifts</strong>
							<strong>GENERATOR SETS</strong>
						</p>
						<p>
							<strong>ENERGY STORAGE SYSTEMS</strong>
							<strong>AGRICULTURAL EQUIPMENTS</strong>
						</p>
						<p>
							<strong>WELDING MACHINES</strong>
							<strong>WATER PUMPS</strong>
						</p>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.home_placeholder {
	background: linear-gradient(to bottom, #000 0%, #000 100%);
	opacity: 0.9;
	padding: 30px 50px;
}
.home_placeholder .block {
	text-align: right;
	display: inline-block;
	box-sizing: border-box;
	vertical-align: top;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	border-radius: 10px;
	overflow: hidden;
}
.home_placeholder .description {
	display: inline-block;
	color: var(--el-text-color-secondary);
	text-align: left;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	.text {
		position: relative;
		top:10%;
		box-shadow: 0px 0px 4px 0px rgb(204, 204, 204);
		background: #fc0;
		padding: 20px 20px 20px 50px;
		border-radius: 0 10px 10px 0;
		margin-left: -50px;
		box-sizing: border-box;
		height: 80%;
		z-index: 1;
	}
	h2 {
		margin: 0.8rem 0 0;
		color: #000;
		font-size: 1.8rem;
		text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
		.highlight {
			font-size: 2.5rem;
			font-weight: bold;
			color: #000;
			display: inline-block;
		}
	}
	h3 {
		color: #000;
		font-size: 1.4rem;
		margin: 1rem 0 0;
	}
	h4 {
		color: #000;
		font-size: 1.4rem;
		font-weight: 500;
		margin: 2rem 0 1rem;
	}
	p {
		color: #000;
		font-size: 1rem;
		margin: 0.5rem 0 0;
		word-break: break-all;
		strong {
			font-weight: 300;
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