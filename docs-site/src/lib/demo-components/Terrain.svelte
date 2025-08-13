<script lang="ts">
	import { onMount } from 'svelte';
	import { CesiumTerrainProvider, IonResource } from 'cesium';
	import { getMapContext } from './contexts.svelte';

	interface TerrainProps {
		assetId?: number;
	}

	let { assetId = 1 }: TerrainProps = $props();

	const mapCtx = getMapContext();

	onMount(async () => {
		if (mapCtx.viewer && assetId) {
			try {
				const terrainProvider = await CesiumTerrainProvider.fromIonAssetId(assetId);
				mapCtx.viewer.terrainProvider = terrainProvider;
			} catch (error) {
				console.error('Failed to load terrain:', error);
			}
		}
	});
</script>