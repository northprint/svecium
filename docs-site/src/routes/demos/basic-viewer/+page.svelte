<script lang="ts">
	import DemoViewer from '$lib/components/DemoViewer.svelte';
	import LiveDemo from '$lib/components/LiveDemo.svelte';
	
	const basicExample = `<script>
  import { Viewer } from '@takamunesuda/svecium';
  import 'cesium/Build/Cesium/Widgets/widgets.css';
  
  const ionToken = 'your_cesium_ion_token';
<\/script>

<div style="height: 600px;">
  <Viewer {ionToken} />
</div>`;

	const withImageryExample = `<script>
  import { Viewer, Imagery } from '@takamunesuda/svecium';
  import 'cesium/Build/Cesium/Widgets/widgets.css';
<\/script>

<div style="height: 600px;">
  <Viewer>
    <Imagery url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </Viewer>
</div>`;

	const withCameraExample = `<script>
  import { Viewer, Imagery, Camera } from '@takamunesuda/svecium';
  import 'cesium/Build/Cesium/Widgets/widgets.css';
<\/script>

<div style="height: 600px;">
  <Viewer>
    <Imagery url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Camera 
      longitude={139.7673} 
      latitude={35.6812} 
      height={10000}
      heading={0}
      pitch={-45}
    />
  </Viewer>
</div>`;
</script>

<svelte:head>
	<title>Basic Viewer Demo - Svecium</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<div class="mb-8">
		<h1 class="text-3xl font-bold text-gray-900">Basic Viewer Demo</h1>
		<p class="mt-2 text-lg text-gray-600">
			Learn how to create a basic 3D globe with Svecium
		</p>
	</div>
	
	<div class="space-y-12">
		<section>
			<h2 class="text-2xl font-semibold text-gray-900 mb-4">Simple Viewer</h2>
			<p class="text-gray-600 mb-6">
				The most basic setup - just a Cesium viewer with default settings.
			</p>
			<DemoViewer 
				title="Basic Viewer"
				description="A simple Cesium globe"
				code={basicExample}
			>
				<LiveDemo type="basic" />
			</DemoViewer>
		</section>
		
		<section>
			<h2 class="text-2xl font-semibold text-gray-900 mb-4">Viewer with OpenStreetMap</h2>
			<p class="text-gray-600 mb-6">
				Add OpenStreetMap imagery layer to the globe.
			</p>
			<DemoViewer 
				title="Viewer with Imagery"
				description="Globe with OpenStreetMap tiles"
				code={withImageryExample}
			>
				<LiveDemo type="terrain" />
			</DemoViewer>
		</section>
		
		<section>
			<h2 class="text-2xl font-semibold text-gray-900 mb-4">Viewer with Camera Position</h2>
			<p class="text-gray-600 mb-6">
				Set initial camera position to focus on a specific location.
			</p>
			<DemoViewer 
				title="Tokyo View"
				description="Focused on Tokyo with tilted perspective"
				code={withCameraExample}
			>
				<LiveDemo type="camera" />
			</DemoViewer>
		</section>
	</div>
	
	<div class="mt-12 rounded-lg bg-blue-50 border border-blue-200 p-6">
		<h3 class="text-lg font-semibold text-blue-900">Getting Started</h3>
		<div class="mt-3 text-blue-700">
			<p>To run these examples locally:</p>
			<ol class="mt-2 list-decimal list-inside space-y-1">
				<li>Install Svecium: <code class="bg-blue-100 px-1 rounded">npm install @takamunesuda/svecium cesium</code></li>
				<li>Configure Vite as shown in the <a href="/docs/installation" class="underline">installation guide</a></li>
				<li>Get a free Cesium Ion token from <a href="https://cesium.com/ion/tokens" target="_blank" class="underline">cesium.com</a></li>
				<li>Copy any example code above and replace the token</li>
			</ol>
		</div>
	</div>
</div>