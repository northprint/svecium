<script lang="ts">
	import { onMount } from 'svelte';
	import { UrlTemplateImageryProvider } from 'cesium';
	import { getMapContext } from './contexts.svelte';

	interface ImageryProps {
		url: string;
		minimumLevel?: number;
		maximumLevel?: number;
	}

	let { 
		url,
		minimumLevel = 0,
		maximumLevel = 18
	}: ImageryProps = $props();

	const mapCtx = getMapContext();

	onMount(() => {
		if (mapCtx.viewer && url) {
			const imageryProvider = new UrlTemplateImageryProvider({
				url,
				minimumLevel,
				maximumLevel
			});
			
			mapCtx.viewer.imageryLayers.addImageryProvider(imageryProvider);
		}
	});
</script>