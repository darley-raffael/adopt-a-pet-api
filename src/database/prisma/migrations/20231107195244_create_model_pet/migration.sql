-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "decription" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Description" (
    "id" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "specie" TEXT NOT NULL,
    "particulars" TEXT[],

    CONSTRAINT "Description_pkey" PRIMARY KEY ("id")
);
