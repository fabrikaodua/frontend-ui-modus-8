import ExpandableBox from '../expandable-box/expandable-box.vue';

export default {
	components: { ExpandableBox },
	data() {
		return {
			expandedItems: [false, false, false]
		};
	},
	methods: {
		expand(element) {
			if (element === 0) {
				this.expandedItems = [true, false, false];
			} else if (element === 1) {
				this.expandedItems = [false, true, false];
			} else if (element === 2) {
				this.expandedItems = [false, false, true];
			}
		}
	}
};
