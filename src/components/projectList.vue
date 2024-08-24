<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import Header from "./header.vue";
import Footer from "./footer.vue";
import src1 from "/src/assets/14670.jpg";
import src2 from "/src/assets/loop1.png";
import src3 from "/src/assets/loop2.png";
import src4 from "/src/assets/loop3.png";
import src5 from "/src/assets/loop5.png";
const activeIndex = ref("projects");
const components = {
	Header,
	Footer,
};
const changeActiveIndex = (index: string) => {
	activeIndex.value = index;
	router.push('/index#' + index);
	
};
const projectList = [
	{
		name: "项目1",
		desc: "这是项目1的描述",
		img: src1,
		link: "https://www.baidu.com"
	},
	{
		name: "项目2",
		desc: "这是项目2的描述",
		img: src2,
		link: "https://www.baidu.com"
	},
	{
		name: "项目3",
		desc: "这是项目3的描述",
		img: src3,	
		link: "https://www.baidu.com"
	},
	{
		name: "项目4",
		desc: "这是项目4的描述",
		img: src4,
		link: "https://www.baidu.com"
	},
	{
		name: "项目5",
		desc: "这是项目5的描述",
		img: src5,
		link: "https://www.baidu.com"
	},
	{
		name: "项目6",
		desc: "这是项目6的描述",
		img: src1,
		link: "https://www.baidu.com"
	},
	{
		name: "项目7",
		desc: "这是项目7的描述",
		img: src2,
		link: "https://www.baidu.com"
	},
	{
		name: "项目8",
		desc: "这是项目8的描述",
		img: src3,
		link: "https://www.baidu.com"
	},
	{
		name: "项目9",
		desc: "这是项目9的描述",
		img: src4,
		link: "https://www.baidu.com"
	},
];
</script>

<template>
	<div class="common-layout">
		<el-container>
			<Header :active-index="activeIndex" @childEvent="changeActiveIndex" />
			<el-main>
				<div class="project-list">
					<div v-for="(item, index) in projectList" :key="index" class="project-item">
						<div class="project-img" :style="{ backgroundImage: `url(${item.img})` }"></div>
						<div class="project-info"></div>
						<div class="project-name">{{ item.name }}</div>
						<div class="project-desc">{{ item.desc }}</div>
					</div>
				</div>
			</el-main>
			<el-footer>
				<Footer />
			</el-footer>
		</el-container>
	</div>
</template>

<style scoped lang="scss">
.project-list {	
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;	

	.project-item {
		width: 33.33%;
		margin-bottom: 50px;
		padding: 0 30px;
		box-sizing: border-box;
		.project-img {
			width: 100%;
			height: 200px;
			background-size: cover;
			background-position: center;
			border-radius: 10px;
			cursor: pointer;
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
