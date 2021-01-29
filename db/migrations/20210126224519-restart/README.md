# Migration `20210126224519-restart`

This migration has been generated at 1/26/2021, 2:45:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "Matching_companyId_unique"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210123030815-initial-migration-for-models-v1..20210126224519-restart
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
@@ -108,9 +108,9 @@
   isPremium               Boolean     @default(false)
   isFilled                Boolean     @default(false)
   fillSteps               String[]
   fillProgress            Int         @default(0)
-  matching                Matching?
+  matches                 Matching[]
   vacancies               Vacancy[]
 }
 model Recruiter {
```


