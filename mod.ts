import { Application, send } from "https://deno.land/x/oak@v6.1.0/mod.ts";


const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {
  const start = Date.now()
  await next();
  const delta = Date.now() - start 
  console.log("start", start);
  console.log("delta", delta)
  ctx.response.headers.set("X-Response-Time", `${delta}ms`)
});

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname
  const fileWhiteList = [
    "/index.html",
    "/javascripts/script.js",
    "/stylesheets/style.css",
    "/images/favicon.png",
  ];
  await send(ctx, filePath, {
    root: `${Deno.cwd()}/public` 
  })
});


if (import.meta.main) {
  await app.listen({
    port: PORT,
  });
}
