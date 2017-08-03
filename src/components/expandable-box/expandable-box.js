export default {
	props: {
		expanded: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		toggle() {
			this.expanded = !this.expanded;
		}
	}
};
