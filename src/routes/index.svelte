<script>
	import Card from '../components/Card.svelte';
	import Skills from '../components/Skills.svelte';
	import BasicInfo from '../components/BasicInfo.svelte';
	import Contacts from '../components/Contacts.svelte';
	import Jobs from '../components/Jobs.svelte';
	import Education from '../components/Education.svelte';
</script>

<svelte:head>
	<title>Mikhail Navrotskii | Fullstack developer</title>
</svelte:head>
<div class="flex flex-col md:flex-row">
	<div class="flex flex-col">
		<BasicInfo />
		<Contacts />
	</div>
	<div>
		<Skills />
		<Jobs />
		<Education />
		<!-- <div>My Projects</div> -->
	</div>
</div>
