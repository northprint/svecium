import { getContext, setContext } from 'svelte';
import type { Viewer } from 'cesium';

interface MapContext {
	viewer: Viewer | null;
}

const MAP_CTX_KEY = Symbol('map-context');

export function prepareMapContext(): MapContext {
	const ctx = $state<MapContext>({
		viewer: null
	});
	
	setContext(MAP_CTX_KEY, ctx);
	return ctx;
}

export function getMapContext(): MapContext {
	return getContext<MapContext>(MAP_CTX_KEY);
}