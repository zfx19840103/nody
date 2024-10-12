<script setup lang="ts">
import { ref } from "vue";
import Home from "./home.vue";
import Products from "./products.vue";
import Services from "./services.vue";
import Projects from "./projects.vue";
import OtherProducts from "./OtherProducts.vue";
import AboutUs from "./about-us.vue";
import ContactUs from "./contact-us.vue";
import Header from "./header.vue";
import Footer from "./footer.vue";

</script>

<template>
	<div class="common-layout">
		<Header/>
		<Products id="Home" />
		<Home id="Generators" />
		<el-container>
			<el-main>
				<Projects />
				<OtherProducts id="OtherProducts" />
				<Services id="Services" />
				<AboutUs id="AboutUs" />
				<ContactUs id="ContactUs" />
			</el-main>
			<el-footer>
				<Footer />
			</el-footer>
		</el-container>
	</div>
</template>

<style scoped lang="scss">
.el-main {
	max-width: 90%;
	margin: 0 auto;
	padding: 0;
}
.common-layout {
	width: 100%;
	background-color: #000;
}
</style>
