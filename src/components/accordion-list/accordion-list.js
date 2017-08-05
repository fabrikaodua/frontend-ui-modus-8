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
				if (this.expandedItems[0] === true) {
					this.expandedItems.splice(0, 3, false, false, false);
				} else {
					this.expandedItems.splice(0, 3, true, false, false);
				}
			}
			if (element === 1) {
				if (this.expandedItems[1] === true) {
					this.expandedItems.splice(0, 3, false, false, false);
				} else {
					this.expandedItems.splice(0, 3, false, true, false);
				}
			}
			if (element === 2) {
				if (this.expandedItems[2] === true) {
					this.expandedItems.splice(0, 3, false, false, false);
				} else {
					this.expandedItems.splice(0, 3, false, false, true);
				}
			}
		}
	}
};
