/*
  Warnings:

  - You are about to drop the `sources` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sources" DROP CONSTRAINT "sources_user_id_fkey";

-- DropTable
DROP TABLE "sources";
