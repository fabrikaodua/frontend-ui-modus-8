export default {
	props: ['expanded'],
	computed: {
		opened: {
			get() {
				if (this.expanded !== undefined) {
					return Boolean(this.expanded);
				}
				return this.openedState;
			},
			set(value) {
				this.openedState = value;
			}
		}
	},
	data() {
		return {
			openedState: false
		};
	},
	methods: {
		toggle(event) {
			this.opened = !this.opened;
			this.$emit('click', event);
			if (this.opened) {
				this.$emit('expand');
			} else {
				this.$emit('collapse');
			}
		}
	}
};
