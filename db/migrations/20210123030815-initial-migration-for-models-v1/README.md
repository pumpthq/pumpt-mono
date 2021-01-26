# Migration `20210123030815-initial-migration-for-models-v1`

This migration has been generated at 1/22/2021, 7:08:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Role" AS ENUM ('CANDIDATE', 'RECRUITER', 'ADMIN')

CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "isRejected" BOOLEAN NOT NULL DEFAULT false,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    "restorePassToken" TEXT NOT NULL DEFAULT E'',
    "confirmEmailToken" TEXT NOT NULL DEFAULT E'',
    "role" "Role" NOT NULL,
    "company" TEXT,
    "linkedInData" JSONB,

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

CREATE TABLE "Candidate" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "employments" TEXT[],
    "recentJob" TEXT,
    "values" TEXT[],
    "recentWorkingAreas" JSONB[],
    "recentAreaExperience" TEXT,
    "preferredCompanySize" TEXT,
    "recentAnnualIncome" TEXT,
    "avatar" TEXT NOT NULL DEFAULT E'',
    "skills" TEXT[],
    "resumeId" TEXT,
    "resumeName" TEXT,
    "workingExperience" JSONB[],
    "interests" TEXT[],
    "highestDegree" TEXT,
    "education" JSONB[],
    "location" TEXT,
    "locationCoordinates" JSONB,
    "abilityToRelocate" BOOLEAN NOT NULL DEFAULT false,
    "socialMedia" JSONB,
    "isFilled" BOOLEAN NOT NULL DEFAULT false,
    "fillSteps" TEXT[],
    "fillProgress" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
)

CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT[],
    "foundDate" TEXT NOT NULL,
    "employeesAmount" TEXT NOT NULL,
    "headquartersLocation" TEXT NOT NULL,
    "headquartersCoordinates" JSONB,
    "values" TEXT[],
    "socialMedia" JSONB,
    "officeLocations" JSONB[],
    "logo" TEXT,
    "background" TEXT,
    "images" TEXT[],
    "description" TEXT,
    "quoteOrMotto" TEXT NOT NULL DEFAULT E'',
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "isFilled" BOOLEAN NOT NULL DEFAULT false,
    "fillSteps" TEXT[],
    "fillProgress" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
)

CREATE TABLE "Recruiter" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "companyId" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "avatar" TEXT,
    "position" TEXT,

    PRIMARY KEY ("id")
)

CREATE TABLE "Email" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "type" TEXT NOT NULL,
    "sent" BOOLEAN NOT NULL DEFAULT false,
    "retries" INTEGER NOT NULL DEFAULT 0,
    "failed" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
)

CREATE TABLE "Keywords" (
    "id" TEXT NOT NULL,
    "keywordList" TEXT[],

    PRIMARY KEY ("id")
)

CREATE TABLE "Matching" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "candidateId" TEXT,
    "companyId" TEXT,
    "vacancyId" TEXT,
    "pdfScore" INTEGER NOT NULL DEFAULT 0,
    "score" INTEGER NOT NULL DEFAULT 0,
    "breakdown" JSONB,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "isBookmarked" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
)

CREATE TABLE "Vacancy" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "industries" JSONB[],
    "salary" TEXT,
    "companyId" TEXT,
    "recruiterId" TEXT,
    "experience" TEXT,
    "degree" TEXT,
    "employment" TEXT[],
    "description" TEXT,
    "location" TEXT[],
    "locationCoordinates" JSONB,
    "locations" JSONB[],
    "status" TEXT,
    "responsibilities" TEXT[],
    "requirements" TEXT[],
    "candidates" TEXT[],
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3),
    "closeFormResponse" TEXT,
    "keywords" TEXT[],

    PRIMARY KEY ("id")
)

