import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{ src: '../node_modules/cesium/Build/Cesium/Workers/*', dest: 'cesium/Workers' },
				{ src: '../node_modules/cesium/Build/Cesium/Assets/*', dest: 'cesium/Assets' },
				{ src: '../node_modules/cesium/Build/Cesium/Widgets/*', dest: 'cesium/Widgets' },
				{ src: '../node_modules/cesium/Build/Cesium/ThirdParty/*', dest: 'cesium/ThirdParty' }
			]
		})
	],
	define: {
		CESIUM_BASE_URL: JSON.stringify('/cesium')
	},
	resolve: {
		alias: {
			'@takamunesuda/svecium': '../src/lib'
		}
	},
	optimizeDeps: {
		include: ['cesium'],
		exclude: ['@takamunesuda/svecium']
	},
	ssr: {
		noExternal: ['cesium', '@takamunesuda/svecium']
	}
});
