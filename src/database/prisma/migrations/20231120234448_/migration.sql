-- CreateTable
CREATE TABLE "Org" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "adressOrgId" TEXT NOT NULL,

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdressOrg" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "cep" TEXT NOT NULL,

    CONSTRAINT "AdressOrg_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Org" ADD CONSTRAINT "Org_adressOrgId_fkey" FOREIGN KEY ("adressOrgId") REFERENCES "AdressOrg"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
