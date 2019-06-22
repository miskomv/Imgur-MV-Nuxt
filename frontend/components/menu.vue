<template>
	<div class="menu">

		<nuxt-link to="/">
			<img src="@/assets/images/logo-web.png">
		</nuxt-link>

		<ul>
			<li>
				<nuxt-link to="/upload">
					Upload
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.menu {
		background-color: #2a3132;
		padding: 1rem 3rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
		align-items: center;
	}
	.menu img {
		width: 10rem;
	}

	.menu ul {
		list-style: none;
	}

	.menu ul li a {
		background: #a1b8c3;
		padding: 1rem;
		border-radius: 5px;
		text-transform: uppercase;
		color: #2a3132;
		text-decoration: none;
		font-weight: bold;
	}
</style>
<script>export default {}</script>
