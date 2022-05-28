<script>
	import Card from '../components/Card.svelte';
</script>

<div class="flex flex-row">
	<div class="flex flex-col">
		<img
			class="h-40 max-h-40 w-40"
			src="https://avatars.githubusercontent.com/u/2811491?v=4"
			alt="Mikhail Navrotskii"
		/>
		<h1>Mikhail Navrotskii</h1>
		<p>Backend developer in <a href="https://www.brella.io" target="_blank">brella.io</a></p>
		<p>Living in Espoo, Finland</p>
		<p>Languages: Rus, Eng</p>
		<div>Contacts & links:</div>
		<ul>
			<li>Email</li>
			<li>GitHub</li>
			<li>LinkedIn</li>
			<li>Twitter</li>
			<li>Facebook</li>
			<li>Telegram</li>
		</ul>
	</div>
	<div>
		details info:
		<!-- Tabs: -->
		<div>
			My professional skills:
			<ul>
				<li>Ruby</li>
				<li>Ruby on Rails</li>
				<li>PostgreSQL</li>
				<li>GraphQL</li>
				<li>RSpec</li>
				<li>JavaScript</li>
				<li>Firestore</li>
				<li>TypeScript</li>
				<li>React.js</li>
				<li>React Native</li>
				<li>Nodejs</li>
				<li>NestJS</li>
				<li>Tailwind</li>
				<li>Svelte</li>
				<li>Elixir</li>
				<li>Phoenix</li>
				<li>Git</li>
				<li>Docker</li>
				<li>Redis</li>
				<li>Go</li>
			</ul>
		</div>
		<div>
			My professional experience:
			<ul>
				<li>
					<Card
						imageUrl="https://avatars.githubusercontent.com/u/23238202?s=200&v=4"
						position="Backend Developer"
						company="Brella"
						companyUrl="https://www.brella.io"
						period="Aug 2021 - Present"
						location="Helsinki, Finland"
					/>
				</li>
				<li>
					<Card
						imageUrl="https://zeustrack.io/assets-new/img/logo.svg"
						position="Backend Developer"
						company="Zeustrack"
						companyUrl="https://www.zeustrack.io"
						period="Apr 2015 - Jul 2021"
						location="Espoo, Finland; Spb, Russia"
					/>
				</li>
				<li>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/006/855/logo/a25509c024193f20603c116dd17ff222.png"
						position="Research Engineer"
						company="ITMO University"
						companyUrl="https://en.itmo.ru"
						period="Sep 2015 - Aug 2016"
						location="Spb, Russia"
					/>
				</li>
				<li>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/company/100/004/429/0/logo/medium_515d269ea035141258c1bd4e551ba8bf.jpeg"
						position="Fullstack Developer"
						company="MirTurbaz"
						companyUrl="https://mirturbaz.ru/"
						period="Feb 2014 - Aug 2014"
						location="Volgograd, Russia"
					/>
				</li>
				<li>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/company/100/006/038/4/logo/medium_53de6c80c21767a10d3d5a5a8be650cd.png"
						position="Web Developer, Internship"
						company="Intervolga"
						companyUrl="https://www.intervolga.ru/"
						period="Jan 2013 - Apr 2013"
						location="Volgograd, Russia"
					/>
				</li>
			</ul>
		</div>
		<div>
			My education:
			<ul>
				<li>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/006/855/logo/a25509c024193f20603c116dd17ff222.png"
						position="CAD"
						company="ITMO University"
						companyUrl="https://en.itmo.ru"
						period="2014 - 2018"
						location="Spb, Russia"
					/>
				</li>
				<li>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/001/753/logo/7aee3553420f19c0beedcb22b38cd9b4.jpeg"
						position="Software Engineering (MS)"
						company="Volgograd State Technical University"
						companyUrl="https://www.vstu.ru/eng/"
						period="2012 - 2014"
						location="Volgograd, Russia"
					/>
				</li>
				<li>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/001/753/logo/7aee3553420f19c0beedcb22b38cd9b4.jpeg"
						position="Software Development (BS)"
						company="Volgograd State Technical University"
						companyUrl="https://www.vstu.ru/eng/"
						period="2008 - 2012"
						location="Volgograd, Russia"
					/>
				</li>
			</ul>
		</div>
		<div>My Projects</div>
	</div>
</div>
