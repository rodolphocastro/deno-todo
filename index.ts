import { Todo } from "./Models/Todo.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const todoDatabase = new Map<string, Todo>();
todoDatabase.set('myTodo', {    
    createdOn: new Date(),
    title: "My Todo",
    description: "My first todo"
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

console.log("Starting API");

await app.listen("127.0.0.1:8000");