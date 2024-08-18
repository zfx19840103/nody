<script setup lang="ts">
import { ref } from "vue";
</script>


<template>
	<div class="projects_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>Our Latest Project</h2>
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</el-col>
			<el-col :span="24">
				<ul class="projects_list">
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/project1.jpg" alt="">
								</div>
							</div>
							<h3>Project Name 1</h3>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/project2.jpg" alt="">
								</div>
							</div>
							<h3>Project Name 1</h3>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/project3.jpg" alt="">
								</div>
							</div>
							<h3>Project Name 1</h3>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/project1.jpg" alt="">
								</div>
							</div>
							<h3>Project Name 1</h3>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/project2.jpg" alt="">
								</div>
							</div>
							<h3>Project Name 1</h3>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/project3.jpg" alt="">
								</div>
							</div>
							<h3>Project Name 1</h3>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</li>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.projects_placeholder {
	background-color: #f9f9f9;
	overflow: hidden;
	min-height: 500px;
	padding-top: 30px;
}

.description {
	text-align: center;
	margin-top: 50px;
}

.description h2 {
	font-size: 28px;
	color: #333;
	margin-bottom: 20px;
}

.description p {
	width: 60%;
	margin: 0 auto;
	font-size: 18px;
	color: #666;
	margin-bottom: 40px;
}

.projects_list {
	display: flex;
	flex-wrap: wrap;
	justify-content: left;
	margin: 0;
	padding: 0;
}

.projects_list li {
	width: 30%;
	margin: 20px auto;
	list-style: none;
	background-color: #fff;
	height: 350px;
	.libg {
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		text-align: center;
		box-sizing: border-box;
		height: 100%;
		h3 {
			margin: 10px auto 0;
		}
		p {
			font-size: 16px;
			color: #666;
			margin: 0 auto;
		}
	}
}

.projects_list li .icon {
	width: 100%;
	margin: 0 auto;
	.icon-bg {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			height: 100%;
			border-radius: 10px;
			object-fit: cover;
		}
	}
}


.projects_list li h3 {	
	font-size: 24px;
	color: #333;
	margin-bottom: 10px;
}	
</style>