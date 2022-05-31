<script>
	export let title;
	export let klasses = [];
</script>

<div class="bg-slate-200 p-5 rounded-md drop-shadow-lg">
	<h3 class="text-2xl m-2">{title}</h3>
	<div class="{klasses} m-2"><slot /></div>
</div>
