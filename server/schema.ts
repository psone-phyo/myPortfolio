import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const projectTable = pgTable("projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: integer().notNull(),
  created_at: date().notNull().default("now()"),
});
