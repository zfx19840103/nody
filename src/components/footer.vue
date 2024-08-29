<script setup lang="ts">
</script>

<template>
	<div class="footer-content">
		<p>© 2022 NODY. All rights reserved.</p>
		<p>
			<a href="#">Privacy Policy</a>
			<a href="#">Terms of Service</a>
			<a href="#">Contact Us</a>
			<a href="#">FAQ</a>
			<a href="#">Sitemap</a>
			<a href="#">RSS</a>
			<a href="#">Feedback</a>
			<a href="#">Help</a>
			<a href="#">About Us</a>
		</p>
	</div>
</template>
<style scoped lang="scss">
.footer-content {
	background-color: #292d32;
	padding: 30px 0 80px;
	text-align: center;
	p {
		color: #fff;
		font-size: 20px;
		margin: 30px auto;
	}
	a {
		color: #fff;
		margin-right: 50px;
		&:hover {
			color: #f5f5f5;
		}
		&:last-child {
			margin-right: 0;
		}
	}
}

</style>

