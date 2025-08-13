<script lang="ts">
	const demos = [
		{
			title: 'Basic Viewer',
			description: 'Simple 3D globe with terrain',
			href: '/demos/basic-viewer'
		},
		{
			title: 'Camera Control',
			description: 'Interactive camera positioning',
			href: '/demos/camera'
		},
		{
			title: 'Map Imagery',
			description: 'Different tile providers',
			href: '/demos/imagery'
		},
		{
			title: 'GeoJSON Features',
			description: 'Points, lines, and polygons',
			href: '/demos/geojson'
		},
		{
			title: 'Vector Tiles',
			description: 'Mapbox Vector Tiles (MVT)',
			href: '/demos/mvt'
		},
		{
			title: 'Playground',
			description: 'Interactive code editor',
			href: '/demos/playground'
		}
	];
</script>

<svelte:head>
	<title>Demos - Svecium</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900">Interactive Demos</h1>
		<p class="mt-4 text-lg text-gray-600">
			Explore Svecium components with live examples
		</p>
	</div>
	
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each demos as demo}
			<a 
				href={demo.href}
				class="block relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-500 transition-all group"
			>
				<h2 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600">
					{demo.title}
				</h2>
				<p class="mt-2 text-gray-600">
					{demo.description}
				</p>
				{#if demo.href === '/demos/basic-viewer'}
					<div class="mt-4 text-sm text-primary-600 font-medium">
						View Demo →
					</div>
				{:else}
					<div class="mt-4 text-sm text-gray-500">
						Coming soon...
					</div>
				{/if}
			</a>
		{/each}
	</div>
	
	<div class="mt-12 rounded-lg bg-blue-50 border border-blue-200 p-6">
		<h2 class="text-lg font-semibold text-blue-900">Demo Features Coming Soon</h2>
		<p class="mt-2 text-blue-700">
			We're working on interactive demos with live code editing, real-time preview, and downloadable examples.
			Check back soon for the full demo experience!
		</p>
	</div>
</div>