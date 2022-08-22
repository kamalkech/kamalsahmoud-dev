<script lang="ts">
	import { Formly, type IField } from 'svelte-formly';
	import type { ContactInput } from '$lib/util/types';

	const classInput =
		'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-4 mb-2 bg-zinc-900 opacity-50';

	const classPrefix = 'mb-6';

	const classBtnSubmit = 'text-4xl glitch';
	const classBtnCancel = 'text-4xl text-red glitch';

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
			value: 'kamal.develop@gmail.com',
			attributes: {
				type: 'email',
				id: 'email',
				classes: [classInput],
				placeholder: 'Email',
				autocomplete: 'off'
			},
			rules: ['required'],
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
			value: 'test sendblue',
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
			value: 'hello how are u',
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
		const res = await fetch('/api/send-mail', {
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
		const data = await res.json();

		console.log('res', data);
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

<style>
	:global(.error) {
		color: red;
		font-size: 0.75em;
	}
</style>
