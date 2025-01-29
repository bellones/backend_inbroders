-- DropForeignKey
ALTER TABLE "TimerTracker" DROP CONSTRAINT "TimerTracker_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TimerTracker" DROP CONSTRAINT "TimerTracker_taskId_fkey";

-- AlterTable
ALTER TABLE "TimerTracker" ALTER COLUMN "taskId" DROP NOT NULL,
ALTER COLUMN "projectId" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TimerTracker" ADD CONSTRAINT "TimerTracker_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskCard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimerTracker" ADD CONSTRAINT "TimerTracker_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projeto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
