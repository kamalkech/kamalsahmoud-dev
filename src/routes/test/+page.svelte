<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await fetch('/api/send-mail', {
			method: 'POST',
			body: JSON.stringify({
				name: 'foo bar'
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		});
		const data = await res.json();

		console.log('res', data);
	});
</script>

<h1>Test</h1>
