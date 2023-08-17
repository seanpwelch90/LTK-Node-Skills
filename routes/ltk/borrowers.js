const express = require("express");
const {
  createNewLoanWithBorrowers,
  updateBorrowerInformation,
  deleteBorrower,
} = require("../../model/borrower.model");
const router = express.Router();

router.patch("/:id", async (req, res) => {
  const loanId = +req.params.id;
  const pairId = +req.body.pairId;
  const newdata = req.body.newdata;

  const updatedBorrower = await updateBorrowerInformation(
    loanId,
    pairId,
    newdata
  );
  res.send(updatedBorrower);
});

router.delete("/:id", async (req, res) => {
  const loanId = +req.params.id;
  const pairId = +req.body.pairId;

  await deleteBorrower(loanId, pairId);
  res.send({ message: "Borrower deleted" });
});

module.exports = router;
