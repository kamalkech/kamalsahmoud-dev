// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as SibApiV3Sdk from "@sendinblue/client";

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.SENDBLUE_KEY ?? ""
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const values = await req.body;

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.subject = values.subject;
  sendSmtpEmail.htmlContent = values.message;
  sendSmtpEmail.sender = { name: values.fullname, email: values.email };
  sendSmtpEmail.to = [{ email: "maroc.develop@gmail.com", name: "kamal.gg" }];

  let name = "";
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
      name = "success";
    },
    function (error) {
      console.error(error);
      name = "error";
    }
  );

  res.status(200).json({ name });
}
