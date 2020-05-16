import { TodoState } from "./state.ts";
import { Application, Router } from "https://deno.land/x/oak@v4.0.0/mod.ts";

const state = new TodoState();
state.insert({
  createdOn: new Date(),
  title: "My First Todo",
  description: "This is my first todo!",
});

const router = new Router();

router
  .get("/", ({ response }) => {
    response.body = "Acesse o endpoint /todos/";
  })
  .get("/todos", ({ response }) => {
    response.body = state.get();
  })
  .get("/todos/:id", ({ params, response }) => {
    const { id } = params;
    if (id) {
      response.body = state.get().filter((t) => t.title == params.id);
    }
  });

const app = new Application();
app.use(router.routes());

console.log("Starting API");

await app.listen("127.0.0.1:8000");
