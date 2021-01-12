# Migration `20210112024159-test-migration`

This migration has been generated at 1/11/2021, 6:41:59 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT E'user',

    PRIMARY KEY ("id")
)

CREATE TABLE "Session" (
"id" SERIAL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "handle" TEXT NOT NULL,
    "userId" TEXT,
    "hashedSessionToken" TEXT,
    "antiCSRFToken" TEXT,
    "publicData" TEXT,
    "privateData" TEXT,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

CREATE UNIQUE INDEX "Session.handle_unique" ON "Session"("handle")

ALTER TABLE "Session" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210112023344-initial-migration..20210112024159-test-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,10 +1,10 @@
 // This is your Prisma schema file,
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
-  provider = "sqlite"
-  url = "***"
+  provider = "postgres"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -12,9 +12,9 @@
 // --------------------------------------
 model User {
-  id             Int       @default(autoincrement()) @id
+  id             String    @id @default(uuid())
   createdAt      DateTime  @default(now())
   updatedAt      DateTime  @updatedAt
   name           String?
   email          String    @unique
@@ -23,15 +23,15 @@
   sessions       Session[]
 }
 model Session {
-  id                 Int       @default(autoincrement()) @id
+  id                 Int       @id @default(autoincrement())
   createdAt          DateTime  @default(now())
   updatedAt          DateTime  @updatedAt
   expiresAt          DateTime?
   handle             String    @unique
   user               User?     @relation(fields: [userId], references: [id])
-  userId             Int?
+  userId             String?
   hashedSessionToken String?
   antiCSRFToken      String?
   publicData         String?
   privateData        String?
```


