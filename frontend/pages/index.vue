<template>
	<div class="list">

		<h1>Home</h1>

		<ImageElement v-for="image in list" :image="image" :key="image.id"></ImageElement>
		<div class="image hidden" v-for="i in 8"></div>

	</div>
</template>
<script>
	import ImageElement from '~/components/image-element';

	export default {
		components: {ImageElement},
		head: {
			title: 'Imgur MV Nuxt',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Imgur MV Nuxt'
				}
			]
		},
		computed: {
			list() {
				return this.$store.state.images;
			}
		},
	}
</script>
