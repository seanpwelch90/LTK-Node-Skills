-- CreateTable
CREATE TABLE "Loan" (
    "loanId" SERIAL NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("loanId")
);

-- CreateTable
CREATE TABLE "Borrower" (
    "pairId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "loanId" INTEGER,

    CONSTRAINT "Borrower_pkey" PRIMARY KEY ("pairId")
);

-- AddForeignKey
ALTER TABLE "Borrower" ADD CONSTRAINT "Borrower_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("loanId") ON DELETE SET NULL ON UPDATE CASCADE;
