<script>
	export let link;
	export let label;
	export let icon;

	let hover = '';

	const mouseEnterHandler = () => {
		hover = 'underline';
	};

	const mouseLeaveHandler = () => {
		hover = '';
	};
</script>

<a
	href={link}
	class="flex items-center m-2"
	on:mouseenter={mouseEnterHandler}
	on:mouseleave={mouseLeaveHandler}
>
	<i class="{icon} m-2" />
	<span class={hover}>{label}</span>
</a>
