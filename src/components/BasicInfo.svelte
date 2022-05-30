<script>
	import Wall from './Wall.svelte';
</script>

<div class="m-5 mt-2">
	<Wall title="" klasses="flex flex-col justify-center items-center">
		<img
			class="h-40 max-h-40 w-40"
			src="https://avatars.githubusercontent.com/u/2811491?v=4"
			alt="Mikhail Navrotskii"
		/>
		<h1><i class="fa-regular fa-user" /> Mikhail Navrotskii</h1>
		<p>
			Backend developer in
			<a class="hover:underline" href="https://www.brella.io" target="_blank">brella.io</a>
		</p>
		<p><i class="fa-solid fa-location-dot" /> Living in Espoo, Finland</p>
		<p><i class="fa-solid fa-language" /> Languages: 🇷🇺 🇬🇧</p>
	</Wall>
</div>
