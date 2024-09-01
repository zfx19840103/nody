<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { loginApi } from '../api/login'

const formRef = ref<FormInstance>()

const ruleForm = reactive({
  username: '',
  password: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {

    if (valid) {
			loginApi(ruleForm).then((res: any) => {
				console.log(res)
			}).catch((err: any) => {
				console.log(err)
			})
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
	<el-form
		ref="formRef"
		style="max-width: 600px"
		:model="ruleForm"
		status-icon
		label-width="auto"
		class="demo-ruleForm"
	>
		<el-form-item
			label="Username"
			prop="username"
			:rules="[
        { required: true, message: 'username is required' },
        { min: 1, max: 50, message: 'length should be 1 to 50' },
      ]"
		>
			<el-input v-model="ruleForm.username" />
		</el-form-item>
		<el-form-item
			label="password"
			prop="password"
			:rules="[
        { required: true, message: 'password is required' },
        { min: 6, max: 20, message: 'length should be 6 to 20' },
      ]"
		>
			<el-input v-model="ruleForm.password" type="password" autocomplete="off" />
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
			<el-button @click="resetForm(formRef)">Reset</el-button>
		</el-form-item>
	</el-form>
</template>

<style scoped lang="scss">
.demo-ruleForm {
  margin: 0 auto;
	.el-form-item {
		margin-bottom: 20px;
	}
}
</style>
