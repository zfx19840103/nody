<script setup lang="ts">
import { ref } from "vue";
import src1 from "/src/assets/aboutUs_icon1.jpg";
import src2 from "/src/assets/aboutUs_icon2.jpg";
import src3 from "/src/assets/aboutUs_icon3.jpg";

let src = ref(src1);
const changeImg = (e: any) => {
	src.value = e;
}
</script>

<template>
	<div class="about_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>About Us</h2>
					<p>
						Founded in 2009, Beijing KPL Technology Co., LTD has grown
						into a leading provider of mechanical equipment. Annually,
						we manage the operation of over 1,000 machines and oversee
						approximately 130 ongoing projects.
					</p>
					<p>
						Our mission is to deliver top-quality mechanical equipment
						that meets the diverse needs of our clients across various
						industries. Our expert team is dedicated to providing
						professional guidance and ensuring an exceptional customer
						experience.
					</p>
				</div>
			</el-col>
			<el-col :span="13">
				<div class="block">
					<el-image :src="src">
						<template #placeholder>
							<div class="image-slot">
								Loading
								<span class="dot">...</span>
							</div>
						</template>
					</el-image>
				</div>
			</el-col>
			<el-col :span="10" :offset="1">
				<div class="block">
					<ul>
						<li @click="changeImg(src1)">
							<el-row>
								<el-col class="img-col" :span="8">
									<img src="../assets/aboutUs_icon1.jpg" alt="about us mission" />
								</el-col>
								<el-col class="text-col" :span="15" :offset="1">
									<p>
										We provide worldwide shipping services, catering to a diverse clientele across
										multiple countries. Our global reach ensures that customers from all corners of
										the globe receive prompt and efficient delivery, no matter where they are located.
									</p>
								</el-col>
							</el-row>
						</li>
						<li @click="changeImg(src2)">
							<el-row>
								<el-col class="img-col" :span="8">
									<img src="../assets/aboutUs_icon2.jpg" alt="about us mission" />
								</el-col>
								<el-col class="text-col" :span="15" :offset="1">
									<p>
										We have extensively developed and refined our presence in the European market,
										where diverse opportunities and flourishing markets are continuously emerging.
									</p>
								</el-col>
							</el-row>
						</li>
						<li @click="changeImg(src3)">
							<el-row>
								<el-col class="img-col" :span="8">
									<img src="../assets/aboutUs_icon3.jpg" alt="about us mission" />
								</el-col>
								<el-col class="text-col" :span="15" :offset="1">
									<p>ENDORSEMENT FROM WELL-KNOWN CUSTOMERS</p>
								</el-col>
							</el-row>
						</li>
					</ul>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.about_placeholder {
	padding: 60px 0 0;
	min-height: 500px;
	.description {
		text-align: left;
		h2 {
			font-size: 36px;
			margin-bottom: 10px;
			color: #000;
		}
		p {
			width: 80%;
			font-size: 22px;
			text-align: left;
			margin-bottom: 20px;
		}
	}
	.block {
		margin-top: 20px;
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
			overflow: hidden;
			li {
				text-align: left;
				margin: 20px auto 30px;
				height: 125px;
				overflow: hidden;
				.el-row {
					height: 100%;
					.img-col {
						margin: auto;
					}
					img {
						max-width: 100%;
						max-height: 100%;
					}
					.text-col {
						display: flex;
						justify-content: center; /* 水平居中 */
						align-items: center; /* 垂直居中 */
					}
					p {
						font-size: 16px;
						margin: 0;
						display: -webkit-box;
						-webkit-line-clamp: 4;
						-webkit-box-orient: vertical;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
			}
			li:hover {
				p {
					color: var(--el-color-primary);
				}
			}
		}
		img.about-us-image {
			max-width: 100%;
			height: auto;
		}
	}
}
.el-image {
	height: 480px;
	border: 1px solid #f2f2f2;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	img {
		height: 100%;
	}
}
</style>