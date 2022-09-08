var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  POST: () => POST
});
module.exports = __toCommonJS(stdin_exports);
var import_env_private = require("../../../../chunks/env-private.js");
var SibApiV3Sdk = __toESM(require("sib-api-v3-typescript"));
async function POST({ request }) {
  let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
  let apiKey = apiInstance.authentications["apiKey"];
  apiKey.apiKey = import_env_private.e.SENDBLUE_KEY;
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  const values = await request.json();
  sendSmtpEmail.subject = "Contact from kamal.gg";
  sendSmtpEmail.htmlContent = values.message;
  sendSmtpEmail.sender = { name: values.fullname, email: values.email };
  sendSmtpEmail.to = [{ email: import_env_private.e.SENDBLUE_SENDER, name: import_env_private.e.SENDBLUE_NAME }];
  const result = apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function(data) {
      return true;
    },
    function(error) {
      return false;
    }
  );
  return new Response(JSON.stringify({ result }), {
    status: 200
  });
}
