const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllLoans = async () => {
  const allLoans = await prisma.loan.findMany({
    include: {
      borrower: true,
    },
  });
  return allLoans;
};

const getLoan = async (loanId) => {
  const loan = await prisma.loan.findUnique({
    where: {
      loanId,
    },
    include: {
      borrowers: true,
    },
  });
  return loan;
};

const createNewLoanWithBorrowers = async (loanObject) => {
  const newLoan = await prisma.loan.create({
    data: {
      borrowers: { create: loanObject.borrowers },
    },
    include: {
      borrowers: true,
    },
  });

  return newLoan;
};

const deleteLoan = async (loanId) => {
  await prisma.loan.delete({
    where: {
      loanId,
    },
    include: {
      borrowers: true,
    },
  });
};

module.exports = {
  getAllLoans,
  getLoan,
  deleteLoan,
  createNewLoanWithBorrowers,
};
