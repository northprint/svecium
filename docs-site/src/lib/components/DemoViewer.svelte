<script lang="ts">
	import { onMount } from 'svelte';
	
	interface DemoViewerProps {
		title?: string;
		description?: string;
		code: string;
		height?: string;
	}
	
	let { 
		title = 'Demo',
		description = '',
		code,
		height = '500px'
	}: DemoViewerProps = $props();
	
	let container: HTMLDivElement;
	let showCode = $state(false);
</script>

<div class="rounded-lg border border-gray-200 overflow-hidden shadow-sm">
	{#if title || description}
		<div class="bg-gray-50 px-4 py-3 border-b border-gray-200">
			{#if title}
				<h3 class="text-lg font-semibold text-gray-900">{title}</h3>
			{/if}
			{#if description}
				<p class="mt-1 text-sm text-gray-600">{description}</p>
			{/if}
		</div>
	{/if}
	
	<div class="relative" style="height: {height}">
		<div bind:this={container} class="w-full h-full">
			<slot>
				<div class="flex items-center justify-center h-full bg-gray-100 text-gray-500">
					<div class="text-center">
						<svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<p class="mt-2 text-sm">Interactive demo coming soon</p>
					</div>
				</div>
			</slot>
		</div>
		
		<button
			onclick={() => showCode = !showCode}
			class="absolute top-2 right-2 z-10 inline-flex items-center px-3 py-1 rounded-md bg-white/90 backdrop-blur border border-gray-200 text-sm font-medium text-gray-700 hover:bg-white hover:text-gray-900 transition-colors"
		>
			{showCode ? 'Hide' : 'Show'} Code
		</button>
	</div>
	
	{#if showCode}
		<div class="border-t border-gray-200">
			<pre class="code-block m-0 rounded-none"><code class="text-gray-100 text-sm">{code}</code></pre>
		</div>
	{/if}
</div>