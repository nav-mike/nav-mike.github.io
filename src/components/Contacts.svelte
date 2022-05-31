<script>
	import BaseLink from './BaseLink.svelte';
	import Wall from './Wall.svelte';
</script>

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
			<BaseLink link="https://github.com/nav-mike" label="nav-mike" icon="fa-brands fa-github" />
		</span>
		<span>
			<BaseLink
				link="https://linkedin.com/in/mikhail-navrotskii-8857a041"
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
