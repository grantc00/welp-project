// backend/routes/api/business.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Business } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

//Get all bussinesses
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allBusiness = await Business.findAll();

    res.json(allBusiness);
  })
);

//Get 1 business

router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const oneBusiness = await Business.findOne({
      where: { id: req.params.id },
    });
    res.json(oneBusiness);
  })
);

//Create a business
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { ownerId, title, description, address } = req.body;
    const newBusiness = await Business.create({
      ownerId,
      title,
      description,
      address,
    });
    res.json(newBusiness);
  })
);

//Update a business
router.post(
  "/:id(\\d+)/edit",
  asyncHandler(async (req, res, next) => {
    const updateBusiness = await Business.findByPk(req.params.id);
    await updateBusiness.update({
      title: req.body.title,
      description: req.body.details,
      address: req.body.address,
    });

    res.json(updateBusiness);
  })
);

//Delete business
router.post(
  "/:id(\\d+)/delete",
  asyncHandler(async (req, res, next) => {
    const deleteBusiness = await Business.findByPk(req.params.id);
    await deleteBusiness.destroy();

    res.json(deleteBusiness);
  })
);

module.exports = router;
