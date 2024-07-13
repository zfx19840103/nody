<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { applyRefund, adminLoginApi } from "../api/home";

// import Area from "./area.vue";
const greeting = 'Hello World!';

// const name = ref('父亲名字');
// defineProps<{ msg: string }>()
let msg =ref('还没听到秘密')

// const tingmimi = function(message:any){
// 	console.log(msg.value)
//     msg.value = message
// 	console.log(msg)
// }
 
const store = useStore()
 
const a = store.state.data.a
 
// console.log('import', import.meta.env)

let applyRefundFunc = () => {
	
	let params: any = {a:12345};

	applyRefund(params).then(res => {
		console.log(res)
	});
  adminLoginApi(params).then(res => {
    console.log(res)
  })
}

</script>

<template>
  
<el-button @Click="applyRefundFunc">Click Me</el-button>
  <div class="card">
  index {{ a }}{{ greeting }}
  </div>
    <p>我听到了子组件的秘密 : {{ msg }}</p>
	<!-- <Area  @mimi="tingmimi" :name="name" age="12">asjdfkljafsd</Area> -->
  
</template>

<style scoped lang="scss">
$color: red;
.card {
  color: #888;
  a {
    color: $color;
  }
}
</style>
