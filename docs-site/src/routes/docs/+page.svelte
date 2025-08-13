<script lang="ts">
	import { onMount } from 'svelte';
</script>

<svelte:head>
	<title>Documentation - Svecium</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900">Documentation</h1>
		<p class="mt-4 text-lg text-gray-600">
			Learn how to use Svecium to build interactive 3D globes in your Svelte applications
		</p>
	</div>
	
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		<a href="/docs/getting-started" class="group block rounded-lg border border-gray-200 p-6 hover:border-primary-500 hover:shadow-lg transition-all">
			<h2 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600">
				Getting Started
			</h2>
			<p class="mt-2 text-gray-600">
				Quick guide to get up and running with Svecium in minutes
			</p>
		</a>
		
		<a href="/docs/installation" class="group block rounded-lg border border-gray-200 p-6 hover:border-primary-500 hover:shadow-lg transition-all">
			<h2 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600">
				Installation
			</h2>
			<p class="mt-2 text-gray-600">
				Detailed installation and configuration instructions
			</p>
		</a>
		
		<a href="/docs/api" class="group block rounded-lg border border-gray-200 p-6 hover:border-primary-500 hover:shadow-lg transition-all">
			<h2 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600">
				API Reference
			</h2>
			<p class="mt-2 text-gray-600">
				Complete API documentation for all components
			</p>
		</a>
	</div>
</div>