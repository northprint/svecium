<script lang="ts">
</script>

<svelte:head>
	<title>Installation - Svecium Documentation</title>
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
	<article class="prose prose-lg max-w-none">
		<h1>Installation Guide</h1>
		
		<p class="lead">
			Complete guide for installing and configuring Svecium in your Svelte project.
		</p>
		
		<h2>Requirements</h2>
		
		<ul>
			<li><strong>Svelte 5</strong> - Svecium uses Svelte 5's runes and new component syntax</li>
			<li><strong>Vite</strong> - Recommended build tool for optimal Cesium integration</li>
			<li><strong>Node.js 18+</strong> - For package management and building</li>
		</ul>
		
		<h2>Step 1: Install Dependencies</h2>
		
		<h3>Using npm</h3>
		<div class="code-block">
			<code class="text-gray-100">npm install @takamunesuda/svecium cesium vite-plugin-static-copy</code>
		</div>
		
		<h3>Using pnpm</h3>
		<div class="code-block">
			<code class="text-gray-100">pnpm add @takamunesuda/svecium cesium vite-plugin-static-copy</code>
		</div>
		
		<h3>Using yarn</h3>
		<div class="code-block">
			<code class="text-gray-100">yarn add @takamunesuda/svecium cesium vite-plugin-static-copy</code>
		</div>
		
		<h2>Step 2: Configure Vite</h2>
		
		<p>Create or update your <code>vite.config.ts</code> file:</p>
		
		<pre class="code-block"><code class="text-gray-100">{`import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        { 
          src: 'node_modules/cesium/Build/Cesium/Workers/*', 
          dest: 'cesium/Workers' 
        },
        { 
          src: 'node_modules/cesium/Build/Cesium/Assets/*', 
          dest: 'cesium/Assets' 
        },
        { 
          src: 'node_modules/cesium/Build/Cesium/Widgets/*', 
          dest: 'cesium/Widgets' 
        },
        { 
          src: 'node_modules/cesium/Build/Cesium/ThirdParty/*', 
          dest: 'cesium/ThirdParty' 
        }
      ]
    })
  ],
  define: {
    // Define the base URL for Cesium assets
    CESIUM_BASE_URL: JSON.stringify('/cesium')
  },
  optimizeDeps: {
    // Include Cesium in dependency optimization
    include: ['cesium']
  },
  ssr: {
    // Exclude Cesium from SSR
    noExternal: ['cesium']
  }
});`}</code></pre>
		
		<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
			<p class="font-semibold">Important</p>
			<p>The <code>viteStaticCopy</code> plugin is essential for copying Cesium's web workers and assets to your build output. Without this, Cesium will not function properly.</p>
		</div>
		
		<h2>Step 3: Import Cesium CSS</h2>
		
		<p>Import the Cesium widgets CSS in your app. You can do this in your root layout or in any component where you use the Viewer:</p>
		
		<h3>Option 1: In your root layout</h3>
		
		<pre class="code-block"><code class="text-gray-100">{`<script>
  import 'cesium/Build/Cesium/Widgets/widgets.css';
</script>`}</code></pre>
		
		<h3>Option 2: In app.css</h3>
		
		<pre class="code-block"><code class="text-gray-100">{`@import 'cesium/Build/Cesium/Widgets/widgets.css';`}</code></pre>
		
		<h2>Step 4: TypeScript Configuration (Optional)</h2>
		
		<p>If you're using TypeScript, add Cesium types to your <code>tsconfig.json</code>:</p>
		
		<pre class="code-block"><code class="text-gray-100">{`{
  "compilerOptions": {
    "types": ["cesium"]
  }
}`}</code></pre>
		
		<h2>Step 5: Environment Variables</h2>
		
		<p>Create a <code>.env</code> file for your Cesium Ion token:</p>
		
		<pre class="code-block"><code class="text-gray-100">{`PUBLIC_CESIUM_ION_TOKEN=your_cesium_ion_token_here`}</code></pre>
		
		<p>Then use it in your components:</p>
		
		<pre class="code-block"><code class="text-gray-100">{`<script>
  import { PUBLIC_CESIUM_ION_TOKEN } from '$env/static/public';
  import { Viewer } from '@takamunesuda/svecium';
</script>

<Viewer ionToken={PUBLIC_CESIUM_ION_TOKEN}>
  <!-- Your components here -->
</Viewer>`}</code></pre>
		
		<h2>Troubleshooting</h2>
		
		<h3>Workers not loading</h3>
		<p>If you see errors about workers not loading, ensure:</p>
		<ul>
			<li>The <code>viteStaticCopy</code> plugin is properly configured</li>
			<li>The <code>CESIUM_BASE_URL</code> is correctly defined</li>
			<li>Your build output includes the <code>cesium</code> directory</li>
		</ul>
		
		<h3>CSS not loading</h3>
		<p>If the globe appears unstyled:</p>
		<ul>
			<li>Verify the CSS import path is correct</li>
			<li>Check that the CSS file exists in <code>node_modules/cesium/Build/Cesium/Widgets/</code></li>
		</ul>
		
		<h3>TypeScript errors</h3>
		<p>If you encounter TypeScript errors:</p>
		<ul>
			<li>Install <code>@types/cesium</code> if not already included</li>
			<li>Add Cesium to your <code>tsconfig.json</code> types array</li>
		</ul>
		
		<h2>Production Build</h2>
		
		<p>For production builds, ensure your deployment includes the Cesium assets:</p>
		
		<div class="code-block">
			<code class="text-gray-100">npm run build</code>
		</div>
		
		<p>The build output should include a <code>cesium</code> directory with all necessary assets.</p>
		
		<h2>Next Steps</h2>
		
		<p>Now that you have Svecium installed and configured:</p>
		<ul>
			<li><a href="/docs/getting-started" class="text-primary-600 hover:text-primary-700">Follow the Getting Started guide</a></li>
			<li><a href="/docs/api" class="text-primary-600 hover:text-primary-700">Explore the API documentation</a></li>
			<li><a href="/demos" class="text-primary-600 hover:text-primary-700">Try the interactive demos</a></li>
		</ul>
	</article>
</div>