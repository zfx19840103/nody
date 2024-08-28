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
		<Header :active-index="activeIndex" />
		<Home id="home" />
		<el-container>
			<el-main>
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
	max-width: 1200px;
	margin: 0 auto;
	padding: 0;
}
.common-layout {
	width: 100%;
}
</style>
