<template>
	<div class="default_template">

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
	}
</script>
