# Migration `20210126230455-changing-json-fields`

This migration has been generated at 1/26/2021, 3:04:55 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Candidate" DROP COLUMN "recentWorkingAreas",
ADD COLUMN     "recentWorkingAreas" JSONB,
DROP COLUMN "workingExperience",
ADD COLUMN     "workingExperience" JSONB,
DROP COLUMN "education",
ADD COLUMN     "education" JSONB

ALTER TABLE "Company" DROP COLUMN "officeLocations",
ADD COLUMN     "officeLocations" JSONB

ALTER TABLE "Vacancy" DROP COLUMN "industries",
ADD COLUMN     "industries" JSONB,
DROP COLUMN "locations",
ADD COLUMN     "locations" JSONB
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210126224856-changed-vacancy-model-to-allow-for-multiple-matches-as-foreign-key..20210126230455-changing-json-fields
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
@@ -62,20 +62,20 @@
   active               Boolean   @default(true)
   employments          String[]
   recentJob            String?
   values               String[]
-  recentWorkingAreas   Json[]
+  recentWorkingAreas   Json?
   recentAreaExperience String?
   preferredCompanySize String?
   recentAnnualIncome   String?
   avatar               String    @default("")
   skills               String[]
   resumeId             String?
   resumeName           String?
-  workingExperience    Json[]
+  workingExperience    Json?
   interests            String[]
   highestDegree        String?
-  education            Json[]
+  education            Json?
   location             String?
   locationCoordinates  Json?
   abilityToRelocate    Boolean   @default(false)
   socialMedia          Json?
@@ -98,9 +98,9 @@
   headquartersLocation    String
   headquartersCoordinates Json?
   values                  String[]
   socialMedia             Json?
-  officeLocations         Json[]
+  officeLocations         Json?
   logo                    String?
   background              String?
   images                  String[]
   description             String?
@@ -162,9 +162,9 @@
   id                  String     @id @default(uuid())
   createdAt           DateTime   @default(now())
   matching            Matching[]
   title               String
-  industries          Json[]
+  industries          Json?
   salary              String?
   company             Company?   @relation(fields: [companyId], references: [id])
   companyId           String?
   recruiter           Recruiter? @relation(fields: [recruiterId], references: [id])
@@ -174,9 +174,9 @@
   employment          String[]
   description         String?
   location            String[]
   locationCoordinates Json?
-  locations           Json[]
+  locations           Json?
   status              String?
   responsibilities    String[]
   requirements        String[]
   candidates          String[]
```


