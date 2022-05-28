<script>
	import Card from '../components/Card.svelte';
	import Skill from '../components/Skill.svelte';
	import BaseLink from '../components/BaseLink.svelte';
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
			<li>
				<BaseLink
					link="mailto:m.navrotskiy@gmail.com"
					label="m.navrotskiy@gmail.com"
					icon="fa-regular fa-envelope"
				/>
			</li>
			<li>
				<BaseLink link="https://github.com/nav-mike" label="nav-mike" icon="fa-brands fa-github" />
			</li>
			<li>
				<BaseLink
					link="www.linkedin.com/in/mikhail-navrotskii-8857a041"
					label="Mikhail Navrotskii"
					icon="fa-brands fa-linkedin"
				/>
			</li>
			<li>
				<BaseLink
					link="https://twitter.com/m_navrotskiy"
					label="@m_navrotskiy"
					icon="fa-brands fa-twitter"
				/>
			</li>
			<li>
				<BaseLink
					link="https://www.facebook.com/mnavrotskiy"
					label="@mnavrotskiy"
					icon="fa-brands fa-facebook"
				/>
			</li>
			<li>
				<div class="flex items-center m-2">
					<i class="fa-brands fa-telegram m-2" />
					<span>@navmike</span>
				</div>
			</li>
		</ul>
	</div>
	<div>
		<!-- Tabs: -->
		<div>
			My professional skills:
			<ul>
				<li>
					<Skill icon="devicon-ruby-plain" name="Ruby" />
				</li>
				<li>
					<Skill icon="devicon-rails-plain" name="Ruby on Rails" />
				</li>
				<li>
					<Skill icon="devicon-postgresql-plain" name="PostgreSQL" />
				</li>
				<li>
					<Skill icon="devicon-graphql-plain" name="GraphQL" />
				</li>
				<li>
					<Skill icon="devicon-rspec-original" name="RSpec" />
				</li>
				<li>
					<Skill icon="devicon-javascript-plain" name="JavaScript" />
				</li>
				<li>
					<Skill icon="devicon-firebase-plain" name="Firebase" />
				</li>
				<li>
					<Skill icon="devicon-typescript-plain" name="TypeScript" />
				</li>
				<li>
					<Skill icon="devicon-react-original" name="React.js" />
				</li>
				<li>
					<Skill icon="devicon-react-original" name="React Native" />
				</li>
				<li>
					<Skill icon="devicon-nodejs-plain" name="Node.js" />
				</li>
				<li>
					<Skill icon="devicon-nestjs-plain" name="Nestjs" />
				</li>
				<li>
					<Skill icon="devicon-tailwindcss-plain" name="Tailwind CSS" />
				</li>
				<li>
					<Skill icon="devicon-svelte-plain" name="Svelte" />
				</li>
				<li>
					<Skill icon="devicon-elixir-plain" name="Elixir" />
				</li>
				<li>
					<Skill icon="devicon-phoenix-plain" name="Phoenix" />
				</li>
				<li>
					<Skill icon="devicon-git-plain" name="Git" />
				</li>
				<li>
					<Skill icon="devicon-github-original" name="GitHub" />
				</li>
				<li>
					<Skill icon="devicon-docker-plain" name="Docker" />
				</li>
				<li>
					<Skill icon="devicon-redis-plain" name="Redis" />
				</li>
				<li>
					<Skill icon="devicon-go-plain" name="Go" />
				</li>
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
