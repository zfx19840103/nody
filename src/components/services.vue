<script setup lang="ts">
import { ref } from "vue";
</script>


<template>
	<div class="services_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>Our Services</h2>
					<p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur</p>
				</div>
			</el-col>
			<el-col :span="24">
				<ul class="services_list">
					<li>
						<div class="icon">
							<div class="icon-bg">
								<img src="../../src/assets/icon-1.png" alt="">
							</div>
						</div>
						<h3>Service 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>	
						<div class="btn">Learn More →</div>
					</li>
					<li>
						<div class="icon">
							<div class="icon-bg">
								<img src="../../src/assets/icon-1.png" alt="">
							</div>
						</div>
						<h3>Service 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>	
						<div class="btn">Learn More →</div>
					</li>
					<li>
						<div class="icon">
							<div class="icon-bg">
								<img src="../../src/assets/icon-1.png" alt="">
							</div>
						</div>
						<h3>Service 1</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>	
						<div class="btn">Learn More →</div>
					</li>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.services_placeholder {
	overflow: hidden;
	min-height: 500px;
	margin: 30px 0 0;
	padding-top: 30px;
}

.description {
	text-align: left;
	margin-top: 50px;
}

.description h2 {
	font-size: 36px;
	font-weight: 700;
	color: #000;
	margin-bottom: 20px;
}

.description p {
	width: 80%;
	font-size: 22px;
	color: #000;
	margin-bottom: 40px;
}

.services_list {
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	margin: 0;
	padding: 0;
}

.services_list li {
	width: 30%;
	margin: 20px auto;
	list-style: none;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	padding: 20px;
	text-align: center;
	box-sizing: border-box;
}
.services_list li:hover {
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	background: blue;
	color: #fff;
	h3{
		color: #fff;
	}
}

.services_list li .icon {
	width: 120px;
	height: 120px;
	background: url('../src/assets/service-icon-bg.png');
	background-size: cover;	
	border-radius: 50%;
	margin: 0 auto 20px;
	.icon-bg {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 50%;
			height: 50%;
			object-fit: cover;
		}
	}
}


.services_list li h3 {	
	font-size: 24px;
	color: #333;
	margin-bottom: 10px;
}	
</style>