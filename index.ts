import { Application, Router } from "https://deno.land/x/oak/mod.ts";

interface Todo {
    id: string;
    title: string;
    createdOn: Date;
}

const todoDatabase = new Map<string, Todo>();
todoDatabase.set('myTodo', {
    id: "myTodo",
    createdOn: new Date(),
    title: "My Todo"
})

const router = new Router();
router
    .get("/", (ctx) => {
        ctx.response.body = 'my api';
    })
    .get("/todos", (context) => {
        context.response.body = Array.from(todoDatabase);
    })

const app = new Application();
app.use(router.routes());

await app.listen("127.0.0.1:8000");