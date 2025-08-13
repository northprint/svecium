<script lang="ts">
	export interface PropDoc {
		name: string;
		type: string;
		required: boolean;
		default?: any;
		description: string;
	}
	
	interface PropsTableProps {
		props: PropDoc[];
	}
	
	let { props }: PropsTableProps = $props();
</script>

<div class="overflow-x-auto">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
				<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
				<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Required</th>
				<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
				<th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each props as prop}
				<tr>
					<td class="px-4 py-2 text-sm font-mono text-gray-900">{prop.name}</td>
					<td class="px-4 py-2 text-sm font-mono text-primary-600">{prop.type}</td>
					<td class="px-4 py-2 text-sm">
						{#if prop.required}
							<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
								Required
							</span>
						{:else}
							<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
								Optional
							</span>
						{/if}
					</td>
					<td class="px-4 py-2 text-sm font-mono text-gray-600">
						{prop.default !== undefined ? prop.default : '-'}
					</td>
					<td class="px-4 py-2 text-sm text-gray-700">{prop.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>