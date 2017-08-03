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
			}
		}
	}
};

