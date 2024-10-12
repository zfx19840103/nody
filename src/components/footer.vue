<script setup lang="ts">
</script>

<template>
	<div class="footer-content">
		<!-- <el-row>
			<el-col :span="6" :offset="2">
				<p class="footer-text-left">
					bjkpl@bjkpl.cn
					<br />www.bjkpl168.com
				</p>
			</el-col>
			<el-col :span="8" :offset="6">
				<p class="footer-text-right">
					1001 Guanghua Building, No. 8
					<br />Guanghua Road, Chaoyang District, Beijing
				</p>
			</el-col>
		</el-row> -->
		<div class="footer-links">
			<span>bjkpl@bjkpl.cn</span>
			<span>www.bjkpl168.com</span>
			<span>1001 Guanghua Building, No. 8 Guanghua Road, Chaoyang District, Beijing</span>
		</div>
	</div>
</template>
<style scoped lang="scss">
.footer-content {
	margin-top: 50px;
	background-color: #333;
	text-align: center;
	padding: 5px 0;
	.footer-links {
		max-width: 90%;
		margin: 40px auto 50px;
		// display: flex;
		// align-items: center;
		// justify-content: center;
		text-align: left;
		span {
			display: block;
			width: 100%;
			color: #fff;
			font-size: 16px;
			margin: 0 10px;
			padding-left: 100px;
			// height: 40px;
			line-height: 35px;
			box-sizing: border-box;
		}
	}
	// .footer-text-left {
	// 	text-align: left;
	// }
	// .footer-text-right {
	// 	text-align: right;
	// }
	// p {
	// 	color: #fff;
	// 	font-size: 20px;
	// 	margin: 30px auto;
	// 	line-height: 40px;
	// }
	// a {
	// 	color: #fff;
	// 	margin-right: 50px;
	// 	&:hover {
	// 		color: #f5f5f5;
	// 	}
	// 	&:last-child {
	// 		margin-right: 0;
	// 	}
	// }
}
</style>

