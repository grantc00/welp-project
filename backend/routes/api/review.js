// backend/routes/api/review.js
const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Review } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

// get all reviews
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allReviews = await Review.findAll();

    res.json(allReviews);
  })
);

// get 1 review
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const oneReview = await Review.findOne({
      where: { id: req.params.id },
    });
    res.json(oneReview);
  })
);

// create review
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { userId, businessId, rating, answer } = req.body;
    const newReview = await Review.create({
      userId,
      businessId,
      rating,
      answer,
    });
    res.json(newReview);
  })
);

// update review
router.post(
  "/:id(\\d+)/edit",
  asyncHandler(async (req, res) => {
    const updateReview = await Review.findByPk(req.params.id);
    await updateReview.update({
      rating: req.body.rating,
      answer: req.body.answer,
    });
    res.json(updateReview);
  })
);

// delete review
router.post(
  "/:id(\\d+)/delete",
  asyncHandler(async (req, res) => {
    const deleteReview = await Review.findByPk(req.params.id);
    await deleteReview.destroy();
    res.json(deleteReview);
  })
);

module.exports = router;
