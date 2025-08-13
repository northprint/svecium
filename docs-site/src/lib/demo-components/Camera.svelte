<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Cartesian3, Math as CesiumMath } from 'cesium';
	import { getMapContext } from './contexts.svelte';

	interface CameraProps {
		longitude?: number;
		latitude?: number;
		height?: number;
		heading?: number;
		pitch?: number;
		roll?: number;
	}

	let {
		longitude = 0,
		latitude = 0,
		height = 10000000,
		heading = 0,
		pitch = -90,
		roll = 0
	}: CameraProps = $props();

	const mapCtx = getMapContext();

	function updateCamera() {
		if (mapCtx.viewer) {
			mapCtx.viewer.camera.setView({
				destination: Cartesian3.fromDegrees(longitude, latitude, height),
				orientation: {
					heading: CesiumMath.toRadians(heading),
					pitch: CesiumMath.toRadians(pitch),
					roll: CesiumMath.toRadians(roll)
				}
			});
		}
	}

	$effect(() => {
		// React to prop changes
		longitude;
		latitude;
		height;
		heading;
		pitch;
		roll;
		
		updateCamera();
	});

	onMount(() => {
		updateCamera();
	});
</script>