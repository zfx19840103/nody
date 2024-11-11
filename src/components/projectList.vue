<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ArrowRight } from '@element-plus/icons-vue'

const route = useRouter();

import Header from "./header.vue";
import src11 from "/src/assets/produst_list_1.1.jpg";
import src12 from "/src/assets/produst_list_1.2.jpg";
import src21 from "/src/assets/produst_list_2.1.jpg";
import src22 from "/src/assets/produst_list_2.2.jpg";
import src31 from "/src/assets/produst_list_3.1.jpg";
import src41 from "/src/assets/produst_list_4.1.jpg";
import src42 from "/src/assets/produst_list_4.2.jpg";
import src51 from "/src/assets/produst_list_5.1.jpg";
import src61 from "/src/assets/produst_list_6.1.jpg";

import src11_1 from "/src/assets/detail/WechatIMG373.jpg";
import src12_1 from "/src/assets/detail/WechatIMG371.jpg";
import src21_1 from "/src/assets/detail/WechatIMG376.jpg";
import src22_1 from "/src/assets/detail/WechatIMG378.jpg";
import src31_1 from "/src/assets/detail/WechatIMG375.jpg";
import src41_1 from "/src/assets/detail/WechatIMG377.jpg";
import src42_1 from "/src/assets/detail/WechatIMG377.jpg";
import src51_1 from "/src/assets/detail/WechatIMG372.jpg";
import src61_1 from "/src/assets/detail/WechatIMG374.jpg";



const projectList = [
	[
		{
			name: "项目一",
			desc: "LH20i/25i/27i",
			img: src11,
			detail: src11_1,
		},
		{
			name: "项目二",
			desc: "LH2000i/2500i/2700i",
			img: src12,
			detail: src12_1,
		},
	],
	[
		{
			name: "项目一",
			desc: "YB6500E/YB12500E",
			img: src21,
			detail: src21_1,
		},
		{
			name: "项目二",
			desc: "YB13200E",
			img: src22,
			detail: src22_1,
		}
	],
	[
		{
			name: "项目一",
			desc: "YB3800i",
			img: src31,
			detail: src31_1,
		}
	],
	[
		{
			name: "项目一",
			desc: "YB9800is",
			img: src41,
			detail: src41_1,
		},
		{
			name: "项目二",
			desc: "YB10800is",
			img: src42,
			detail: src42_1,
		}
	],
	[
		{
			name: "项目一",
			desc: "10KW-2000KW",
			img: src51,
			detail: src51_1,
		}
	],
	[
		{
			name: "项目一",
			desc: "YBQG250-25-30",
			img: src61,
			detail: src61_1,
		}
	]
];

let id:any = route.currentRoute.value.query.id;
let desc:any = route.currentRoute.value.query.desc;
let data = projectList[id - 1];
let name:any = ref<any>('');

let detailData:any = ref<any>([]),
	isProjectDetail: any = ref(false);

const projectDetail = (item:any) => {
	detailData.value = item.detail;
	isProjectDetail.value = true;
	name.value = item.desc;
}
const goback = () => {
	isProjectDetail.value = false;
	route.push({ path: '/projectList', query: { id: id, desc: desc } });
}
</script>

<template>
	<div class="common-layout">
		<el-container>
			<!-- <Header/> -->
			<el-main>
				<el-breadcrumb :separator-icon="ArrowRight" style="position: relative; z-index: 1000;">
					<el-breadcrumb-item :to="{ path: '/' }">homePage</el-breadcrumb-item>
					<el-breadcrumb-item @click="goback"><span :style="{cursor: isProjectDetail ? 'pointer' : 'default'}">{{ desc }}</span></el-breadcrumb-item>
					<el-breadcrumb-item v-show="isProjectDetail">{{ name }}</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="project-list" id="Generators">
					<div v-for="(item, index) in data" :key="index" class="project-item" @click="projectDetail(item)" >
						<div v-show="!isProjectDetail" class="project-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
						<div v-show="!isProjectDetail" class="project-info"></div>
						<div v-show="!isProjectDetail" class="project-desc">{{ item.desc }}</div>
						<div v-show="isProjectDetail && name === item.desc" class="project-detail">
							<img :src="item.detail" alt=""></div>
					</div>
				</div>
			</el-main>
			<el-footer>

			</el-footer>
		</el-container>
	</div>
</template>

<style scoped lang="scss">
.project-list {
	max-width: 1200px;
	min-height: 60vh;
	margin: 0 auto;
	padding: 50px 0 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	.project-item {
		width: 30%;
		height: 260px;
		margin-bottom: 50px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
		border-radius: 10px 10px 0 0;
		overflow: hidden;
		.project-img {
			width: 100%;
			height: 180px;
			background-size: cover;
			background-position: center;

		}
		.project-info {
			padding: 10px;
			.project-name {
				font-size: 18px;
				margin-bottom: 10px;
			}
			.project-desc {
				font-size: 14px;
				color: #666;
			}
		}
	}
}
.project-detail {
	position: absolute;
	top: 0;
	left: 50%;
	width: 100%;
	max-width: 1200px;
	min-height: 60vh;
	margin-left: -600px;
	padding: 70px 0 0;
	img {
		width: 100%;
	}
}
</style>
