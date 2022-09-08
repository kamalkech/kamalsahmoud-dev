<script lang="ts">
	import { Formly, type IField } from 'svelte-formly';
	// import type { ContactInput } from '$lib/util/types';

	let showModal: boolean = false;

	const classInput =
		'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-4 mb-2 bg-zinc-900 opacity-50';

	const classPrefix = 'mb-6';

	const classBtnSubmit = 'text-4xl glitch';
	const classBtnCancel = 'text-3xl text-red glitch';

	const form_name = 'form_contact';
	const fields: IField[] = [
		{
			type: 'input',
			name: 'fullname',
			value: 'kamal',
			attributes: {
				type: 'text',
				id: 'fullname',
				classes: [classInput],
				placeholder: 'Full name',
				autocomplete: 'off'
			},
			rules: ['required'],
			messages: {
				required: 'The full name is required'
			},
			prefix: {
				tag: 'div',
				classes: [classPrefix]
			}
		},
		{
			type: 'input',
			name: 'email',
			value: 'kamal@email.com',
			attributes: {
				type: 'email',
				id: 'email',
				classes: [classInput],
				placeholder: 'Email',
				autocomplete: 'off'
			},
			rules: ['required', 'email'],
			messages: {
				required: 'The email is required'
			},
			prefix: {
				tag: 'div',
				classes: [classPrefix]
			}
		},
		{
			type: 'input',
			name: 'subject',
			value: 'test',
			attributes: {
				type: 'text',
				id: 'subject',
				classes: [classInput],
				placeholder: 'Subject',
				autocomplete: 'off'
			},
			rules: ['required'],
			messages: {
				required: 'The subject is required'
			},
			prefix: {
				tag: 'div',
				classes: [classPrefix]
			}
		},
		{
			type: 'textarea',
			name: 'message',
			value: 'salam alikom',
			attributes: {
				type: 'text',
				id: 'message',
				classes: [classInput],
				placeholder: 'Message'
			},
			rules: ['required'],
			messages: {
				required: 'The message is required'
			},
			prefix: {
				tag: 'div',
				classes: [classPrefix]
			}
		}
	];

	const onSubmit = async ({ detail }: any) => {
		showModal = true;
		await fetch('/api/send-mail', {
			method: 'POST',
			body: JSON.stringify({
				fullName: detail.fullname,
				email: detail.email,
				subject: detail.subject,
				message: detail.message
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		});
		// const data = await res.json();
	};

	const onHideModal = () => {
		showModal = false;
	};
</script>

<Formly
	{fields}
	{form_name}
	on:submit={onSubmit}
	btnSubmit={{
		text: 'Send',
		classes: [classBtnSubmit]
	}}
	btnReset={{
		text: 'Cancel',
		classes: [classBtnCancel]
	}}
/>

<!-- Main modal -->
<div
	id="defaultModal"
	tabindex="-1"
	class:hidden={!showModal}
	class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
	aria-modal="true"
	role="dialog"
>
	<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
		<!-- Modal content -->
		<div class="relative bg-zinc-900 rounded-lg shadow dark:bg-gray-700">
			<!-- Modal header -->
			<div class="flex justify-between items-start p-4 rounded-t">
				<h3 class="text-xl font-semibold">Thank you!</h3>
				<button
					type="button"
					class="text-gray-400 bg-transparent hover:bg-green hover:text-red rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
					data-modal-toggle="defaultModal"
					on:click={onHideModal}
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<!-- Modal body -->
			<div class="p-6 space-y-6">
				<p>I will response to you asap.</p>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.error) {
		color: red;
		font-size: 0.75em;
	}
</style>
