/*
  Warnings:

  - Made the column `userId` on table `Food` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
 
CREATE TABLE "new_Food" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inDiet" TEXT NOT NULL,
    CONSTRAINT "Food_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Food" ("createAt", "description", "id", "inDiet", "name", "sessionId", "userId") SELECT "createAt", "description", "id", "inDiet", "name", "sessionId", "userId" FROM "Food";
DROP TABLE "Food";
ALTER TABLE "new_Food" RENAME TO "Food";
