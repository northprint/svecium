<script lang="ts">
</script>

<svelte:head>
	<title>Getting Started - Svecium Documentation</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
	<article class="prose prose-lg max-w-none">
		<h1>Getting Started with Svecium</h1>
		
		<p class="lead">
			Svecium is a minimal Svelte 5 component library that wraps CesiumJS, making it easy to build 
			interactive 3D globes and maps in Svelte applications.
		</p>
		
		<h2>Prerequisites</h2>
		
		<ul>
			<li>Node.js 18+ and npm/pnpm/yarn</li>
			<li>Svelte 5</li>
			<li>Vite (recommended)</li>
			<li>Basic knowledge of Svelte and JavaScript/TypeScript</li>
		</ul>
		
		<h2>Quick Installation</h2>
		
		<h3>1. Install the packages</h3>
		
		<div class="code-block">
			<code class="text-gray-100">npm install @takamunesuda/svecium cesium</code>
		</div>
		
		<p>Or using pnpm:</p>
		
		<div class="code-block">
			<code class="text-gray-100">pnpm add @takamunesuda/svecium cesium</code>
		</div>
		
		<h3>2. Configure Vite</h3>
		
		<p>Update your <code>vite.config.ts</code> to handle Cesium assets:</p>
		
		<pre class="code-block"><code class="text-gray-100">{`import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        { src: 'node_modules/cesium/Build/Cesium/Workers/*', dest: 'cesium/Workers' },
        { src: 'node_modules/cesium/Build/Cesium/Assets/*', dest: 'cesium/Assets' },
        { src: 'node_modules/cesium/Build/Cesium/Widgets/*', dest: 'cesium/Widgets' },
        { src: 'node_modules/cesium/Build/Cesium/ThirdParty/*', dest: 'cesium/ThirdParty' }
      ]
    })
  ],
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium')
  }
});`}</code></pre>
		
		<h3>3. Import Cesium CSS</h3>
		
		<p>Import the Cesium widgets CSS in your app (e.g., in your layout or main component):</p>
		
		<pre class="code-block"><code class="text-gray-100">{`import 'cesium/Build/Cesium/Widgets/widgets.css';`}</code></pre>
		
		<h2>Your First Globe</h2>
		
		<p>Create a simple 3D globe with terrain:</p>
		
		<pre class="code-block"><code class="text-gray-100">{`<script>
  import { Viewer, Terrain, Camera } from '@takamunesuda/svecium';
  
  // Get your free token at https://cesium.com/ion/tokens
  const ionToken = 'your_cesium_ion_token';
</script>

<div style="height: 600px;">
  <Viewer {ionToken}>
    <Terrain assetId={1} />
    <Camera 
      longitude={139.7673} 
      latitude={35.6812} 
      height={10000}
      heading={0}
      pitch={-30}
      roll={0}
    />
  </Viewer>
</div>`}</code></pre>
		
		<h2>Adding Map Imagery</h2>
		
		<p>Add OpenStreetMap or other tile providers:</p>
		
		<pre class="code-block"><code class="text-gray-100">{`<Viewer {ionToken}>
  <Terrain assetId={1} />
  <Imagery 
    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    minimumLevel={0}
    maximumLevel={19}
  />
  <Camera longitude={139.7673} latitude={35.6812} height={10000} />
</Viewer>`}</code></pre>
		
		<h2>Next Steps</h2>
		
		<ul>
			<li><a href="/docs/installation" class="text-primary-600 hover:text-primary-700">Read the full installation guide</a></li>
			<li><a href="/docs/api" class="text-primary-600 hover:text-primary-700">Explore the API reference</a></li>
			<li><a href="/demos" class="text-primary-600 hover:text-primary-700">Try interactive demos</a></li>
		</ul>
		
		<h2>Getting a Cesium Ion Token</h2>
		
		<ol>
			<li>Visit <a href="https://cesium.com/ion/signup" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700">Cesium Ion</a></li>
			<li>Create a free account</li>
			<li>Go to the "Access Tokens" page</li>
			<li>Create a new token or use the default token</li>
			<li>Copy the token and use it in your application</li>
		</ol>
		
		<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
			<p class="font-semibold">Note</p>
			<p>Cesium Ion tokens are required for terrain data and certain imagery providers. For production use, configure your token with appropriate permissions and domain restrictions.</p>
		</div>
	</article>
</div>