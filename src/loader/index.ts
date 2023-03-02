import type { Application as ExpressApplication } from "express";
import { default as ExpressLoader } from "./express";
import "./jt400";

export default async ({ expressApp }: { expressApp: ExpressApplication }) => {
  ExpressLoader({ app: expressApp });
  console.log("✌️ Express loaded");
};
