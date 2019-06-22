<template>
	<div class="default_template" v-loading="loading">

		<!-- Menu -->
		<Menu></Menu>

		<!-- Section -->
		<nuxt/>

		<!-- Image Details Popup -->
		<ImageDetails></ImageDetails>

	</div>
</template>
<script>
	import Menu from '~/components/menu';
	import ImageDetails from '~/components/image-details-popup';

	export default {
		components: {Menu, ImageDetails},
		computed: {
			loading() {
				return this.$store.state.loading;
			}
		}
	}
</script>
