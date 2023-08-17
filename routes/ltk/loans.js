const express = require("express");
const router = express.Router();

const { deleteLoan, getAllLoans, getLoan } = require("../../model/loan.model");

router.get("/", async (req, res) => {
  const data = await getAllLoans();
  res.send(data);
});

router.get("/:id", async (req, res) => {
  const loanId = +req.params.id;
  console.log(loanId);
  const data = await getLoan(loanId);
  res.send(data);
});

router.post("/", async (req, res) => {
  const newLoan = await createNewLoanWithBorrowers(req.body);
  res.send(newLoan);
});

router.delete("/:id", async (req, res) => {
  console.log('got to path')
  const loanId = +req.params.id;
  const data = await deleteLoan(loanId);
  res.send(data);
});

module.exports = router;
