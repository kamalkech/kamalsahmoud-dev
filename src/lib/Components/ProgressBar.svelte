<script lang="ts">
	export let percentage: number = 0;
</script>

<div class="myProgress">
	<!-- <span class="text-slate-900">{percentage}%</span> -->
	<div class="title text-red">
		<span aria-hidden="true">{percentage}%</span>
		{percentage}%
		<span aria-hidden="true">{percentage}%</span>
	</div>

	<div class="myBar bg-green" style="width: {percentage}%" />
</div>

<style>
	.myProgress {
		width: 100%;
		position: relative;
		background-color: #dddddd;
	}

	.title {
		position: absolute;
		left: 46%;
		top: 10%;
		font-size: 1.2rem;
	}

	.myBar {
		height: 30px;
	}
</style>
