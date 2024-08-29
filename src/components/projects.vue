<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const routerPush = (p0: number) => {
	router.push("/projectList?id=" + p0);
};
</script>


<template>
	<div class="projects_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>Our Latest Project</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				</div>
			</el-col>
			<el-col :span="24">
				<ul class="projects_list">
					<li @click="routerPush(1)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop0.png"  />
								</div>
							</div>
							<h3>汽油便携式数码发电机</h3>
							<p>Gasoline portable digital generator</p>
						</div>
					</li>
					<li  @click="routerPush(2)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop1.png"  />
								</div>
							</div>
							<h3>通用汽油发电机</h3>
							<p>General purpose gasoline generator</p>
						</div>
					</li>
					<li  @click="routerPush(3)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop2.png"  />
								</div>
							</div>
							<h3>通用柴油发电机</h3>
							<p>General purpose diesel generator</p>
						</div>
					</li>
					<li  @click="routerPush(4)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop3.png"  />
								</div>
							</div>
							<h3>无人机直流充电站</h3>
							<p>DC charging station for UAV</p>
						</div>
					</li>
					<li  @click="routerPush(5)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop4.png"  />
								</div>
							</div>
							<h3>大型柴油电站</h3>
							<p>Large-scale diesel power station</p>
						</div>
					</li>
					<li  @click="routerPush(6)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop5.png"  />
								</div>
							</div>
							<h3>汽油水泵</h3>
							<p>Gasoline water pump</p>
						</div>
					</li>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.projects_placeholder {
	overflow: hidden;
	min-height: 500px;
	padding-top: 30px;
}

.description {
	text-align: center;
	margin-top: 50px;
}

.description h2 {
	font-size: 36px;
	color: #000;
	margin-bottom: 20px;
}

.description p {
	width: 80%;
	margin: 0 auto;
	font-size: 22px;
	color: #333;
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
			height: 260px;
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