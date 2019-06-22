<template>
	<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
		<div class="details" v-if="imageDetails.visible" @click.prevent="detailsHide">
			<a href="#" @click.prevent="detailsHide" class="btn_cerrar">
				X
			</a>
			<img src="" :src="imageDetails.src">
		</div>
	</transition>
</template>
<style scoped>
	.details {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.85);z-index: 10;display: flex;justify-content: center;align-items: center; }
	.details .btn_cerrar {position: fixed;top: 1rem;right: 1rem;color: white;font-size: 4rem;cursor: pointer;z-index: 999999; }
	.details img {max-width: 85%;max-height: 80%;}
</style>
<script>
	export default {
		computed: {
			imageDetails() {
				return this.$store.state.imageDetais;
			}
		},
		methods: {
			detailsHide() {
				this.$store.dispatch('detailsHide');
			}
		}
	}
</script>
