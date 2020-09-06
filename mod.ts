import { Application, send } from "https://deno.land/x/oak@v6.1.0/mod.ts";
import api from "./api.ts"

const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {
  
  await next();
   
  
});

app.use(api.routes())


app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname
  const fileWhiteList = [
    "/index.html",
    "/javascripts/script.js",
    "/stylesheets/style.css",
    "/images/favicon.png",
  ];
    if (fileWhiteList.includes(filePath)){
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public` 
    })
    }
  });


if (import.meta.main) {
  await app.listen({
    port: PORT,
  });
}
