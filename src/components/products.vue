<script setup lang="ts">
import { ref } from "vue";
const data = [
	{
		id: 1,
		name: "商品1",
		price: 100,
		description: "这是商品1的描述",
		src: "/src/assets/14676.jpg",
		status: 1
	},
	{
		id: 2,
		name: "商品2",
		price: 200,
		description: "这是商品2的描述",
		src: "/src/assets/14684.jpg",
		status: 1
	},
	{
		id: 3,
		name: "商品3",
		price: 300,
		description: "这是商品3的描述",
		src: "/src/assets/project3.jpg",
		status: 1
	}
];
</script>

<template>
	<div class="products">
		<el-carousel :interval="5000" arrow="always" height="600px">
			<el-carousel-item v-for="item in data" :key="item.id">
				<img class="carousel-img" :src="item.src" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>
  
<style scoped>
.products {
	padding-top: 80px;
  margin: -50px 0 0;
	width: 100%;
	height: 600px;
}
.el-carousel__item h3 {
	color: #475669;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
	text-align: center;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
.carousel-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>