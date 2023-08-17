const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const updateBorrowerInformation = async (loanId, pairId, newInfo) => {
  const updatedBorrower = await prisma.loan.update({
    where: {
      loanId,
    },
    data: {
      borrowers: {
        update: {
          where: {
            pairId,
          },
          data: {
            ...newInfo,
          },
        },
      },
    },
  });
  return updatedBorrower;
};

const deleteBorrower = async (loanId, pairId) => {
  const borrower = await prisma.borrower.findUnique({
    where: pairId,
  });

  if (!borrower) {
    return {
      message: "Borrower not found",
    };
  }

  await prisma.loan.update({
    where: {
      loanId,
    },
    data: {
      borrowers: {
        delete: {
          pairId,
        },
      },
    },
  });
  return;
};

module.exports = {
  updateBorrowerInformation,
  deleteBorrower,
};
