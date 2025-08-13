<script lang="ts">
	const components = [
		{
			name: 'Viewer',
			description: 'The main Cesium viewer container component',
			props: ['ionToken', 'children'],
			href: '/docs/api/viewer'
		},
		{
			name: 'Terrain',
			description: 'Adds terrain elevation data from Cesium Ion',
			props: ['assetId'],
			href: '/docs/api/terrain'
		},
		{
			name: 'Camera',
			description: 'Controls camera position and orientation',
			props: ['longitude', 'latitude', 'height', 'heading', 'pitch', 'roll'],
			href: '/docs/api/camera'
		},
		{
			name: 'Imagery',
			description: 'Adds raster tile imagery layers',
			props: ['url', 'minimumLevel', 'maximumLevel'],
			href: '/docs/api/imagery'
		},
		{
			name: 'GeoJSONPoint',
			description: 'Renders GeoJSON point features',
			props: ['data', 'style', 'clampToGround', 'heightOffset'],
			href: '/docs/api/geojson-point'
		},
		{
			name: 'GeoJSONLine',
			description: 'Renders GeoJSON line features',
			props: ['data', 'style', 'clampToGround', 'heightOffset'],
			href: '/docs/api/geojson-line'
		},
		{
			name: 'GeoJSONPolygon',
			description: 'Renders GeoJSON polygon features',
			props: ['data', 'style'],
			href: '/docs/api/geojson-polygon'
		},
		{
			name: 'Mvt',
			description: 'Displays Mapbox Vector Tiles',
			props: ['url', 'layerName', 'strokeStyle', 'fillStyle', 'lineWidth', 'onSelectFeature'],
			href: '/docs/api/mvt'
		}
	];
</script>

<svelte:head>
	<title>API Reference - Svecium Documentation</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<div class="mb-12">
		<h1 class="text-4xl font-bold text-gray-900">API Reference</h1>
		<p class="mt-4 text-lg text-gray-600">
			Complete documentation for all Svecium components
		</p>
	</div>
	
	<div class="space-y-8">
		{#each components as component}
			<div class="rounded-lg border border-gray-200 bg-white p-6">
				<h2 class="text-2xl font-semibold text-gray-900">
					{component.name}
				</h2>
				<p class="mt-2 text-gray-600">
					{component.description}
				</p>
				
				<div class="mt-4">
					<h3 class="text-sm font-medium text-gray-500 uppercase tracking-wide">Props</h3>
					<div class="mt-2 flex flex-wrap gap-2">
						{#each component.props as prop}
							<span class="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
								{prop}
							</span>
						{/each}
					</div>
				</div>
				
				<div class="mt-6">
					{#if component.href.includes('viewer') || component.href.includes('camera')}
						<a 
							href={component.href}
							class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
						>
							View Documentation →
						</a>
					{:else}
						<div class="text-sm text-gray-500">
							Full documentation coming soon...
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	
	<div class="mt-12 rounded-lg bg-yellow-50 border border-yellow-200 p-6">
		<h2 class="text-lg font-semibold text-yellow-900">Documentation In Progress</h2>
		<p class="mt-2 text-yellow-700">
			We're currently working on detailed API documentation for each component, including:
		</p>
		<ul class="mt-3 list-disc list-inside text-yellow-700">
			<li>Complete prop descriptions and types</li>
			<li>Usage examples with code snippets</li>
			<li>TypeScript interfaces</li>
			<li>Event handlers and callbacks</li>
			<li>Best practices and tips</li>
		</ul>
	</div>
</div>