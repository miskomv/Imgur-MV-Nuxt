<template>
	<div class="list">

		<h1>
			<nuxt-link to="/">Home</nuxt-link>
			» Your uploaded files
		</h1>

		<ImageElement v-for="image in list" :image="image" :key="image.id"></ImageElement>
		<div class="image hidden" v-for="i in 8"></div>

		<!-- Image Upload Popup -->
		<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
			<ImageUpload v-if="upload_visible" @onHide="uploadHide"></ImageUpload>
		</transition>

	</div>
</template>
<script>
	import ImageElement from '~/components/image-element';
	import ImageUpload from '~/components/image-upload-popup';

	export default {
		components: {ImageElement, ImageUpload},
		head: {
			title: 'Upload images - Imgur MV Nuxt',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Upload images - Imgur MV Nuxt'
				}
			]
		},
		computed: {
			list() {
				return this.$store.state.uploadedImages;
			}
		},
		data() {
			return {
				upload_visible: false,
			}
		},
		mounted() {
			setTimeout(() => this.uploadShow(), 500);
		},
		methods: {

			/* Upload popup */
			uploadShow() {
				this.upload_visible = true;
			},
			uploadHide() {
				this.upload_visible = false;
			},
		}
	}
</script>
