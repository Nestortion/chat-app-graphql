CREATE TABLE `chat_room_members` (
	`id` int AUTO_INCREMENT NOT NULL,
	`chat_room_id` int,
	`user_id` varchar(100) NOT NULL,
	CONSTRAINT `chat_room_members_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `chat_rooms` (
	`id` int AUTO_INCREMENT NOT NULL,
	CONSTRAINT `chat_rooms_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` varchar(100) NOT NULL,
	`message` text NOT NULL,
	`chat_room_id` int,
	CONSTRAINT `user_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(100) NOT NULL,
	`username` varchar(20) NOT NULL,
	`password` varchar(100) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_username_unique` UNIQUE(`username`)
);
--> statement-breakpoint
ALTER TABLE `chat_room_members` ADD CONSTRAINT `chat_room_members_chat_room_id_chat_rooms_id_fk` FOREIGN KEY (`chat_room_id`) REFERENCES `chat_rooms`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `chat_room_members` ADD CONSTRAINT `chat_room_members_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_messages` ADD CONSTRAINT `user_messages_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_messages` ADD CONSTRAINT `user_messages_chat_room_id_chat_rooms_id_fk` FOREIGN KEY (`chat_room_id`) REFERENCES `chat_rooms`(`id`) ON DELETE no action ON UPDATE no action;