<script setup lang="ts">
import { contact } from "../api/content";
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
	firstname: "",
	lastname: "",
	email: "",
	message: ""
});
const rules = reactive<FormRules>({
	firstname: [
		{
			required: true,
			trigger: "blur"
		},
		{
			min: 1,
			max: 20,
			message: "Length should be 1 to 20",
			trigger: "blur",

		}
	],
	lastname: [
		{
			required: true,
			trigger: "blur"
		},
		{
			min: 1,
			max: 20,
			message: "Length should be 1 to 20",
			trigger: "blur",

		}
	],
	email: [
		{
			required: true,
			trigger: "blur"
		},
		{
			type: "email",
			message: "Please enter a valid email",
			trigger: "blur",

		}
	],
	message: [
		{
			required: true,
			trigger: "blur"
		},
		{
			min: 1,
			max: 500,
			message: "Length should be 1 to 500",
			trigger: "blur",

		}
	]
});
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      contact(ruleForm)
				.then((res: any) => {
					if (res.code === 0) {
						debugger;
					} else {
						console.log("failed");
					}
				})
				.catch((err: any) => {
					console.log(err);
				});
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<template>
	<div class="contactus_placeholder">
		<el-row>
			<el-col :span="24">
				<div class="description">
					<h2>Contact Us</h2>
					<p>If you have any inquiries, please contact us. Our one-stop service team will provide you with the best service</p>
				</div>
			</el-col>
			<el-col :span="13">
				<div class="contact-info">
					<img src="../assets/contact-img.png" alt="contact-us" />
					<h3>Send Us a Message</h3>
					<p>Please contact us and send us your email</p>
					<!-- <el-button type="primary" size="large">start live chat</el-button> -->
					<p>
						Email:
						<span>bjkpl@bjkpl.cn</span>
					</p>
				</div>
			</el-col>
			<el-col :span="8" :offset="1">
				<div class="contact-form">
					<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" size="large" label-position="top">
						<el-form-item label="First Name" prop="firstname">
							<el-input v-model="ruleForm.firstname" placeholder="Please enter your First Name"></el-input>
						</el-form-item>

						<el-form-item label="Last Name" prop="lastname">
							<el-input v-model="ruleForm.lastname" placeholder="Please enter your Last Name"></el-input>
						</el-form-item>

						<el-form-item label="Email" prop="email">
							<el-input v-model="ruleForm.email" placeholder="Please enter your Email"></el-input>
						</el-form-item>

						<el-form-item label="Message" prop="message">
							<el-input
								type="textarea"
								:rows="4"
								v-model="ruleForm.message"
								placeholder="Please enter your Message"
							></el-input>
						</el-form-item>

						<el-form-item>
							<el-button type="primary" @click="submitForm(ruleFormRef)">submit</el-button>
							<el-button @click="resetForm(ruleFormRef)">Reset</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<style scoped lang="scss">
.contactus_placeholder {
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

.contact-info {
	text-align: center;
	img {
		width: 100%;
		max-width: 400px;
		margin-bottom: 20px;
	}
	h3 {
		font-size: 24px;
		color: #fc0;
		margin-bottom: 10px;
	}
	p {
		font-size: 16px;
		color: #fc0;
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
		color: #fc0;
		margin-bottom: 20px;
	}
	.el-form-item {
		margin-bottom: 20px;
	}
	.el-input {
		width: 100%;
	}
	::v-deep .el-form--large.el-form--label-top .el-form-item .el-form-item__label {
		color: #fc0;
    font-weight: 700;
	}
}
</style>