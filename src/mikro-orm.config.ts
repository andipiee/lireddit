import { __password__, __prod__, __user__ } from "./constants";
import { Post } from "./entitites/Post";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        glob: "!(*.d).{js,ts}"
    },
    entities: [Post],
    user: __user__,
    password: __password__,
    allowGlobalContext: true,
    dbName: "lireddit",
    type: "postgresql",
    debug: !__prod__
} as const;

