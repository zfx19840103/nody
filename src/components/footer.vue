<script setup lang="ts">
</script>

<template>
	<div class="footer-content">
		<el-row>
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
		</el-row>
	</div>
</template>
<style scoped lang="scss">
.footer-content {
	background-color: #292d32;
	padding: 20px 0 60px;
	text-align: center;
	.footer-text-left {
		text-align: left;
	}
	.footer-text-right {
		text-align: right;
	}
	p {
		color: #fff;
		font-size: 20px;
		margin: 30px auto;
		line-height: 40px;
	}
	a {
		color: #fff;
		margin-right: 50px;
		&:hover {
			color: #f5f5f5;
		}
		&:last-child {
			margin-right: 0;
		}
	}
}
</style>

