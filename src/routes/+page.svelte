<script lang="ts">
	import { fade } from 'svelte/transition';

	// Import components.
	import ProgressBar from '$lib/Components/ProgressBar.svelte';
	import FormContact from '$lib/Components/Form.svelte';

	let visible: boolean = true;
	setInterval(() => {
		visible = !visible;
	}, 1000);
</script>

<div class="sm:w-full lg:w-1/2 m-auto md:mt-10 sm:mt-8 sm:px-4">
	<div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
		<div class="photo">
			<img
				src="./img/kamal.jpg"
				alt="kamal sahmoud"
				class="opacity-20 rounded-full"
				width="200px"
				height="200px"
			/>
		</div>

		<div class="bioigraphy md:col-span-2">
			<h1 class="glitch uppercase text-5xl md:mb-8 sm:mb-6" id="main-title">
				<span aria-hidden="true">Kamal</span>
				Kamal
				<span aria-hidden="true">Kamal</span>
			</h1>

			<h2 class="glitch normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-2xl">
				A fullstack engineer, auto learn and build different stuff for web
			</h2>
		</div>
	</div>
	<p class="mt-6 glitch text-slate-50 text-sm">
		Hello, i am web developer frontend / backend for more than 10 years, currently i am working in a
		web agency in Rabat. I have acquired know-how and solid knowledge in all stages of website
		creation. Autonomous and sociable, i can carry out a solo project as well as integrate myself
		into an already existing team. Flexible on time and pace of work, i adapt to meet your needs and
		minimize your development costs. My qualities are good listening / understanding of customer
		needs, seriousness in the realization, advice and decision support before development.
	</p>

	<div class="skills my-20">
		<div class="title-section h-10 my-6">
			{#if visible}
				<h2
					class="glitch normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-4xl"
					in:fade={{ delay: 500 }}
					out:fade
				>
					Skills
				</h2>
			{/if}
		</div>

		<div
			class="skills my-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-yellow glitch opacity-50"
		>
			<div class="item">
				<h3>php</h3>
				<ProgressBar percentage={75} />
			</div>
			<div class="item">
				<h3>html / css</h3>
				<ProgressBar percentage={70} />
			</div>
			<div class="item">
				<h3>javascript</h3>
				<ProgressBar percentage={80} />
			</div>
			<div class="item">
				<h3>typescript</h3>
				<ProgressBar percentage={80} />
			</div>
			<div class="item">
				<h3>nodejs</h3>
				<ProgressBar percentage={65} />
			</div>
			<div class="item">
				<h3>angular</h3>
				<ProgressBar percentage={65} />
			</div>
			<div class="item">
				<h3>react</h3>
				<ProgressBar percentage={80} />
			</div>
			<div class="item">
				<h3>svelte</h3>
				<ProgressBar percentage={80} />
			</div>
			<div class="item">
				<h3>ethereum / web3</h3>
				<ProgressBar percentage={50} />
			</div>
			<div class="item">
				<h3>drupal</h3>
				<ProgressBar percentage={85} />
			</div>
			<div class="item">
				<h3>symfony</h3>
				<ProgressBar percentage={60} />
			</div>
			<div class="item">
				<h3>laravel</h3>
				<ProgressBar percentage={30} />
			</div>
		</div>
	</div>
	<!-- end skills -->

	<div class="contact glitch mb-6">
		<div class="title-section my-6">
			<h2 class="normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-4xl">
				<img src="/img/phone-17-64.png" alt="tv" />
				Contact me
			</h2>
		</div>
		<FormContact />
	</div>
</div>
