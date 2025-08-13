<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Viewer Component - Svecium API</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
	<article class="prose prose-lg max-w-none">
		<h1>Viewer Component</h1>
		
		<p class="lead">
			The Viewer component is the main container for your Cesium globe. It creates a Cesium Viewer instance 
			and provides context for all child components.
		</p>
		
		<h2>Import</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`import { Viewer } from '@takamunesuda/svecium';`}</code></pre>
		
		<h2>Props</h2>
		
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
						<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
						<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
						<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<tr>
						<td class="px-4 py-2 text-sm font-mono">ionToken</td>
						<td class="px-4 py-2 text-sm font-mono">string</td>
						<td class="px-4 py-2 text-sm">Optional*</td>
						<td class="px-4 py-2 text-sm">Cesium Ion access token. Required for Cesium Ion assets.</td>
					</tr>
					<tr>
						<td class="px-4 py-2 text-sm font-mono">children</td>
						<td class="px-4 py-2 text-sm font-mono">Snippet</td>
						<td class="px-4 py-2 text-sm">Optional</td>
						<td class="px-4 py-2 text-sm">Child components (Terrain, Camera, Imagery, etc.)</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
			<p class="font-semibold">Note on ionToken</p>
			<p>While ionToken is technically optional in the type definition, it's required if you use any Cesium Ion assets 
			(terrain, 3D tiles, etc.). Get your free token at <a href="https://cesium.com/ion/tokens" target="_blank" class="text-primary-600">cesium.com/ion/tokens</a></p>
		</div>
		
		<h2>Basic Usage</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`<script>
  import { Viewer } from '@takamunesuda/svecium';
  const ionToken = 'your_cesium_ion_token';
</script>

<div style="height: 600px;">
  <Viewer {ionToken}>
    <!-- Child components go here -->
  </Viewer>
</div>`}</code></pre>
		
		<h2>With Child Components</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`<Viewer {ionToken}>
  <Terrain assetId={1} />
  <Camera longitude={139.7673} latitude={35.6812} height={10000} />
  <Imagery url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
</Viewer>`}</code></pre>
		
		<h2>TypeScript Interface</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`interface ViewerProps {
  ionToken?: string;
  children?: Snippet<[Viewer]>;
}`}</code></pre>
		
		<h2>Context</h2>
		
		<p>The Viewer component provides a Cesium Viewer instance to all child components through Svelte context. 
		Child components automatically access this context to interact with the globe.</p>
		
		<h2>Important Notes</h2>
		
		<ul>
			<li>The Viewer component must have a defined height (either via parent container or inline styles)</li>
			<li>Only one Viewer instance should be rendered per page</li>
			<li>The viewer automatically handles cleanup on component destruction</li>
			<li>Remember to import Cesium CSS in your app</li>
		</ul>
		
		<h2>See Also</h2>
		
		<ul>
			<li><a href="{base}/docs/api/terrain" class="text-primary-600 hover:text-primary-700">Terrain Component</a></li>
			<li><a href="{base}/docs/api/camera" class="text-primary-600 hover:text-primary-700">Camera Component</a></li>
			<li><a href="{base}/docs/api/imagery" class="text-primary-600 hover:text-primary-700">Imagery Component</a></li>
		</ul>
	</article>
</div>