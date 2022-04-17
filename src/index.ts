import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entitites/Post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);

    const post = orm.em.fork({}).create(Post, { title: "my first post" });
    await orm.em.persistAndFlush(post);
    console.log("---------slq 2----------")
    await orm.em.nativeInsert(Post, { title: "my first post" });
};

main().catch((err) => {
    console.log(err);
})