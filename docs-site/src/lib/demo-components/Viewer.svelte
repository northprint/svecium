<script lang="ts">
	import { onMount } from 'svelte';
	import { Viewer, Ion } from 'cesium';
	import { prepareMapContext } from './contexts.svelte';
	import type { Snippet } from 'svelte';

	// Load Cesium styles
	import 'cesium/Build/Cesium/Widgets/widgets.css';

	interface ViewerProps {
		ionToken?: string;
		children?: Snippet<[Viewer]>;
	}

	// Props
	let { ionToken = '', children }: ViewerProps = $props();

	let container: HTMLDivElement;
	let viewer: Viewer | null = $state(null);

	// Setup map context
	const mapCtx = prepareMapContext();

	onMount(() => {
		// Initialize Cesium Ion
		if (ionToken) {
			Ion.defaultAccessToken = ionToken;
		}

		// eslint-disable-next-line no-undef
		if (!CESIUM_BASE_URL) {
			console.warn(
				"CESIUM_BASE_URL is not defined. May fail to load cesium. Make sure to define it in your vite config."
			);
		}

		// Initialize Cesium viewer
		viewer = new Viewer(container, {
			terrainProvider: undefined,
			baseLayerPicker: false,
			geocoder: false,
			homeButton: false,
			sceneModePicker: false,
			navigationHelpButton: false,
			animation: false,
			timeline: false,
			fullscreenButton: false,
			vrButton: false,
			// Don't use Cesium Ion default imagery if no token
			imageryProvider: !ionToken ? false : undefined
		});

		// Set the viewer instance to the context
		mapCtx.viewer = viewer;

		return () => {
			if (viewer) {
				// Delete the viewer instance from the context
				mapCtx.viewer = null;
				viewer.destroy();
			}
		};
	});
</script>

<div bind:this={container} class="w-full h-full">
	{#if viewer}
		{@render children?.(viewer)}
	{/if}
</div>

<style>
	div :global(.cesium-viewer) {
		width: 100%;
		height: 100%;
	}
</style>