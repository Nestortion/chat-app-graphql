import { relations } from "drizzle-orm";
import { chatRoomMembers, chatRooms, userMessages, users } from "./schema";

export const userRelations = relations(users, ({ many }) => ({
	chatRoomMembers: many(chatRoomMembers),
	userMessages: many(userMessages)
}))

export const chatRoomsRelations = relations(chatRooms, ({ many }) => ({
	chatRoomMembers: many(chatRoomMembers),
	chatMessages: many(userMessages)
}))

export const chatRoomMembersRelations = relations(chatRoomMembers, ({ one }) => ({
	user: one(users, { fields: [chatRoomMembers.userId], references: [users.id] }),
	chatRoom: one(chatRooms, { fields: [chatRoomMembers.chatRoomId], references: [chatRooms.id] })
}))

export const userMessagesRelations = relations(userMessages, ({ one }) => ({
	user: one(users, { fields: [userMessages.userId], references: [users.id] }),
	chatRoom: one(chatRooms, { fields: [userMessages.chatRoomId], references: [chatRooms.id] })
}))
