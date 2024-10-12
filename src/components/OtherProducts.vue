<script setup lang="ts">
</script>

<template>
	<div class="otherProducts_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>other Products</h2>
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
				<ul class="otherProducts_list">
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/2-31.jpg" />
								</div>
							</div>
							<p>Gasoline portable digital generator</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/2-32.jpg" />
								</div>
							</div>
							<p>General purpose gasoline generator</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/2-33.jpg" />
								</div>
							</div>
							<p>General purpose diesel generator</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/2-34.jpg" />
								</div>
							</div>
							<p>DC charging station for UAV</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/2-35.jpg" />
								</div>
							</div>
							<p>Large-scale diesel power station</p>
						</div>
					</li>
					<li>
						<div class="libg">
							<div class="icon">
								<div class="icon-bg">
									<img src="../assets/2-36.jpg" />
								</div>
							</div>
							<p>Gasoline water pump</p>
						</div>
					</li>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.otherProducts_placeholder {
	overflow: hidden;
	min-height: 500px;
}

.description {
	text-align: center;
}

.description h2 {
	font-size: 32px;
	color: #000;
	background: #fc0;
}

.description p {
	width: 80%;
	margin: 0 auto;
	font-size: 18px;
	color: #fc0;
	margin-bottom: 40px;
}

.otherProducts_list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0;
	padding: 0;
}

.otherProducts_list li {
	width: 30%;
	margin: 40px 0 0;
	list-style: none;
	background-color: #fff;

	.libg {
		position: relative;
		border-radius: 5px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		text-align: center;
		box-sizing: border-box;
		height: 100%;
		h3 {
			margin: 10px auto 0;
		}
		p {
			position: absolute;
			bottom: 0;
			left: 0;
			font-size: 22px;
			color: #000;
			font-weight: 500;
			line-height: 24px;
			margin: 20px auto 0;
			width: 100%;
			box-sizing: border-box;
			display: flex;
			align-items: center; /* 垂直居中 */
			justify-content: center; /* 水平居中 */
			height: 64px;
			opacity: 0.7;
			padding: 0 20px;
			z-index: 1;
			background-color: #f3f3f3;
		}
	}
	.libg:hover {
		h3,
		p {
			// color: rgba(0, 118, 245, 1);
		}
	}
}

.otherProducts_list li .icon {
	width: 100%;
	margin: 0 auto;
	.icon-bg {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		overflow: hidden;
		img {
			max-width: 100%;
			max-height: 100%;
			transition: all 0.3s ease;
		}
	}
	.icon-bg:hover img {
		transform: scale(1.1);
	}
}

.otherProducts_list li h3 {
	font-size: 24px;
	color: #333;
	margin-bottom: 10px;
}
</style>