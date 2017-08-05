

export default {
	data() {
		return {
			shown: false
		};
	},
	mounted() {
		document.addEventListener('click', this.hide, true);
	},
	destroyed() {
		document.removeEventListener('click', this.hide, true);
	},
	methods: {

		hide() {
			this.shown = false;
		},
		toggle() {
			this.shown = !this.shown;
		}
	}
};