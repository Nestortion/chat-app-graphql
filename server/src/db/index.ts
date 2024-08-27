import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"
import * as relations from "./schema/relation"
import * as models from "./schema/schema"

export const client = mysql.createPool({ uri: process.env.DB_URL!, ssl: { rejectUnauthorized: false } })
export const db = drizzle(client, { mode: "default", schema: { ...models, ...relations } })
