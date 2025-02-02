import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as Schema from './schema'
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql, schema: Schema, logger: true });
