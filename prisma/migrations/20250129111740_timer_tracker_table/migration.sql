-- CreateTable
CREATE TABLE "TimerTracker" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "initialMoment" TIMESTAMP(3) NOT NULL,
    "finalMoment" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimerTracker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TimerTracker" ADD CONSTRAINT "TimerTracker_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "TaskCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimerTracker" ADD CONSTRAINT "TimerTracker_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
