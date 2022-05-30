<script>
	import Skill from './Skill.svelte';
	import Wall from './Wall.svelte';
</script>

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
