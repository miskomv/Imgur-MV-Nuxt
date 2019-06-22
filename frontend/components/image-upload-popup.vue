<template>
	<div class="new_file">
		<div class="popup" v-loading="uploading_items > 0">

			<a href="#" class="close" @click.prevent="uploadHide">X</a>

			<h1>Upload image</h1>

			<p id="dropZone" ref="dropZone" @click.prevent="uploadSelectItems">
				Drag the image here to upload it to the server or click to select it from your computer.
			</p>

			<input type="file" ref="image_file" multiple accept="image/*" @change="uploadItemsSelected">

		</div>
	</div>
</template>
<style scoped>
	.new_file {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.6);display: flex;justify-content: center;align-content: center;align-items: center;}
	.new_file .popup {max-width: 80%;background: white;padding: 2rem;border-radius: 5px;width: 60rem;position: relative;}
	.new_file .popup a.close {position: absolute;right: 1rem;top: 1rem;font-size: 2.2rem;color: #763626;}
	.new_file .popup h1 {border-bottom: 1px solid #2a3132;padding-bottom: 1rem;margin-bottom: 1rem;color: #2a3132;}
	.new_file .popup p {background: #a1b8c3;padding: 8rem;text-align: center;font-size: 2.3rem;color: #2a3132;cursor: pointer;border-radius: 5px;}
	.new_file .popup input[type=file] {display: none;}

	/* Responsive */
	@media (max-width: 414px) {
		.new_file .popup p { font-size: 2rem; padding: 3rem;}
	}
</style>
<script>
	export default {
		props: {
			visible: {
				type: Boolean,
				required: true
			}
		},
		mounted() {
			this.$refs['dropZone'].addEventListener('drop', this.uploadDropItems, true);
			this.$refs['dropZone'].addEventListener('dragover', this.uploadPrevent, true);
		},
		data() {
			return {
				uploading_items: 0,
				errors: false,
				uploading: [],
			}
		},
		methods: {
			uploadHide() {
				this.$emit('onHide');
			},
			uploadSelectItems() {
				this.$refs['image_file'].click();
			},
			uploadItemsSelected() {
				this.uploadFiles(this.$refs['image_file'].files);
			},
			uploadDropItems(event) {

				this.uploadPrevent(event);

				const dt = event.dataTransfer;
				const files = dt.files;
				this.uploadFiles(files);
			},
			uploadPrevent(event) {
				event.preventDefault();
				event.stopPropagation();
			},
			uploadFiles(files) {

				this.uploading = [];
				this.uploading_items = files.length;
				this.errors = false;

				for (let i = 0; i < files.length; i++) {
					this.uploadFile(files[i]);
				}

			},
			uploadFile: function (file) {

				let reader = new FileReader();
				reader.onloadend = e => {

					const date = new Date();
					const img = {id: date.getTime(), thumbnail: e.target.result, src: e.target.result};

					this.$store.dispatch('newImage', img);


					this.uploading_items--;

					if (this.uploading_items === 0) {
						this.uploadHide();
					}
				};

				reader.readAsDataURL(file);
			}
		}
	}
</script>
