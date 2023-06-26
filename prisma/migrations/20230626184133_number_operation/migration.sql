/*
  Warnings:

  - Made the column `product_id` on table `operation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seller_id` on table `operation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `buyer_id` on table `operation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "operation" ALTER COLUMN "product_id" SET NOT NULL,
ALTER COLUMN "seller_id" SET NOT NULL,
ALTER COLUMN "buyer_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "user_id" SET NOT NULL;
