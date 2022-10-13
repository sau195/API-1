const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const addingRecord = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingRecord.save();
    res.send(insertMens);
  } catch (err) {
    res.send(err);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const getData = await MensRanking.find();
    res.send(getData);
  } catch (e) {
    res.send(e);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await MensRanking.findById(_id);
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await MensRanking.findByIdAndDelete(_id, { new: true });
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
