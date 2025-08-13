<script lang="ts">
	import { page } from '$app/stores';
	
	let mobileMenuOpen = $state(false);
	
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Documentation', href: '/docs' },
		{ name: 'Demos', href: '/demos' },
		{ name: 'API Reference', href: '/docs/api' }
	];
</script>

<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="flex items-center">
					<span class="text-2xl font-bold text-primary-600">Svecium</span>
				</a>
				<div class="hidden ml-10 space-x-8 lg:block">
					{#each navigation as item}
						<a 
							href={item.href} 
							class="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
							class:text-primary-600={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
			
			<div class="flex items-center space-x-4">
				<a 
					href="https://github.com/takamunesuda/svecium" 
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-500 hover:text-gray-700"
					aria-label="GitHub"
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
					</svg>
				</a>
				
				<a 
					href="https://www.npmjs.com/package/@takamunesuda/svecium" 
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-500 hover:text-gray-700"
					aria-label="NPM"
				>
					<svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
						<path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z"/>
					</svg>
				</a>
				
				<button
					onclick={() => mobileMenuOpen = !mobileMenuOpen}
					class="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
					aria-label="Toggle menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
		
		{#if mobileMenuOpen}
			<div class="lg:hidden">
				<div class="space-y-1 px-2 pb-3 pt-2">
					{#each navigation as item}
						<a 
							href={item.href}
							onclick={() => mobileMenuOpen = false}
							class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
							class:bg-primary-50={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
							class:text-primary-600={$page.url.pathname === item.href || $page.url.pathname.startsWith(item.href + '/')}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</nav>
</header>