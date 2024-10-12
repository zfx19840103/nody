<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

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

const projectList = [
	[
		{
			name: "项目一",
			desc: "YB20i/25i/27i",
			img: src11
		},
		{
			name: "项目二",
			desc: "YB2000i/2500i/2700i",
			img: src12
		},
	],
	[
		{
			name: "项目一",
			desc: "YB6500E/YB12500E",
			img: src21
		},
		{
			name: "项目二",
			desc: "YB13200E",
			img: src22
		}
	],
	[
		{
			name: "项目一",
			desc: "YB3800i",
			img: src31
		}
	],
	[
		{
			name: "项目一",
			desc: "YB9800is",
			img: src41
		},
		{
			name: "项目二",
			desc: "YB10800is",
			img: src42
		}
	],
	[
		{
			name: "项目一",
			desc: "20-1000KW",
			img: src51
		}
	],
	[
		{
			name: "项目一",
			desc: "YBQG250-25-30",
			img: src61
		}
	]
];

let id:any = route.currentRoute.value.query.id;

let data = projectList[id - 1];
</script>

<template>
	<div class="common-layout">
		<el-container>
			<Header/>
			<el-main>
				<div class="project-list" id="Generators">
					<div v-for="(item, index) in data" :key="index" class="project-item">
						<div class="project-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
						<div class="project-info"></div>
						<!-- <div class="project-name">{{ item.name }}</div> -->
						<div class="project-desc">{{ item.desc }}</div>
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
</style>
