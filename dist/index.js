"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const Post_1 = require("./entitites/Post");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [Post_1.Post],
        user: "andipiee",
        password: "star13star",
        allowGlobalContext: true,
        dbName: "lireddit",
        type: "postgresql",
        debug: !constants_1.__prod__
    });
    const post = orm.em.fork({}).create(Post_1.Post, { title: "my first post" });
    await orm.em.persistAndFlush(post);
    console.log("---------slq 2----------");
    await orm.em.nativeInsert(Post_1.Post, { title: "my first post" });
};
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map