<script lang="ts">
	import { onMount } from 'svelte';
	import LiveDemo from '$lib/components/LiveDemo.svelte';
	
	const features = [
		{
			title: 'Simple Integration',
			description: 'Seamlessly integrate CesiumJS into your Svelte 5 applications with minimal boilerplate.',
			icon: '🚀'
		},
		{
			title: 'Component-Based',
			description: 'Build 3D globes using familiar Svelte component composition patterns.',
			icon: '🧩'
		},
		{
			title: 'TypeScript Support',
			description: 'Full TypeScript support with comprehensive type definitions for all components.',
			icon: '📘'
		}
	];
	
	const components = [
		{ name: 'Viewer', description: 'Core Cesium viewer component' },
		{ name: 'Terrain', description: 'Add terrain elevation data' },
		{ name: 'Camera', description: 'Control camera position and orientation' },
		{ name: 'Imagery', description: 'Add raster tile layers' },
		{ name: 'GeoJSONPoint', description: 'Render point features' },
		{ name: 'GeoJSONLine', description: 'Draw line features' },
		{ name: 'GeoJSONPolygon', description: 'Display polygon features' },
		{ name: 'Mvt', description: 'Mapbox Vector Tiles support' }
	];
</script>

<svelte:head>
	<title>Svecium - Svelte Components for CesiumJS</title>
</svelte:head>

<!-- Hero Section with Demo -->
<section class="relative overflow-hidden">
	<!-- Background Demo -->
	<div class="absolute inset-0 z-0 opacity-30">
		<LiveDemo type="full" height="100%" />
	</div>
	
	<div class="relative z-10 bg-gradient-to-br from-primary-50/95 to-blue-50/95 backdrop-blur">
		<div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				<span class="text-primary-600">Svecium</span>
			</h1>
			<p class="mt-4 text-xl text-gray-600">
				A minimal Svelte 5 component library for CesiumJS
			</p>
			<p class="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
				Build interactive 3D globes and maps in your Svelte applications with simple, 
				composable components. No boilerplate, just powerful geospatial visualization.
			</p>
			<div class="mt-10 flex justify-center gap-4">
				<a href="/docs/getting-started" class="btn-primary">
					Get Started
				</a>
				<a href="/demos" class="btn-secondary">
					View Demos
				</a>
			</div>
		</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-24 bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-900">Why Svecium?</h2>
			<p class="mt-4 text-lg text-gray-600">
				Everything you need to build 3D geospatial applications
			</p>
		</div>
		
		<div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div class="relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
					<div class="text-4xl mb-4">{feature.icon}</div>
					<h3 class="text-lg font-semibold text-gray-900">{feature.title}</h3>
					<p class="mt-2 text-gray-600">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Quick Start Section -->
<section class="py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-900">Quick Start</h2>
			<p class="mt-4 text-lg text-gray-600">
				Get up and running in minutes
			</p>
		</div>
		
		<div class="mt-12 mx-auto max-w-3xl">
			<div class="code-block">
				<div class="mb-4 text-sm text-gray-400">Install the package</div>
				<code class="block font-mono text-gray-100">
					npm install @takamunesuda/svecium cesium
				</code>
			</div>
			
			<div class="mt-6 code-block">
				<div class="mb-4 text-sm text-gray-400">Use in your Svelte component</div>
				<pre class="bg-transparent p-0"><code class="language-svelte text-sm text-gray-100">{`<script>
  import { Viewer, Terrain, Camera } from '@takamunesuda/svecium';
  const ionToken = 'your_cesium_ion_token';
</script>

<Viewer {ionToken}>
  <Terrain assetId={1} />
  <Camera longitude={139.7673} latitude={35.6812} height={10000} />
</Viewer>`}</code></pre>
			</div>
			
			<div class="mt-8 text-center">
				<a href="/docs/installation" class="text-primary-600 hover:text-primary-700 font-medium">
					View full installation guide →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Components Section -->
<section class="py-24 bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-900">Available Components</h2>
			<p class="mt-4 text-lg text-gray-600">
				Everything you need to build rich 3D experiences
			</p>
		</div>
		
		<div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each components as component}
				<a 
					href="/docs/api/{component.name.toLowerCase()}"
					class="group rounded-lg border border-gray-200 bg-white p-6 hover:border-primary-500 hover:shadow-md transition-all"
				>
					<h3 class="font-semibold text-gray-900 group-hover:text-primary-600">
						{component.name}
					</h3>
					<p class="mt-2 text-sm text-gray-600">
						{component.description}
					</p>
				</a>
			{/each}
		</div>
		
		<div class="mt-12 text-center">
			<a href="/docs/api" class="btn-primary">
				Explore All Components
			</a>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-24 bg-primary-600">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-white">
			Ready to build amazing 3D maps?
		</h2>
		<p class="mt-4 text-xl text-primary-100">
			Start using Svecium in your Svelte projects today
		</p>
		<div class="mt-8 flex justify-center gap-4">
			<a href="/docs/getting-started" class="btn-secondary">
				Get Started
			</a>
			<a 
				href="https://github.com/takamunesuda/svecium" 
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 transition-colors"
			>
				View on GitHub
			</a>
		</div>
	</div>
</section>