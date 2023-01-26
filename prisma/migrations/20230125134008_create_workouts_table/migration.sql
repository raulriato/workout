-- CreateTable
CREATE TABLE "workouts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "muscle" VARCHAR(255) NOT NULL,
    "weight" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "workouts_name_key" ON "workouts"("name");
