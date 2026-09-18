import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const content=sqliteTable('content',{id:text('id').primaryKey(),kind:text('kind').notNull(),data:text('data').notNull(),position:integer('position').notNull().default(0),hidden:integer('hidden').notNull().default(0),revision:integer('revision').notNull().default(1),updated:text('updated').notNull()});
export const owner=sqliteTable('owner',{key:text('key').primaryKey(),userId:text('user_id').notNull()});
export const uploads=sqliteTable('uploads',{id:text('id').primaryKey(),name:text('name').notNull(),type:text('type').notNull(),size:integer('size').notNull()});
