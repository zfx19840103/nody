<script setup lang="ts">
import { ref, reactive } from "vue";
import { contact } from "../api/content";


const ruleForm = reactive({
  firstname: "1",
	lastname: "",
	email: "",
	message: ""
})

const submitForm = () => {
	console.log(ruleForm);
	contact(ruleForm)
		.then((res: any) => {
			debugger;
			if (res.code === 0) {
			} else {
				console.log("failed");
			}
		})
		.catch((err: any) => {
			console.log(err);
		});
};
</script>

<template>
	<div class="contactus_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>Contact Us</h2>
					<p>If you have any needs, please contact us promptly. Our one-stop service team will provide you with the best service</p>
				</div>
			</el-col>
			<el-col :span="13">
				<div class="contact-info">
					<img src="../assets/contact-img.png" alt="contact-us" />
					<h3>Send Us a Message</h3>
					<p>Please contact us and send us your email</p>
					<el-button type="primary" size="large">start live chat</el-button>
					<p>
						Email:
						<span>bjkpl@bjkpl.cn</span>
					</p>
				</div>
			</el-col>
			<el-col :span="8" :offset="2">
				<div class="contact-form">
					<h2>Contact Form</h2>
					<el-form ref="form" :model="ruleForm" size="large" label-position="top">
						<el-form-item label="First Name">
							<el-input v-model="ruleForm.firstname"></el-input>
						</el-form-item>

						<el-form-item label="Last Name">
							<el-input v-model="ruleForm.lastname"></el-input>
						</el-form-item>

						<el-form-item label="Email">
							<el-input v-model="ruleForm.email"></el-input>
						</el-form-item>

						<el-form-item label="Message">
							<el-input type="textarea" :rows="4" v-model="ruleForm.message"></el-input>
						</el-form-item>

						<el-form-item>
							<el-button type="primary" @click="submitForm">Submit</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.contactus_placeholder {
	background-color: #fff;
	overflow: hidden;
	min-height: 500px;
	padding: 30px 0 0;
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

.contact-info {
	text-align: center;
	img {
		width: 100%;
		max-width: 400px;
		margin-bottom: 20px;
	}
	h3 {
		font-size: 24px;
		color: #333;
		margin-bottom: 10px;
	}
	p {
		font-size: 16px;
		color: #666;
		margin-bottom: 20px;
	}
	.el-button {
		margin-top: 20px;
	}
}

.contact-form {
	border-radius: 10px;

	height: 100%;
	h2 {
		text-align: left;
		font-size: 20px;
		color: #333;
		margin-bottom: 20px;
	}
	.el-form-item {
		margin-bottom: 20px;
	}
	.el-input {
		width: 100%;
	}
}
</style>