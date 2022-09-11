// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { TransactionalEmailsApi, SendSmtpEmail } from "sib-api-v3-typescript";
//
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   let apiInstance: any = new TransactionalEmailsApi();
  //
  //   let apiKey = apiInstance.authentications["apiKey"];
  //   apiKey.apiKey = process.env.SENDBLUE_KEY;
  //
  //   let sendSmtpEmail = new SendSmtpEmail();
  //
  //   sendSmtpEmail.subject = "My {{params.subject}}";
  //   sendSmtpEmail.htmlContent =
  //     "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
  //   sendSmtpEmail.sender = { name: "John Doe", email: "kamal.develop@gmail.com" };
  //   sendSmtpEmail.to = [{ email: "maroc.develop@gmail.com", name: "Jane Doe" }];
  //
  //   apiInstance.sendTransacEmail(sendSmtpEmail).then(
  //     function (data) {
  //       console.log(
  //         "API called successfully. Returned data: " + JSON.stringify(data)
  //       );
  //     },
  //     function (error) {
  //       console.error(error);
  //     }
  //   );
  //
  res.status(200).json({ name: "okok" });
}
