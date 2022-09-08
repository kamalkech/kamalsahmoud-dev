var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_index2 = require("../../chunks/index2.js");
const Biography = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"grid md:grid-cols-3 sm:grid-cols-1 gap-4"}"><div class="${"photo"}"><img src="${"./img/kamal.jpg"}" alt="${"kamal sahmoud"}" class="${"opacity-20 rounded-full"}" width="${"200px"}" height="${"200px"}"></div>

	<div class="${"bioigraphy md:col-span-2"}"><h1 class="${"glitch uppercase text-5xl md:mb-8 sm:mb-6"}" id="${"main-title"}"><span aria-hidden="${"true"}">Kamal</span>
			Kamal
			<span aria-hidden="${"true"}">Kamal</span></h1>

		<h2 class="${"glitch normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-2xl"}">A fullstack engineer, auto learn and build different stuff for web
		</h2></div></div>
<p class="${"mt-6 glitch text-slate-50 text-sm"}">Hello, i am web developer frontend / backend for more than 10 years, currently i am working in a
	web agency in Rabat. I have acquired know-how and solid knowledge in all stages of website
	creation. Autonomous and sociable, i can carry out a solo project as well as integrate myself into
	an already existing team. Flexible on time and pace of work, i adapt to meet your needs and
	minimize your development costs. My qualities are good listening / understanding of customer
	needs, seriousness in the realization, advice and decision support before development.
</p>
`;
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".myProgress.svelte-1tr62gy{width:100%;position:relative;background-color:#dddddd}.title.svelte-1tr62gy{position:absolute;left:46%;top:10%;font-size:1.2rem}.myBar.svelte-1tr62gy{height:30px}",
  map: null
};
const ProgressBar = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { percentage = 0 } = $$props;
  if ($$props.percentage === void 0 && $$bindings.percentage && percentage !== void 0)
    $$bindings.percentage(percentage);
  $$result.css.add(css$2);
  return `<div class="${"myProgress svelte-1tr62gy"}">
	<div class="${"title text-red svelte-1tr62gy"}"><span aria-hidden="${"true"}">${(0, import_chunks.e)(percentage)}%</span>
		${(0, import_chunks.e)(percentage)}%
		<span aria-hidden="${"true"}">${(0, import_chunks.e)(percentage)}%</span></div>

	<div class="${"myBar bg-green svelte-1tr62gy"}" style="${"width: " + (0, import_chunks.e)(percentage, true) + "%"}"></div>
</div>`;
});
const Skills = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let visible = true;
  setInterval(
    () => {
      visible = !visible;
    },
    1e3
  );
  return `
<div class="${"skills my-20"}"><div class="${"title-section h-10 my-6"}">${visible ? `<h2 class="${"glitch normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-4xl"}">Skills
			</h2>` : ``}</div>

	<div class="${"skills my-6 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-yellow glitch opacity-50"}"><div class="${"item"}"><h3>php</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 75 }, {}, {})}</div>
		<div class="${"item"}"><h3>html / css</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 70 }, {}, {})}</div>
		<div class="${"item"}"><h3>javascript</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 80 }, {}, {})}</div>
		<div class="${"item"}"><h3>typescript</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 80 }, {}, {})}</div>
		<div class="${"item"}"><h3>nodejs</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 65 }, {}, {})}</div>
		<div class="${"item"}"><h3>angular/nestjs</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 65 }, {}, {})}</div>
		<div class="${"item"}"><h3>react</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 80 }, {}, {})}</div>
		<div class="${"item"}"><h3>svelte</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 80 }, {}, {})}</div>
		<div class="${"item"}"><h3>ethereum</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 50 }, {}, {})}</div>
		<div class="${"item"}"><h3>drupal</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 85 }, {}, {})}</div>
		<div class="${"item"}"><h3>symfony</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 60 }, {}, {})}</div>
		<div class="${"item"}"><h3>laravel</h3>
			${(0, import_chunks.v)(ProgressBar, "ProgressBar").$$render($$result, { percentage: 30 }, {}, {})}</div></div></div>
