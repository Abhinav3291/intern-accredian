-- CreateTable
CREATE TABLE `User` (
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` INTEGER NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phone_key`(`phone`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
