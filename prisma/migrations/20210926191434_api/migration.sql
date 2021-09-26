-- CreateTable
CREATE TABLE "API" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "documentation_url" TEXT NOT NULL,
    "private" BOOLEAN NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "API_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "API" ADD CONSTRAINT "API_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
