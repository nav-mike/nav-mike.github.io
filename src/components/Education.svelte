<script>
	import Card from './Card.svelte';
	import Wall from './Wall.svelte';
</script>

<div class="m-2">
	<Wall title="My education">
		<span>
			<Card
				imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/006/855/logo/a25509c024193f20603c116dd17ff222.png"
				position="CAD"
				company="ITMO University"
				companyUrl="https://en.itmo.ru"
				period="2014 - 2018"
				location="Spb, Russia"
			/>
		</span>
		<span>
			<Card
				imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/001/753/logo/7aee3553420f19c0beedcb22b38cd9b4.jpeg"
				position="Software Engineering (MS)"
				company="Volgograd State Technical University"
				companyUrl="https://www.vstu.ru/eng/"
				period="2012 - 2014"
				location="Volgograd, Russia"
			/>
		</span>
		<span>
			<Card
				imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/001/753/logo/7aee3553420f19c0beedcb22b38cd9b4.jpeg"
				position="Software Development (BS)"
				company="Volgograd State Technical University"
				companyUrl="https://www.vstu.ru/eng/"
				period="2008 - 2012"
				location="Volgograd, Russia"
			/>
		</span>
	</Wall>
</div>
