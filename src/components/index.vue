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

const activeIndex = ref("Home");

</script>

<template>
	<div class="common-layout">
		<Header :active-index="activeIndex" />
		<Home id="Home" />
		<Products id="Generators" />
		<el-container>
			<el-main>
				<Projects />
				<OtherProducts id="OtherProducts" />
				<Services id="services" />
				<AboutUs id="aboutUs" />
				<ContactUs id="contactUs" />
			</el-main>
			<el-footer>
				<Footer />
			</el-footer>
		</el-container>
	</div>
</template>

<style scoped lang="scss">
.el-main {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0;
}
.common-layout {
	width: 100%;
}
</style>
