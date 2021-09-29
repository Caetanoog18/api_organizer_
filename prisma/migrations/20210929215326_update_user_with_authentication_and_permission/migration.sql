-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessToken" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "permission" TEXT[],
ADD COLUMN     "refreshToken" TEXT[];
