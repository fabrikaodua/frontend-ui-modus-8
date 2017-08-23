
import Vue from 'vue';
import packageManifest from '../../package.json';
import Body from '../../src/body.vue';
import router from '../../src/router';

jest.mock('vue2-google-maps');

describe(packageManifest.name, () => {
	it('modules tree is correct', () => {
		expect(Body).toBeTruthy();
		expect(Body).not.toEqual({});
		expect(router).toBeTruthy();
		expect(router).not.toEqual({});
	});

	it('body can be mounted', () => {
		const body = new Vue(Body).$mount();
		expect(body).toBeInstanceOf(Vue);
	});
});
