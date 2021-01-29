# Migration `20210126233646-candidate-update`

This migration has been generated at 1/26/2021, 3:36:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Candidate" ADD COLUMN     "interestWorkingAreas" TEXT[]
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210126230825-changed-candidate-matching-field..20210126233646-candidate-update
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
@@ -63,8 +63,9 @@
   employments          String[]
   recentJob            String?
   values               String[]
   recentWorkingAreas   Json?
+  interestWorkingAreas String[]
   recentAreaExperience String?
   preferredCompanySize String?
   recentAnnualIncome   String?
   avatar               String     @default("")
```


