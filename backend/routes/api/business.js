// backend/routes/api/business.js
const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Business } = require("../../db/models")
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
// const { all } = require('sequelize/types/lib/operators');

const router = express.Router();


//Get all bussinesses
router.get("/", (req, res) => {
    const allBusiness = Business.findAll();
    res.json(allBusiness);
})


//Get 1 bussiness


//Create a bussiness

//Update a business


//Delete business

module.exports = router;
