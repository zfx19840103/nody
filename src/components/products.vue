<script setup lang="ts">
import { ref } from "vue";
import src1 from "/src/assets/product_loop1.jpg";
import src2 from "/src/assets/product_loop2.jpg";
import src3 from "/src/assets/product_loop3.jpg";
import src4 from "/src/assets/product_loop4.jpg";
import src5 from "/src/assets/product_loop5.jpg";

//引入工具类
// import pubUse from '../utils/pubUse.ts';

const data = [
	{
		id: 1,
		name: "商品1",
		price: 100,
		description: "这是商品1的描述",
		src: src1,
		status: 1
	},
	{
		id: 2,
		name: "商品2",
		price: 200,
		description: "这是商品2的描述",
		src: src2,
		status: 1
	},
	{
		id: 3,
		name: "商品3",
		price: 300,
		description: "这是商品3的描述",
		src: src3,
		status: 1
	},
	{
		id: 4,
		name: "商品4",
		price: 400,
		description: "这是商品4的描述",
		src: src4,
		status: 1
	},
	{
		id: 5,
		name: "商品5",
		price: 500,
		description: "这是商品5的描述",
		src: src5,
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
	margin: 80px auto 0;
	max-width: 1200px;
	height: 600px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	overflow: hidden;
}
.el-carousel__item h3 {
	color: #475669;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
	text-align: center;
}

.el-carousel__item:nth-child(2n) {
	background-color: #f9f9f9;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
.carousel-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	margin: auto;
}
</style>