`;
});
function createForms() {
  const { subscribe, set, update } = (0, import_index2.w)([]);
  return {
    subscribe,
    save: (newForm) => update((forms) => {
      const form = forms.find((form2) => form2.form_name === newForm.form_name);
      if (!form) {
        forms = [...forms, newForm];
      } else {
        forms = forms.map((form2) => form2.form_name === newForm.form_name ? newForm : form2);
      }
      return forms;
    }),
    reset: () => set([]),
    resetValues: (form_name2) => update((forms) => {
      forms.map((form) => {
        if (form.form_name === form_name2) {
          form.fields.map((field) => {
            field.value = null;
            form.values[field.name] = null;
          });
        }
        return form;
      });
      return forms;
    }),
    updateFieldValue: (form_name2, field_name, field_value) => update((forms) => {
      const _forms = forms.map((form) => {
        if (form.form_name === form_name2) {
          form.fields.map((field) => {
            if (field.name === field_name) {
              field.value = field_value;
              form.values[field_name] = field_value;
              form.values["touched"] = field_name;
            }
            return field;
          });
        }
        return form;
      });
      return _forms;
    })
  };
}
const storeForms = createForms();
function isRequired(field) {
  if (field.rules) {
    if (field.rules.length > 0) {
      return true;
    }
  }
  return false;
}
function isFieldDuplicated(fields) {
  let seen = {};
  return fields.some(function(currentObject) {
    if (seen.hasOwnProperty(currentObject.name) || seen.hasOwnProperty(currentObject.attributes.id)) {
      return true;
    }
    return seen[currentObject.name] = false, seen[currentObject.attributes.id] = false;
  });
}
const Error2 = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
const Tag = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { prefix } = $$props;
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  return `${((tag) => {
    var _a3;
    var _a2;
    return tag ? `<${(_a3 = prefix.tag) != null ? _a3 : "div"}${(0, import_chunks.d)("class", (_a2 = prefix.classes) == null ? void 0 : _a2.join(" "), 0)}>${(0, import_chunks.i)(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${(0, import_chunks.i)(tag) ? "" : `</${tag}>`}` : "";
  })((_a = prefix.tag) != null ? _a : "div")}`;
});
const Message = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { messages = {} } = $$props;
  const rules = [
    {
      rule: "required",
      message: "This field is required"
    },
    {
      rule: "min",
      message: "This field must be more characters long"
    },
    {
      rule: "max",
      message: "This field must be less characters long"
    },
    {
      rule: "between",
      message: "This field must be between values defined"
    },
    {
      rule: "equal",
      message: "This field must be equal to value defined"
    },
    {
      rule: "email",
      message: "This email format is not valid"
    },
    {
      rule: "extensions",
      message: "Must to allowed file types"
    },
    {
      rule: "maxSize",
      message: "This file has size more than max size"
    },
    { rule: "custom_rule", message: "Error" }
  ];
  const displayError = (rule) => {
    var _a;
    let message = "";
    if (messages[rule]) {
      message += (_a = messages[rule]) != null ? _a : getMessageByRule(rule);
    } else {
      message += getMessageByRule(rule);
    }
    return message;
  };
  const getMessageByRule = (rule) => {
    const data = rules.find((r) => r.rule === rule);
    return data ? data.message : rules.find((r) => r.rule === "custom_rule").message;
  };
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  return `${error ? `<div class="${"invalid-feedback error"}">${(0, import_chunks.e)(displayError(error))}</div>` : ``}`;
});
const Dirty = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${field.validation && field.validation.errors.length ? `${(0, import_chunks.f)(field.validation.errors, (error) => {
    return `${(0, import_chunks.v)(Message, "Message").$$render(
      $$result,
      {
        error,
        messages: field.messages ? field.messages : []
      },
      {},
      {}
    )}`;
  })}` : ``}`;
});
const Input = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a2;
  var _a;
  let { field } = $$props;
  (0, import_chunks.h)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<input${(0, import_chunks.d)("value", (_a2 = field.value) != null ? _a2 : null, 0)}${(0, import_chunks.d)("type", field.attributes.type, 0)}${(0, import_chunks.d)("id", field.attributes.id, 0)}${(0, import_chunks.d)("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${(0, import_chunks.d)("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${(0, import_chunks.d)("min", field.attributes.min, 0)}${(0, import_chunks.d)("max", field.attributes.max, 0)}${(0, import_chunks.d)("step", field.attributes.step, 0)}${(0, import_chunks.d)("autocomplete", field.attributes.autocomplete, 0)}>`;
});
const Select = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a2;
  var _a;
  let { field } = $$props;
  (0, import_chunks.h)();
  const is_multiple = (_a2 = field.extra.multiple) != null ? _a2 : false;
  const checkSelected = (option_value, field_value) => {
    if (is_multiple) {
      if (field_value && field_value.length) {
        const res = field_value.indexOf(option_value) != -1;
        return res;
      } else if (field.value && field.value.length) {
        const res = field.value.indexOf(option_value) != -1;
        return res;
      }
      return false;
    }
    return option_value === field_value;
  };
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<select${(0, import_chunks.d)("name", field.name, 0)}${(0, import_chunks.d)("id", field.attributes.id, 0)}${(0, import_chunks.d)("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${(field.extra && field.extra.multiple ? field.extra.multiple : false) ? "multiple" : ""}>${field.extra ? `${field.extra.options ? `${(0, import_chunks.f)(field.extra.options, (option) => {
    return `<option${(0, import_chunks.d)("value", option.value, 0)} ${checkSelected(option.value, field.value) ? "selected" : ""}>${(0, import_chunks.e)(option.title)}
				</option>`;
  })}` : ``}` : ``}</select>`;
});
const File = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { field } = $$props;
  let inputFile;
  (0, import_chunks.h)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<input${(0, import_chunks.d)("type", field.type, 0)}${(0, import_chunks.d)("name", field.name, 0)}${(0, import_chunks.d)("id", field.attributes.id, 0)}${(0, import_chunks.d)("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)} ${""}${(0, import_chunks.d)("this", inputFile, 0)}>

${field.file ? `<div class="${"file-rules"}"><ul>${(0, import_chunks.f)(Object.entries(field.file), ([rule, ruleValue]) => {
    return `<li><strong>${(0, import_chunks.e)(rule)}</strong>: ${(0, import_chunks.e)(ruleValue)}</li>`;
  })}</ul></div>` : ``}

${``}`;
});
const Textarea = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a2;
  var _a;
  let { field } = $$props;
  (0, import_chunks.h)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<textarea${(0, import_chunks.d)("id", field.attributes.id, 0)}${(0, import_chunks.d)("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${(0, import_chunks.d)("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${(0, import_chunks.d)("rows", field.attributes.rows, 0)}${(0, import_chunks.d)("cols", field.attributes.cols, 0)}>${(0, import_chunks.e)((_a2 = field.value) != null ? _a2 : null, true)}</textarea>`;
});
const Checkbox = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  const dispatch = (0, import_chunks.h)();
  let values = [];
  if (field.extra.items.length > 0) {
    field.extra.items.map((item) => {
      if (item.checked) {
        values = [...values, item.value];
        field.value = field.value ? [...field.value, item.value] : values;
      }
    });
    dispatch("changeValue", { name: field.name, value: values });
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${(0, import_chunks.f)(field.extra.items, (item) => {
    var _a2;
    var _a;
    return `<input${(0, import_chunks.d)("type", field.type, 0)}${(0, import_chunks.d)("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${(0, import_chunks.d)("value", item.value, 0)}${(0, import_chunks.d)("name", item.name, 0)} ${((_a2 = item.checked) != null ? _a2 : false) ? "checked" : ""} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""}>
	<span>${(0, import_chunks.e)(item.title)}</span>`;
  })}`;
});
const Radio = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  (0, import_chunks.h)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${(0, import_chunks.f)(field.extra.items, (item, i) => {
    var _a;
    return `<input${(0, import_chunks.d)("type", field.type, 0)}${(0, import_chunks.d)("class", (_a = field.attributes.classes) == null ? void 0 : _a.join(" "), 0)}${(0, import_chunks.d)("id", item.id, 0)}${(0, import_chunks.d)("name", field.name, 0)}${(0, import_chunks.d)("value", item.value, 0)} ${item.value === field.value ? "checked" : ""}>
	<span>${(0, import_chunks.e)(item.title)}</span>`;
  })}`;
});
const AutoComplete_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".autocomplete-wrapper.svelte-1m9l8b1.svelte-1m9l8b1{position:relative;width:100%}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items.svelte-1m9l8b1{margin-bottom:10px;width:100%;display:flex;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;gap:10px}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item.svelte-1m9l8b1{font-size:0.75rem;padding:0.5rem;background-color:#ff3e00;color:white;border-radius:5px}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item .deselect.svelte-1m9l8b1{border-radius:50%;width:15px;height:15px;padding:2px 7px 3px 7px;font-size:0.6rem;background-color:#333333;border:solid 1px rgba(255, 255, 255, 0.2);color:white}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .item .deselect.svelte-1m9l8b1:hover{box-shadow:0px 0px 4px 1px rgba(255, 255, 255, 0.8)}.autocomplete-wrapper.svelte-1m9l8b1 .selected-items .deselect.svelte-1m9l8b1{cursor:pointer}.autocomplete-wrapper.svelte-1m9l8b1 .list-items.svelte-1m9l8b1{box-shadow:0 2px 3px 0 rgba(249, 251, 253, 0.24);margin-bottom:20px}.autocomplete-wrapper.svelte-1m9l8b1 .list-items ul.svelte-1m9l8b1,.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1{list-style:none;padding:0;margin:0;color:black;background-color:rgb(201, 201, 201)}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1{border-bottom:1px dashed #999999;padding:0.75rem;cursor:pointer}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.done.svelte-1m9l8b1{background-color:#1f2d38 !important;border-bottom-color:transparent;color:white;text-align:center}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.done.svelte-1m9l8b1:hover{border-bottom-color:transparent}.autocomplete-wrapper.svelte-1m9l8b1 .list-items li.svelte-1m9l8b1:hover{background-color:rgba(255, 64, 0, 0.6117647059);border-bottom:1px dashed #ff3e00;color:white}",
  map: null
};
const AutoComplete = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { field } = $$props;
  (0, import_chunks.h)();
  let value = null;
  let itemsFiltered = [];
  let selectedItems = [];
  let showList = false;
  if (field.extra) {
    if (field.extra.loadItemes) {
      field.extra.loadItemes;
    }
    if (field.extra.filter_length) {
      field.extra.filter_length;
    }
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  $$result.css.add(css$1);
  return `<div class="${"autocomplete-wrapper svelte-1m9l8b1"}"><div class="${"selected-items svelte-1m9l8b1"}">${(0, import_chunks.f)(selectedItems, (item) => {
    return `<div class="${"item svelte-1m9l8b1"}"><span>${(0, import_chunks.e)(item.title)}</span>
				<span class="${"deselect svelte-1m9l8b1"}">x</span>
			</div>`;
  })}</div>

	<input type="${"text"}"${(0, import_chunks.d)("id", field.attributes.id, 0)} class="${(0, import_chunks.e)((0, import_chunks.j)((_a = field.attributes.classes) == null ? void 0 : _a.join(" ")), true) + " svelte-1m9l8b1"}"${(0, import_chunks.d)("autocorrect", field.attributes.autocorrect, 0)}${(0, import_chunks.d)("autocomplete", field.attributes.autocomplete, 0)}${(0, import_chunks.d)("placeholder", field.attributes.placeholder, 0)}${(0, import_chunks.d)("value", value, 0)}>

	${itemsFiltered.length && showList ? `<div class="${"list-items svelte-1m9l8b1"}"><ul class="${"svelte-1m9l8b1"}">${(0, import_chunks.f)(itemsFiltered, (item) => {
    return `<li class="${"svelte-1m9l8b1"}">${(0, import_chunks.e)(item.title)}</li>`;
  })}
				<li class="${"done svelte-1m9l8b1"}">Close
				</li></ul></div>` : ``}
</div>`;
});
const Label = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${field.attributes ? `${field.attributes.label ? `<label${(0, import_chunks.d)("for", field.attributes.id, 0)} class="${"label"}">${(0, import_chunks.e)(field.attributes.label)}</label>` : ``}` : ``}`;
});
const Formly = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  const ListFieldType = [
    { type: "input", component: Input },
    { type: "select", component: Select },
    { type: "file", component: File },
    { type: "textarea", component: Textarea },
    { type: "checkbox", component: Checkbox },
    { type: "radio", component: Radio },
    {
      type: "autocomplete",
      component: AutoComplete
    }
  ];
  const getFieldByType = ({ type }) => {
    var _a2;
    return (_a2 = ListFieldType.find((field) => field.type === type)) == null ? void 0 : _a2.component;
  };
  let { fields = [] } = $$props;
  let { btnSubmit = { text: "Submit" } } = $$props;
  let { btnReset = { text: "Reset" } } = $$props;
  let { form_name: form_name2 = "" } = $$props;
  let { realtime = false } = $$props;
  let _formEl;
  (0, import_chunks.h)();
  let values = {};
  let current_form = { form_name: form_name2, fields, values, valid: true };
  const is_duplicated = isFieldDuplicated(fields);
  storeForms.save(current_form);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0)
    $$bindings.fields(fields);
  if ($$props.btnSubmit === void 0 && $$bindings.btnSubmit && btnSubmit !== void 0)
    $$bindings.btnSubmit(btnSubmit);
  if ($$props.btnReset === void 0 && $$bindings.btnReset && btnReset !== void 0)
    $$bindings.btnReset(btnReset);
  if ($$props.form_name === void 0 && $$bindings.form_name && form_name2 !== void 0)
    $$bindings.form_name(form_name2);
  if ($$props.realtime === void 0 && $$bindings.realtime && realtime !== void 0)
    $$bindings.realtime(realtime);
  return `${current_form ? `${is_duplicated ? `${(0, import_chunks.v)(Error2, "Error").$$render($$result, {}, {}, {
    default: () => {
      return `<p><code><b>Error! Detect duplicate fields(name or id attributes), make sure you put unique name
						and id for each field.</b></code></p>`;
    }
  })}` : `<form${(0, import_chunks.d)("this", _formEl, 0)}>${(0, import_chunks.f)(current_form.fields, (field) => {
    var _a2;
    return `${((_a2 = field.prefix) == null ? void 0 : _a2.tag) ? `${(0, import_chunks.v)(Tag, "Tag").$$render($$result, { prefix: field.prefix }, {}, {
      default: () => {
        return `${(0, import_chunks.v)(Label, "Label").$$render($$result, { field }, {}, {})}
						${(0, import_chunks.v)(getFieldByType(field) || import_chunks.m, "svelte:component").$$render($$result, { field }, {}, {})}
						${(0, import_chunks.v)(Dirty, "Dirty").$$render($$result, { field }, {}, {})}
					`;
      }
    })}` : `${(0, import_chunks.v)(Label, "Label").$$render($$result, { field }, {}, {})}
					${(0, import_chunks.v)(getFieldByType(field) || import_chunks.m, "svelte:component").$$render($$result, { field }, {}, {})}
					${(0, import_chunks.v)(Dirty, "Dirty").$$render($$result, { field }, {}, {})}`}`;
  })}
			<button type="${"submit"}"${(0, import_chunks.d)(
    "class",
    btnSubmit.classes && ((_a = btnSubmit.classes) == null ? void 0 : _a.length) ? (_b = btnSubmit.classes) == null ? void 0 : _b.join(" ") : null,
    0
  )}>${(0, import_chunks.e)(btnSubmit.text)}</button>
			<button type="${"reset"}"${(0, import_chunks.d)(
    "class",
    btnReset.classes && ((_c = btnReset.classes) == null ? void 0 : _c.length) ? (_d = btnReset.classes) == null ? void 0 : _d.join(" ") : null,
    0
  )}>${(0, import_chunks.e)(btnReset.text)}</button></form>`}` : ``}`;
});
const Form_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error{color:red;font-size:0.75em}",
  map: null
};
const classInput = "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-4 mb-2 bg-zinc-900 opacity-50";
const classPrefix = "mb-6";
const classBtnSubmit = "text-4xl glitch";
const classBtnCancel = "text-3xl text-red glitch";
const form_name = "form_contact";
const Form = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "fullname",
      value: "kamal",
      attributes: {
        type: "text",
        id: "fullname",
        classes: [classInput],
        placeholder: "Full name",
        autocomplete: "off"
      },
      rules: ["required"],
      messages: { required: "The full name is required" },
      prefix: { tag: "div", classes: [classPrefix] }
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
        autocomplete: "off"
      },
      rules: ["required", "email"],
      messages: { required: "The email is required" },
      prefix: { tag: "div", classes: [classPrefix] }
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
        autocomplete: "off"
      },
      rules: ["required"],
      messages: { required: "The subject is required" },
      prefix: { tag: "div", classes: [classPrefix] }
    },
    {
      type: "textarea",
      name: "message",
      value: "salam alikom",
      attributes: {
        type: "text",
        id: "message",
        classes: [classInput],
        placeholder: "Message"
      },
      rules: ["required"],
      messages: { required: "The message is required" },
      prefix: { tag: "div", classes: [classPrefix] }
    }
  ];
  $$result.css.add(css);
  return `${(0, import_chunks.v)(Formly, "Formly").$$render(
    $$result,
    {
      fields,
      form_name,
      btnSubmit: { text: "Send", classes: [classBtnSubmit] },
      btnReset: {
        text: "Cancel",
        classes: [classBtnCancel]
      }
    },
    {},
    {}
  )}


