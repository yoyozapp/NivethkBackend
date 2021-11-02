const Province = require("../model/province");
const router = require("express").Router();
const location = require("../model/searchResult");

router.post("/", async (req, res) => {
  //no input
  if (
    req.body.name === "" &&
    req.body.sector === "" &&
    req.body.province === "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.find();
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search name
  else if (
    req.body.name != "" &&
    req.body.sector === "" &&
    req.body.province === "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.aggregate([
        { $match: { name: { $regex: req.body.name, $options: "i" } } },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search name , sector
  else if (
    req.body.name != "" &&
    req.body.sector != "" &&
    req.body.province === "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.aggregate([
        {
          $match: {
            name: { $regex: req.body.name, $options: "i" },
            sector: req.body.sector,
          },
        },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Seach name , province
  else if (
    req.body.name != "" &&
    req.body.sector === "" &&
    req.body.province != "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.aggregate([
        {
          $match: {
            name: { $regex: req.body.name, $options: "i" },
            province: req.body.province,
          },
        },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search name , type
  else if (
    req.body.name != "" &&
    req.body.sector === "" &&
    req.body.province === "" &&
    req.body.type != ""
  ) {
    try {
      const searchResult = await location.aggregate([
        {
          $match: {
            name: { $regex: req.body.name, $options: "i" },
            type: req.body.type,
          },
        },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search name , sector , province
  else if (
    req.body.name != "" &&
    req.body.sector != "" &&
    req.body.province != "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.aggregate([
        {
          $match: {
            name: { $regex: req.body.name, $options: "i" },
            sector: req.body.sector,
            province: req.body.province,
          },
        },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search name , sector , type
  else if (
    req.body.name != "" &&
    req.body.sector != "" &&
    req.body.province === "" &&
    req.body.type != ""
  ) {
    try {
      const searchResult = await location.aggregate([
        {
          $match: {
            name: { $regex: req.body.name, $options: "i" },
            type: req.body.type,
          },
        },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search sector
  else if (
    req.body.name === "" &&
    req.body.sector != "" &&
    req.body.province === "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.aggregate([
        { $match: { sector: req.body.sector } },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search sector , province
  else if (
    req.body.name === "" &&
    req.body.sector != "" &&
    req.body.province != "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.aggregate([
        { $match: { sector: req.body.sector, province: req.body.province } },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search sector , type
  else if (
    req.body.name === "" &&
    req.body.sector != "" &&
    req.body.province === "" &&
    req.body.type != ""
  ) {
    try {
      const searchResult = await location.aggregate([
        { $match: { sector: req.body.sector, type: req.body.type } },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search sector , province , type
  else if (
    req.body.name === "" &&
    req.body.sector != "" &&
    req.body.province != "" &&
    req.body.type != ""
  ) {
    try {
      const searchResult = await location.aggregate([
        {
          $match: {
            sector: req.body.sector,
            province: req.body.province,
            type: req.body.type,
          },
        },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search province
  else if (
    req.body.name === "" &&
    req.body.sector === "" &&
    req.body.province != "" &&
    req.body.type === ""
  ) {
    try {
      const searchResult = await location.aggregate([
        { $match: { province: req.body.province } },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Search province , type
  else if (
    req.body.name === "" &&
    req.body.sector === "" &&
    req.body.province != "" &&
    req.body.type != ""
  ) {
    try {
      const searchResult = await location.aggregate([
        { $match: { province: req.body.sector, type: req.body.type } },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  //Search type
  else if (
    req.body.name === "" &&
    req.body.sector === "" &&
    req.body.province === "" &&
    req.body.type != ""
  ) {
    try {
      const searchResult = await location.aggregate([
        { $match: { type: req.body.type } },
      ]);
      res.status(200).json(searchResult);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
