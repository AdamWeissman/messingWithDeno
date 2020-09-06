import { Router } from "https://deno.land/x/oak@v6.1.0/mod.ts";

const router = new Router()

router.get("/", (ctx) => {
  ctx.response.body = `
  H   H  E E E  Y   Y
  H   H  E       Y Y
  H H H  E E E    Y
  H   H  E        Y 
  H   H  E E E    Y
  `
});

export default router