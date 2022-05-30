<script>
	import Card from '../components/Card.svelte';
	import Skill from '../components/Skill.svelte';
	import BaseLink from '../components/BaseLink.svelte';
	import Wall from '../components/Wall.svelte';
</script>

<div class="flex flex-col md:flex-row">
	<div class="flex flex-col">
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
		<div class="m-5">
			<Wall title="Contacts & links">
				<span>
					<BaseLink
						link="mailto:m.navrotskiy@gmail.com"
						label="m.navrotskiy@gmail.com"
						icon="fa-regular fa-envelope"
					/>
				</span>
				<span>
					<BaseLink
						link="https://github.com/nav-mike"
						label="nav-mike"
						icon="fa-brands fa-github"
					/>
				</span>
				<span>
					<BaseLink
						link="www.linkedin.com/in/mikhail-navrotskii-8857a041"
						label="Mikhail Navrotskii"
						icon="fa-brands fa-linkedin"
					/>
				</span>
				<span>
					<BaseLink
						link="https://twitter.com/m_navrotskiy"
						label="@m_navrotskiy"
						icon="fa-brands fa-twitter"
					/>
				</span>
				<span>
					<BaseLink
						link="https://www.facebook.com/mnavrotskiy"
						label="@mnavrotskiy"
						icon="fa-brands fa-facebook"
					/>
				</span>
				<span>
					<div class="flex items-center m-2">
						<i class="fa-brands fa-telegram m-2" />
						<span>@navmike</span>
					</div>
				</span>
			</Wall>
		</div>
	</div>
	<div>
		<!-- Tabs: -->
		<div class="m-2">
			<Wall
				title="My professional skills"
				klasses="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-6"
			>
				<span>
					<Skill icon="devicon-ruby-plain" name="Ruby" />
				</span>
				<span>
					<Skill icon="devicon-rails-plain" name="Ruby on Rails" />
				</span>
				<span>
					<Skill icon="devicon-postgresql-plain" name="PostgreSQL" />
				</span>
				<span>
					<Skill icon="devicon-graphql-plain" name="GraphQL" />
				</span>
				<span>
					<Skill icon="devicon-rspec-original" name="RSpec" />
				</span>
				<span>
					<Skill icon="devicon-javascript-plain" name="JavaScript" />
				</span>
				<span>
					<Skill icon="devicon-firebase-plain" name="Firebase" />
				</span>
				<span>
					<Skill icon="devicon-typescript-plain" name="TypeScript" />
				</span>
				<span>
					<Skill icon="devicon-react-original" name="React.js" />
				</span>
				<span>
					<Skill icon="devicon-react-original" name="React Native" />
				</span>
				<span>
					<Skill icon="devicon-nodejs-plain" name="Node.js" />
				</span>
				<span>
					<Skill icon="devicon-nestjs-plain" name="Nestjs" />
				</span>
				<span>
					<Skill icon="devicon-tailwindcss-plain" name="Tailwind CSS" />
				</span>
				<span>
					<Skill icon="devicon-svelte-plain" name="Svelte" />
				</span>
				<span>
					<Skill icon="devicon-elixir-plain" name="Elixir" />
				</span>
				<span>
					<Skill icon="devicon-phoenix-plain" name="Phoenix" />
				</span>
				<span>
					<Skill icon="devicon-git-plain" name="Git" />
				</span>
				<span>
					<Skill icon="devicon-github-original" name="GitHub" />
				</span>
				<span>
					<Skill icon="devicon-docker-plain" name="Docker" />
				</span>
				<span>
					<Skill icon="devicon-redis-plain" name="Redis" />
				</span>
				<span>
					<Skill icon="devicon-go-plain" name="Go" />
				</span>
			</Wall>
		</div>
		<div class="m-2">
			<Wall title="My professional experience">
				<span>
					<Card
						imageUrl="https://avatars.githubusercontent.com/u/23238202?s=200&v=4"
						position="Backend Developer"
						company="Brella"
						companyUrl="https://www.brella.io"
						period="Aug 2021 - Present"
						location="Helsinki, Finland"
					/>
				</span>
				<span>
					<Card
						imageUrl="https://zeustrack.io/assets-new/img/logo.svg"
						position="Backend Developer"
						company="Zeustrack"
						companyUrl="https://www.zeustrack.io"
						period="Apr 2015 - Jul 2021"
						location="Espoo, Finland; Spb, Russia"
					/>
				</span>
				<span>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/university/000/006/855/logo/a25509c024193f20603c116dd17ff222.png"
						position="Research Engineer"
						company="ITMO University"
						companyUrl="https://en.itmo.ru"
						period="Sep 2015 - Aug 2016"
						location="Spb, Russia"
					/>
				</span>
				<span>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/company/100/004/429/0/logo/medium_515d269ea035141258c1bd4e551ba8bf.jpeg"
						position="Fullstack Developer"
						company="MirTurbaz"
						companyUrl="https://mirturbaz.ru/"
						period="Feb 2014 - Aug 2014"
						location="Volgograd, Russia"
					/>
				</span>
				<span>
					<Card
						imageUrl="https://habrastorage.org/getpro/moikrug/uploads/company/100/006/038/4/logo/medium_53de6c80c21767a10d3d5a5a8be650cd.png"
						position="Web Developer, Internship"
						company="Intervolga"
						companyUrl="https://www.intervolga.ru/"
						period="Jan 2013 - Apr 2013"
						location="Volgograd, Russia"
					/>
				</span>
			</Wall>
		</div>
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
		<!-- <div>My Projects</div> -->
	</div>
</div>
