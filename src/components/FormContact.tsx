import React from "react";

import { Formly, type IField, type IValue } from "formly-react";

const classInput =
  "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-4 mb-2 bg-zinc-900 opacity-50";

const classPrefix = "mb-6";

const classBtnSubmit = "text-4xl glitch";
const classBtnCancel = "text-4xl text-red ml-4 glitch";

const form_name = "form_contact";
const fields: IField[] = [
  {
    type: "input",
    name: "fullname",
    value: "kamal",
    attributes: {
      type: "text",
      id: "fullname",
      classes: [classInput],
      placeholder: "Full name",
      autocomplete: "off",
    },
    rules: ["required"],
    messages: {
      required: "The full name is required",
    },
    prefix: {
      tag: "div",
      classes: [classPrefix],
    },
  },
  {
    type: "input",
    name: "email",
    value: "kamal@email.com",
    attributes: {
      type: "email",
      id: "email",
      classes: [classInput],
      placeholder: "Email",
      autocomplete: "off",
    },
    rules: ["required", "email"],
    messages: {
      required: "The email is required",
    },
    prefix: {
      tag: "div",
      classes: [classPrefix],
    },
  },
  {
    type: "input",
    name: "subject",
    value: "test",
    attributes: {
      type: "text",
      id: "subject",
      classes: [classInput],
      placeholder: "Subject",
      autocomplete: "off",
    },
    rules: ["required"],
    messages: {
      required: "The subject is required",
    },
    prefix: {
      tag: "div",
      classes: [classPrefix],
    },
  },
  {
    type: "textarea",
    name: "message",
    value: "salam alikom",
    attributes: {
      type: "text",
      id: "message",
      classes: [classInput],
      placeholder: "Message",
    },
    rules: ["required"],
    messages: {
      required: "The message is required",
    },
    prefix: {
      tag: "div",
      classes: [classPrefix],
    },
  },
];

const FormContact = () => {
  const onSubmit = async (data: IValue) => {
    const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.values),
    });

    const result = await response.json();
    console.log("result", result);
  };

  return (
    <Formly
      fields={fields}
      form_name={form_name}
      onSubmit={onSubmit}
      btnSubmit={{
        text: "Send",
        classes: [classBtnSubmit],
      }}
      btnReset={{
        text: "Cancel",
        classes: [classBtnCancel],
      }}
    />
  );
};

export default FormContact;
