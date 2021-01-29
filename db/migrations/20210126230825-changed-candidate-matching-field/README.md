# Migration `20210126230825-changed-candidate-matching-field`

This migration has been generated at 1/26/2021, 3:08:25 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
DROP INDEX "Matching_candidateId_unique"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210126230455-changing-json-fields..20210126230825-changed-candidate-matching-field
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
@@ -52,23 +52,23 @@
   privateData        String?
 }
 model Candidate {
-  id                   String    @id @default(uuid())
-  updatedAt            DateTime  @updatedAt
-  user                 User?     @relation(fields: [userId], references: [id])
+  id                   String     @id @default(uuid())
+  updatedAt            DateTime   @updatedAt
+  user                 User?      @relation(fields: [userId], references: [id])
   userId               String?
   firstName            String?
   lastName             String?
-  active               Boolean   @default(true)
+  active               Boolean    @default(true)
   employments          String[]
   recentJob            String?
   values               String[]
   recentWorkingAreas   Json?
   recentAreaExperience String?
   preferredCompanySize String?
   recentAnnualIncome   String?
-  avatar               String    @default("")
+  avatar               String     @default("")
   skills               String[]
   resumeId             String?
   resumeName           String?
   workingExperience    Json?
@@ -76,14 +76,14 @@
   highestDegree        String?
   education            Json?
   location             String?
   locationCoordinates  Json?
-  abilityToRelocate    Boolean   @default(false)
+  abilityToRelocate    Boolean    @default(false)
   socialMedia          Json?
-  isFilled             Boolean   @default(false)
+  isFilled             Boolean    @default(false)
   fillSteps            String[]
-  fillProgress         Int       @default(0)
-  matching             Matching?
+  fillProgress         Int        @default(0)
+  matches              Matching[]
 }
 // REVISIT: Should a company only have one recruiter or the option to add more?
 model Company {
```


