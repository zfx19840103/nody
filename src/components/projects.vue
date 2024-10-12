<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const routerPush = (p0: number) => {
	router.push(`/projectList?id=${p0}#Generators`);
};
</script>

<template>
	<div class="projects_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>Latest Products</h2>
					<p>Our generator can be used in construction, construction, mining, oil fields, medical equipment, data centers, municipal facilities, vehicle modifications, recreational vehicles, agricultural production, spare lighting, etc.</p>
				</div>
			</el-col>
			<el-col :span="24">
				<ul class="projects_list">
					<li @click="routerPush(1)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop1.png"  />
								</div>
							</div>
							<!-- <h3>汽油便携式数码发电机</h3> -->
							<p>Gasoline portable digital generator</p>
						</div>
					</li>
					<li  @click="routerPush(2)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop0.png"  />
								</div>
							</div>
							<!-- <h3>通用汽油发电机</h3> -->
							<p>General purpose gasoline generator</p>
						</div>
					</li>
					<li  @click="routerPush(3)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop5.png"  />
								</div>
							</div>
							<!-- <h3>通用柴油发电机</h3> -->
							<p>Smart Digital Inverter Generator</p>
						</div>
					</li>
					<li  @click="routerPush(4)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop4.png"  />
								</div>
							</div>
							<!-- <h3>无人机直流充电站</h3> -->
							<p>DC charging station for UAV</p>
						</div>
					</li>
					<li  @click="routerPush(5)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop3.png"  />
								</div>
							</div>
							<!-- <h3>大型柴油电站</h3> -->
							<p>Large-scale diesel power station</p>
						</div>
					</li>
					<li  @click="routerPush(6)">
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/loop2.png"  />
								</div>
							</div>
							<!-- <h3>汽油水泵</h3> -->
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
}

.description {
	text-align: center;
}

.description h2 {
	font-size: 32px;
	color: #fc0;
	margin-bottom: 20px;
	// background: #fff;
}

.description p {
	width: 80%;
	margin: 0 auto;
	font-size: 18px;
	color: #fc0;
	margin-bottom: 40px;
}

.projects_list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0;
	padding: 0;
}

.projects_list li {
	width: 30%;
	margin: 40px 0 0;
	list-style: none;
	background-color: #fff;
	.libg {
		position: relative;
		border-radius: 10px 10px 0 0;
		border: 1px solid #e8e8e8;
		text-align: center;
		box-sizing: border-box;
		height: 100%;
		h3 {
			margin: 10px auto 0;
		}
		p {
			font-size: 22px;
			color: #000;
			font-weight: 500;
			margin: 0 auto ;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 20px;
			height: 90px;
			line-height: 1.2;
			background: #f5f5f5;
		}
	}
	.libg:hover {

		h3, p {
			font-weight: 500;
		}
		p {
			background: #fc0;
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
		// border-radius: 10px 10px 0 0;
		overflow: hidden;
		img {
			max-width: 100%;
			max-height: 100%;
			transition: all 0.3s ease;
		}
	}
	.icon-bg:hover {
		img {
			transform: scale(1.1);
		}

}
}

.projects_list li h3 {
	font-size: 24px;
	color: #333;
	margin-bottom: 10px;
}
</style>