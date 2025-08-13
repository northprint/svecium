<script lang="ts">
	import { Viewer, Camera, Terrain, Imagery } from '$lib/demo-components';
	
	interface LiveDemoProps {
		type: 'basic' | 'terrain' | 'camera' | 'imagery' | 'full';
		height?: string;
	}
	
	let { 
		type = 'basic',
		height = '500px'
	}: LiveDemoProps = $props();
	
	// Use empty token for demos without Ion assets
	const ionToken = '';
	
	// OpenStreetMap tile URL template
	const osmUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
</script>

<div style="height: {height}" class="w-full rounded-lg overflow-hidden border border-gray-200">
	{#if type === 'basic'}
		<Viewer ionToken={ionToken}>
			<Imagery url={osmUrl} />
		</Viewer>
	{:else if type === 'terrain'}
		<Viewer ionToken={ionToken}>
			<Imagery url={osmUrl} />
			<Camera 
				longitude={139.7673} 
				latitude={35.6812} 
				height={100000}
			/>
		</Viewer>
	{:else if type === 'camera'}
		<Viewer ionToken={ionToken}>
			<Imagery url={osmUrl} />
			<Camera 
				longitude={139.7673} 
				latitude={35.6812} 
				height={10000}
				heading={0}
				pitch={-45}
			/>
		</Viewer>
	{:else if type === 'imagery'}
		<Viewer ionToken={ionToken}>
			<Imagery url={osmUrl} />
			<Camera 
				longitude={139.7673} 
				latitude={35.6812} 
				height={1000000}
			/>
		</Viewer>
	{:else if type === 'full'}
		<Viewer ionToken={ionToken}>
			<Imagery url={osmUrl} />
			<Camera 
				longitude={139.7673} 
				latitude={35.6812} 
				height={10000}
				heading={0}
				pitch={-30}
			/>
		</Viewer>
	{/if}
</div>