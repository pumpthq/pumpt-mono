# Migration `20210126224856-changed-vacancy-model-to-allow-for-multiple-matches-as-foreign-key`

This migration has been generated at 1/26/2021, 2:48:56 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "Matching_vacancyId_unique"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210126224519-restart..20210126224856-changed-vacancy-model-to-allow-for-multiple-matches-as-foreign-key
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -160,9 +160,9 @@
 model Vacancy {
   id                  String     @id @default(uuid())
   createdAt           DateTime   @default(now())
-  matching            Matching?
+  matching            Matching[]
   title               String
   industries          Json[]
   salary              String?
   company             Company?   @relation(fields: [companyId], references: [id])
```


