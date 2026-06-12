import { defineMiddleware } from "astro:middleware";
import { getLang } from "./i18n/utils";

export const onRequest = defineMiddleware((context, next) => {
  context.locals.lang = getLang(context.currentLocale || context.params.lang);
  return next();
});
