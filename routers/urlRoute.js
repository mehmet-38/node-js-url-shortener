const express = require("express");
const router = express.Router();
const Url = require("../models/url");

const TransactionFactory = require("../database/transactions-factory");
const urlTransaction = TransactionFactory.creating("urlTransaction");

router.post("/", async (req, res) => {
  try {
    urlTransaction.createUrl(req.body);

    res.json(`localhost:5000/urls/${localStorage.getItem("shortUrl")}`);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/:id", (req, res) => {
  try {
    res.json(localStorage.getItem("longUrl"));
    //res.redirect(localStorage.getItem("longUrl"));
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