<div id="${"defaultModal"}" tabindex="${"-1"}" class="${[
    "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex",
    "hidden"
  ].join(" ").trim()}" aria-modal="${"true"}" role="${"dialog"}"><div class="${"relative p-4 w-full max-w-2xl h-full md:h-auto"}">
		<div class="${"relative bg-zinc-900 rounded-lg shadow dark:bg-gray-700"}">
			<div class="${"flex justify-between items-start p-4 rounded-t"}"><h3 class="${"text-xl font-semibold"}">Thank you!</h3>
				<button type="${"button"}" class="${"text-gray-400 bg-transparent hover:bg-green hover:text-red rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"}" data-modal-toggle="${"defaultModal"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>
					<span class="${"sr-only"}">Close modal</span></button></div>
			
			<div class="${"p-6 space-y-6"}"><p>I will response to you asap.</p></div></div></div>
</div>`;
});
const ContactForm = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"contact glitch mb-6"}"><div class="${"title-section my-6"}"><h2 class="${"normal-case text-2xl tracking-tight font-extrabold sm:text-2xl md:text-4xl"}">Contact me
		</h2></div>
	${(0, import_chunks.v)(Form, "FormContact").$$render($$result, {}, {}, {})}</div>
`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"sm:w-full lg:w-1/2 m-auto md:mt-10 sm:mt-8 sm:px-4"}">${(0, import_chunks.v)(Biography, "Biography").$$render($$result, {}, {}, {})}

	${(0, import_chunks.v)(Skills, "Skills").$$render($$result, {}, {}, {})}

	${(0, import_chunks.v)(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</div>`;
});
