<script setup lang="ts">
import { ref } from 'vue'


let textarea = ref(''), responseData = ref('');

let applyRefundFunc = () => {
	
let message = textarea.value;

 var apiUrl = 'https://api.moonshot.cn/v1/chat/completions';
var requestData = {
    model: "moonshot-v1-8k",
    messages: [
      {
        role: "system", content: message}
    ],
    temperature: 0.3
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'sk-6vN2DsoaK3i2htXdYd7pSa8zaMXkmOkPUN1rmr9wrFj8MTv6'
    },
    body: JSON.stringify(requestData)
  }).then(response => response.json()).then(data => {
      let _data = data.choices[0].message.content;
      _data = _data.replaceAll('\n', '<br>')
      responseData.value = '';
      responseData.value = _data;
    })
    .catch(error => {
      console.error('发生错误:', error);
    });
}

</script>

<template>
      <p v-html="responseData" class="vhtml"></p>
  <el-row >
    <el-col :span="24">
    </el-col>
    <el-col :span="24">
      <el-input style="width:100%;" v-model="textarea" :rows="5" type="textarea" placeholder="Please input" />
    </el-col>
  </el-row>

  <el-button @Click="applyRefundFunc">Click Me</el-button>
  
</template>

<style scoped lang="scss">
.vhtml {
  text-align: left;
}
</style>
