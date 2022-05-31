import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/nav-mike.github.io' : '',
			assets: process.env.NODE_ENV === 'production' ? 'https://nav-mike.github.io' : ''
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
			defaults: {
				style: 'postcss'
			}
		}),
		importAssets()
	]
};

export default config;
