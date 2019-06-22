<template>
	<div class="image animated fadeIn" :style="backgroundImage">
		<a href="#" class="capa_hover" @click.prevent="showImage">
			+
		</a>
	</div>
</template>
<style scoped>
	.image { width: 20rem; height: 20rem; margin: 0 0.5rem 4rem; background-size: cover; background-position: center; position: relative;}
	.image .capa_hover { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); display: flex; justify-content: center; align-items: center; color: white; cursor: pointer; opacity: 0; transition: opacity 0.5s linear; font-size: 3rem; }
	.image:hover .capa_hover {opacity: 1;}

	/* Responsive */
	@media (max-width: 1024px) {
		.image { width: 18rem; height: 18rem;}
	}

	@media (max-width: 768px) {
		.image { width: 17rem; height: 17rem;}
	}

	@media (max-width: 414px) {
		.image { width: 17.5rem; height: 17.5rem;}
	}

	@media (max-width: 375px) {
		.image { width: 15rem; height: 15rem;}
	}
</style>
<script>
	export default {
		props: {
			image: {
				type: Object,
				required: true
			},
		},
		computed: {
			backgroundImage() {
				return `backgroundImage: url('${this.image.thumbnail}')`
			}
		},
		methods: {
			showImage() {
				this.$store.dispatch('detailsShow', this.image)
			}
		}
	}
</script>
