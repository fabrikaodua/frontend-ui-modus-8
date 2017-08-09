export default {
	data() {
		return {
			show: true
		};
	},
	methods: {
		showSubMenu() {
			document.querySelector('.main-menu .sub-menu').classList.toggle('shown');
		}
	}
};