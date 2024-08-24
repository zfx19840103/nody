<script setup lang="ts">
import { ref } from "vue";
import Home from "./home.vue";
import Products from "./products.vue";
import Services from "./services.vue";
import Projects from "./projects.vue";
import AboutUs from "./about-us.vue";
import ContactUs from "./contact-us.vue";
import Header from "./header.vue";
import Footer from "./footer.vue";

const activeIndex = ref("home");

</script>

<template>
	<div class="common-layout">
		<el-container>
			<Header :active-index="activeIndex" />
			<el-main>
				<Home id="home" />
				<Products id="products" />
				<Services id="services" />
				<Projects id="projects" />
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
	padding: 0 20px;
}
</style>
