import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
	id: varchar("id", { length: 100 }).primaryKey(),
	username: varchar("username", { length: 20 }).unique().notNull(),
	password: varchar("password", { length: 100 }).notNull()
})

export const chatRooms = mysqlTable("chat_rooms", {
	id: int("id").autoincrement().primaryKey(),
})

export const chatRoomMembers = mysqlTable("chat_room_members", {
	id: int("id").autoincrement().primaryKey(),
	chatRoomId: int("chat_room_id").references(() => chatRooms.id),
	userId: varchar("user_id", { length: 100 }).references(() => users.id).notNull(),
})

export const userMessages = mysqlTable("user_messages", {
	id: int("id").autoincrement().primaryKey(),
	userId: varchar("user_id", { length: 100 }).references(() => users.id).notNull(),
	message: text("message").notNull(),
	chatRoomId: int("chat_room_id").references(() => chatRooms.id),
})

export type User = typeof users.$inferSelect
export type ChatRoom = typeof chatRooms.$inferSelect
export type ChatRoomMember = typeof chatRoomMembers.$inferSelect
export type UserMessage = typeof userMessages.$inferSelect
