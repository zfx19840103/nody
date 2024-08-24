<script setup lang="ts">
import { ref } from "vue";
import src from '/src/assets/about-us.png';
import { Shop } from '@element-plus/icons-vue';

</script>

<template>
	<div class="about_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>About Us</h2>
					<p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur</p>
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
						<li>
							<el-row>
								<el-col :span="8">
									<img src="../assets/14670.jpg" alt="about us mission" />
								</el-col>
								<el-col :span="15" :offset="1">
									<h3>Our Mission about us</h3>
									<p>Sed ut perspiciatis unde omnis	atis unde...	</p>
									<p><el-icon><Shop /></el-icon>check the mission</p>
								</el-col>
							</el-row>
						</li>
						<li>
							<el-row>
								<el-col :span="8">
									<img src="../assets/14676.jpg" alt="about us mission" />
								</el-col>
								<el-col :span="15" :offset="1">
									<h3>Our Mission perspiciatis</h3>
									<p>Sed ut perspiciatis unde omnis	atis unde...	</p>
									<p><el-icon><Shop /></el-icon>check the mission</p>
								</el-col>
							</el-row>
						</li>
						<li>
							<el-row>
								<el-col :span="8">
									<img src="../assets/project3.jpg" alt="about us mission" />
								</el-col>
								<el-col :span="15" :offset="1">
									<h3>Mission</h3>
									<p> perspiciatis unde omnis	atis unde...	</p>
									<p><el-icon><Shop /></el-icon>check the mission</p>
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
	background-color: #f5f5f5;
	min-height: 500px;
	.description {
		text-align: center;
		h2 {
			font-size: 24px;
			margin-bottom: 10px;
		}
		p {
			width: 60%;
			font-size: 16px;
			text-align: center;
			margin: 0 auto 20px;
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
				img {
					max-width: 100%;
					max-height: 100%;
				}
				h3 {
					font-size: 18px;
					margin: 0 0 10px;
				}
				p {
					font-size: 16px;
					margin-bottom: 10px;
				}
			}
		}
		img.about-us-image {
			max-width: 100%;
			height: auto;
		}
	}
}
</style>