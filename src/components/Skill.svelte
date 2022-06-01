<script>
	export let icon;
	export let name;
	export let image = null;
</script>

<div class="flex items-center m-2">
	{#if image}
		<img src={image} class="w-4 h-4 m-2" alt={name} />
	{:else}
		<i class="{icon} colored m-2" />
	{/if}
	<span>{name}</span>
</div>
