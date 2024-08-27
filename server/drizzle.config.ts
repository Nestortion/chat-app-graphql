export default {
	schema: "./src/db/schema/schema.ts",
	out: "./drizzle",
	dialect: "mysql",
	dbCredentials: {
		url: process.env.DB_URL,
	},
};
