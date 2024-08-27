import 'dotenv/config'
import { migrate } from 'drizzle-orm/mysql2/migrator'
import { db, client } from './src/db'

// This will run migrations on the database, skipping the ones already applied

const main = async () => {
	await migrate(db, { migrationsFolder: './drizzle' })
	client.end()
}

main()
