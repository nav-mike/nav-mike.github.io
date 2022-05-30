<script>
	export let imageUrl;
	export let position;
	export let company;
	export let companyUrl;
	export let period;
	export let location;
</script>

<div class="flex m-2">
	<img src={imageUrl} alt={company} class="h-20 w-20 m-5" />
	<div>
		<h3 class="font-bold">{position}</h3>
		<h4 class="hover:underline">
			<a href={companyUrl} target="_blank">{company}</a>
		</h4>
		<h5 class="font-light text-gray-500">{period}</h5>
		<h5 class="font-light text-gray-500">{location}</h5>
	</div>
</div>
