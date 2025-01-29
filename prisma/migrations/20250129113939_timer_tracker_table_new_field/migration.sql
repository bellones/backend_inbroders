/*
  Warnings:

  - Added the required column `userId` to the `TimerTracker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimerTracker" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TimerTracker" ADD CONSTRAINT "TimerTracker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
