import { Router } from "https://deno.land/x/oak@v6.1.0/mod.ts";
import * as planets from "./models/planets.ts";

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

router.get("/planets", (ctx) => {
  ctx.response.body = planets.getAllPlanets();
})


export default router