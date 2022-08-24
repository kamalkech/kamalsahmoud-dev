<script lang="ts">
	import { fade } from 'svelte/transition';
	import ProgressBar from '$lib/Components/ProgressBar.svelte';

	let visible: boolean = true;
	setInterval(() => {
		visible = !visible;
	}, 1000);
</script>

<!-- Start skills -->
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
			<h3>angular/nestjs</h3>
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
			<h3>ethereum</h3>
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
