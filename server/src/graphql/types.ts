
export const types = `
type User {
	id: Int
	username: String
	password: String
}

type ChatRoom {
	id: Int
	members: [User]
}

type UserMessage {
	id: Int
	message: String
	userId: Int
	receiver: Int
}

type Query {
	users: [User] 
	user(userId :Int): User
	userMessages(chatRoomId: String): [UserMessage]
}

type Mutation {
	createUser(username: String, password: String): User
	createChatRoom(members: [User]): ChatRoom
	createUserMessage(chatRoomId: Int, message: String): UserMessage
}

type Subscription {
	chatCreated: UserMessage
}


`