CREATE TABLE "Conversation" (
    "id" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "sentBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seen" BOOLEAN NOT NULL DEFAULT false,
    "conversationId" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

CREATE UNIQUE INDEX "Session.handle_unique" ON "Session"("handle")

CREATE UNIQUE INDEX "Candidate_userId_unique" ON "Candidate"("userId")

CREATE UNIQUE INDEX "Company.name_unique" ON "Company"("name")

CREATE UNIQUE INDEX "Recruiter_userId_unique" ON "Recruiter"("userId")

CREATE UNIQUE INDEX "Matching_candidateId_unique" ON "Matching"("candidateId")

CREATE UNIQUE INDEX "Matching_companyId_unique" ON "Matching"("companyId")

CREATE UNIQUE INDEX "Matching_vacancyId_unique" ON "Matching"("vacancyId")

ALTER TABLE "Session" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Candidate" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Recruiter" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Recruiter" ADD FOREIGN KEY("companyId")REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Email" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Matching" ADD FOREIGN KEY("candidateId")REFERENCES "Candidate"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Matching" ADD FOREIGN KEY("companyId")REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Matching" ADD FOREIGN KEY("vacancyId")REFERENCES "Vacancy"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Vacancy" ADD FOREIGN KEY("companyId")REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Vacancy" ADD FOREIGN KEY("recruiterId")REFERENCES "Recruiter"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "Message" ADD FOREIGN KEY("conversationId")REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210123030815-initial-migration-for-models-v1
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,202 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgres"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+// --------------------------------------
+enum Role {
+  CANDIDATE
+  RECRUITER
+  ADMIN
+}
+
+model User {
+  id                String     @id @default(uuid())
+  createdAt         DateTime   @default(now())
+  updatedAt         DateTime   @updatedAt
+  email             String     @unique
+  hashedPassword    String?
+  isApproved        Boolean    @default(false)
+  isCompleted       Boolean    @default(false)
+  isRejected        Boolean    @default(false)
+  isFinished        Boolean    @default(false)
+  restorePassToken  String     @default("")
+  confirmEmailToken String     @default("")
+  role              Role
+  sessions          Session[]
+  candidate         Candidate?
+  recruiter         Recruiter?
+  company           String?
+  linkedInData      Json?
+  emails            Email[]
+}
+
+model Session {
+  id                 Int       @id @default(autoincrement())
+  createdAt          DateTime  @default(now())
+  updatedAt          DateTime  @updatedAt
+  expiresAt          DateTime?
+  handle             String    @unique
+  user               User?     @relation(fields: [userId], references: [id])
+  userId             String?
+  hashedSessionToken String?
+  antiCSRFToken      String?
+  publicData         String?
+  privateData        String?
+}
+
+model Candidate {
+  id                   String    @id @default(uuid())
+  updatedAt            DateTime  @updatedAt
+  user                 User?     @relation(fields: [userId], references: [id])
+  userId               String?
+  firstName            String?
+  lastName             String?
+  active               Boolean   @default(true)
+  employments          String[]
+  recentJob            String?
+  values               String[]
+  recentWorkingAreas   Json[]
+  recentAreaExperience String?
+  preferredCompanySize String?
+  recentAnnualIncome   String?
+  avatar               String    @default("")
+  skills               String[]
+  resumeId             String?
+  resumeName           String?
+  workingExperience    Json[]
+  interests            String[]
+  highestDegree        String?
+  education            Json[]
+  location             String?
+  locationCoordinates  Json?
+  abilityToRelocate    Boolean   @default(false)
+  socialMedia          Json?
+  isFilled             Boolean   @default(false)
+  fillSteps            String[]
+  fillProgress         Int       @default(0)
+  matching             Matching?
+}
+
+// REVISIT: Should a company only have one recruiter or the option to add more?
+model Company {
+  id                      String      @id @default(uuid())
+  registeredAt            DateTime    @default(now())
+  updatedAt               DateTime    @updatedAt
+  name                    String      @unique
+  type                    String[]
+  foundDate               String
+  employeesAmount         String
+  recruiters              Recruiter[]
+  headquartersLocation    String
+  headquartersCoordinates Json?
+  values                  String[]
+  socialMedia             Json?
+  officeLocations         Json[]
+  logo                    String?
+  background              String?
+  images                  String[]
+  description             String?
+  quoteOrMotto            String      @default("")
+  isPremium               Boolean     @default(false)
+  isFilled                Boolean     @default(false)
+  fillSteps               String[]
+  fillProgress            Int         @default(0)
+  matching                Matching?
+  vacancies               Vacancy[]
+}
+
+model Recruiter {
+  id        String    @id @default(uuid())
+  updatedAt DateTime  @updatedAt
+  user      User?     @relation(fields: [userId], references: [id])
+  userId    String?
+  company   Company?  @relation(fields: [companyId], references: [id])
+  companyId String?
+  firstName String
+  lastName  String
+  avatar    String?
+  position  String?
+  vacancies Vacancy[]
+}
+
+model Email {
+  id      String  @id @default(uuid())
+  user    User?   @relation(fields: [userId], references: [id])
+  userId  String?
+  type    String
+  sent    Boolean @default(false)
+  retries Int     @default(0)
+  failed  Boolean @default(false)
+}
+
+model Keywords {
+  id          String   @id @default(uuid())
+  keywordList String[]
+}
+
+model Matching {
+  id           String     @id @default(uuid())
+  createdAt    DateTime   @default(now())
+  candidate    Candidate? @relation(fields: [candidateId], references: [id])
+  candidateId  String?
+  company      Company?   @relation(fields: [companyId], references: [id])
+  companyId    String?
+  vacancy      Vacancy?   @relation(fields: [vacancyId], references: [id])
+  vacancyId    String?
+  pdfScore     Int        @default(0)
+  score        Int        @default(0)
+  breakdown    Json?
+  isApproved   Boolean    @default(false)
+  isBookmarked Boolean    @default(false)
+}
+
+model Vacancy {
+  id                  String     @id @default(uuid())
+  createdAt           DateTime   @default(now())
+  matching            Matching?
+  title               String
+  industries          Json[]
+  salary              String?
+  company             Company?   @relation(fields: [companyId], references: [id])
+  companyId           String?
+  recruiter           Recruiter? @relation(fields: [recruiterId], references: [id])
+  recruiterId         String?
+  experience          String?
+  degree              String?
+  employment          String[]
+  description         String?
+  location            String[]
+  locationCoordinates Json?
+  locations           Json[]
+  status              String?
+  responsibilities    String[]
+  requirements        String[]
+  candidates          String[]
+  publishedAt         DateTime   @default(now())
+  closedAt            DateTime?
+  closeFormResponse   String?
+  keywords            String[]
+}
+
+model Conversation {
+  id       String    @id @default(uuid())
+  messages Message[]
+}
+
+model Message {
+  id             String       @id @default(uuid())
+  body           String
+  sentBy         String
+  createdAt      DateTime     @default(now())
+  seen           Boolean      @default(false)
+  conversation   Conversation @relation(fields: [conversationId], references: [id])
+  conversationId String
+}
```


