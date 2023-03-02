import express from "express";
import type { Request, Response } from "express";

export default ({ app }: { app: express.Application }) => {
  app.enable("trust proxy");
  app.use(require("method-override")());

  app.get("/", (_: Request, res: Response) => {
    res.status(200).json({
      resp_cde: 201,
      resp_datetime: new Date().toISOString(),
      resp_msg: "This is MCash POS Voucher API.",
    });
  });

  app.use(express.json());

  
};
