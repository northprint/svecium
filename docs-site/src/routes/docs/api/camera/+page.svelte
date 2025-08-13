<script lang="ts">
	import PropsTable from '$lib/components/PropsTable.svelte';
	import type { PropDoc } from '$lib/components/PropsTable.svelte';
	
	const props: PropDoc[] = [
		{
			name: 'longitude',
			type: 'number',
			required: false,
			default: undefined,
			description: 'Longitude in degrees'
		},
		{
			name: 'latitude',
			type: 'number',
			required: false,
			default: undefined,
			description: 'Latitude in degrees'
		},
		{
			name: 'height',
			type: 'number',
			required: false,
			default: undefined,
			description: 'Height above the ellipsoid in meters'
		},
		{
			name: 'heading',
			type: 'number',
			required: false,
			default: 0,
			description: 'Heading angle in degrees (0 = north, 90 = east)'
		},
		{
			name: 'pitch',
			type: 'number',
			required: false,
			default: -90,
			description: 'Pitch angle in degrees (-90 = looking straight down)'
		},
		{
			name: 'roll',
			type: 'number',
			required: false,
			default: 0,
			description: 'Roll angle in degrees'
		}
	];
</script>

<svelte:head>
	<title>Camera Component - Svecium API</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
	<article class="prose prose-lg max-w-none">
		<h1>Camera Component</h1>
		
		<p class="lead">
			The Camera component controls the position and orientation of the viewer's camera. 
			All props are bindable for reactive camera control.
		</p>
		
		<h2>Import</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`import { Camera } from '@takamunesuda/svecium';`}</code></pre>
		
		<h2>Props</h2>
		
		<PropsTable {props} />
		
		<h2>Basic Usage</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`<Viewer {ionToken}>
  <Camera 
    longitude={139.7673} 
    latitude={35.6812} 
    height={10000}
  />
</Viewer>`}</code></pre>
		
		<h2>With Full Orientation</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`<Camera 
  longitude={139.7673} 
  latitude={35.6812} 
  height={10000}
  heading={45}    // Looking northeast
  pitch={-30}     // Tilted view
  roll={0}        // No roll
/>`}</code></pre>
		
		<h2>Reactive Camera Control</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`<script>
  let longitude = $state(139.7673);
  let latitude = $state(35.6812);
  let height = $state(10000);
</script>

<Viewer {ionToken}>
  <Camera bind:longitude bind:latitude bind:height />
</Viewer>

<div>
  <input type="range" bind:value={height} min="100" max="1000000" />
  <p>Current height: {height}m</p>
</div>`}</code></pre>
		
		<h2>TypeScript Interface</h2>
		
		<pre class="code-block"><code class="text-gray-100">{`interface CameraProps {
  longitude?: number;
  latitude?: number;
  height?: number;
  heading?: number;
  pitch?: number;
  roll?: number;
}`}</code></pre>
		
		<h2>Camera Angles</h2>
		
		<ul>
			<li><strong>Heading</strong>: Compass direction (0° = North, 90° = East, 180° = South, 270° = West)</li>
			<li><strong>Pitch</strong>: Vertical tilt (-90° = straight down, 0° = horizontal, 90° = straight up)</li>
			<li><strong>Roll</strong>: Rotation around the view axis (rarely used)</li>
		</ul>
		
		<h2>Notes</h2>
		
		<ul>
			<li>All props are optional and bindable</li>
			<li>Camera updates are animated by default</li>
			<li>The camera will automatically adjust to terrain if terrain is loaded</li>
		</ul>
	</article>
</div>