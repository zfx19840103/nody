<script setup lang="ts">
import { ref } from "vue";
</script>


<template>
	<div class="services_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>Services</h2>
					<p>
						We offer seamless docking
						services to ensure smooth
						project execution. Additionally,
						we provide optional logistics
						and warehousing solutions to
						enhance cargo turnover
						efficiency and reduce
						operational costs for our
						customers.
					</p>
				</div>
			</el-col>
			<el-col :span="24">
				<ul class="services_list">
					<li>
						<div class="icon icon-1">
							<div class="icon-bg">
								<img src="../../src/assets/icon-1.png" alt="" />
							</div>
						</div>
						<h3>MACHINERY</h3>
						<p>
							With deep expertise in the
							processing and manufacturing
							industry and access to a vast range of
							product resources, our company
							excels at identifying and sourcing
							cost-effective solutions tailored to our
							customers' needs.
						</p>
						<div class="btn">Learn More →</div>
					</li>
					<li>
						<div class="icon icon-2">
							<div class="icon-bg">
								<img src="../../src/assets/icon-2.png" alt="" />
							</div>
						</div>
						<h3>
							POWER EQUIPMENT
						</h3>
						<p>
							As a product expert in the energy
							industry, the company has expanded
							its offerings to include greener, more
							sustainable solutions, such as energy
							storage batteries.
						</p>
						<div class="btn">Learn More →</div>
					</li>
					<li>
						<div class="icon icon-3">
							<div class="icon-bg">
								<img src="../../src/assets/icon-3.png" alt="" />
							</div>
						</div>
						<h3>SPARE PARTS</h3>
						<p>
							The company offers a range of
							accessories for generators, helping
							customers upgrade their machines
							for long-term performance and
							reliability.
						</p>
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
	
}

.description {
	text-align: center;
	margin-top: 80px;
}

.description h2 {
	font-size: 36px;
	font-weight: 700;
	color: #000;
	margin: 0 0 20px;
}

.description p {
	width: 80%;
	font-size: 22px;
	color: #000;
	margin: 0 auto 40px;
}

.services_list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
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
	h3 {
		color: #fff;
	}
	.icon {
		.icon-bg {
			-webkit-filter: brightness(1);
			filter: brightness(1);
		}
	}
}

.services_list li .icon {
	width: 120px;
	height: 120px;
	background: url("../src/assets/service-icon-bg.png");
	background-size: cover;
	border-radius: 50%;
	margin: 0 auto 20px;
	.icon-bg {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-filter: brightness(0.55);
		filter: brightness(0.55);
		-webkit-transition: all 0.5s;
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
	line-height: 35px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}
.services_list li {
	p {
		font-size: 18px;
		line-height: 24px;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.btn:hover {
		cursor: pointer;
	}
}
.services_list li:hover .btn {
	animation: arrow-animation 1s infinite alternate;
}
@keyframes arrow-animation {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(10px);
	}
}
</style>