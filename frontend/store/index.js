export const state = () => ({
	loading: false,
	imageDetais: {
		visible: false,
		src: ''
	},

	images: [
		{id: 1, thumbnail: 'https://miviaje.com/wp-content/uploads/2017/12/landmannalaugar-en-islandia.jpg', src: 'https://miviaje.com/wp-content/uploads/2017/12/landmannalaugar-en-islandia.jpg'},
		{id: 2, thumbnail: 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg', src: 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg'},
		{id: 3, thumbnail: 'https://i.ytimg.com/vi/hW9PUzl7j9w/maxresdefault.jpg', src: 'https://i.ytimg.com/vi/hW9PUzl7j9w/maxresdefault.jpg'}
	],
	uploadedImages: []
});

export const mutations = {

	/* Loading */
	loadingShow(state) {
		state.loading = true;
	},
	loadingHide(state) {
		state.loading = false;
	},

	/* Image Details */
	detailsShow(state, {src}) {
		state.imageDetais.src = src;
		state.imageDetais.visible = true;
	},
	detailsHide(state) {
		state.imageDetais.visible = false;
	},

	/* Add new image */
	newImage(state, image) {
		state.images = [image, ...state.images];
		state.uploadedImages = [image, ...state.uploadedImages];
	}
};

export const actions = {

	/* Loading */
	loadingShow(context) {
		context.commit('loadingShow');
	},
	loadingHide(context) {
		context.commit('loadingHide');
	},

	/* Image Details */
	detailsShow(context, imageData) {
		context.commit('detailsShow', imageData);
	},
	detailsHide(context) {
		context.commit('detailsHide');
	},

	/* Add new image */
	newImage(context, image) {
		context.commit('newImage', image);
	}


}
