import express from "express";
import Brand from '../models/Brands.js';

const router = express.Router();

// RETRIEVE/READ CREATED BRANDS
router.get('/', async (req, res) => {
    try {
        const companies = await Brand.find();
        res.json(companies);
    }
    catch (err) {
        res.json({message: err});
    }
});

// CREATE BRAND
router.post('/', async (req, res) => {
    const brand = new Brand({
        name: req.body.name,
        number: req.body.number
    })

    try {
        const saved = await brand.save()
        res.json(saved)
    }
    catch(err) {
        res.json({message: err})
    }
    console.log("Post run successfully!")
});

// READ SPECIFIC BRAND
router.get('/:brandId', async (req, res) => {
    try {
        const company = await Brand.findById(req.params.brandId);
        res.json(company);
    }
    catch (err) {
        res.json({message: err});
    }
});

// Update
router.patch('/:brandId', async (req, res) => {
    try {
        const updated = await Brand.updateOne(
            {_id: req.params.brandId},
            { $set: {
                name: req.body.name,
                number: req.body.number
            }}
            );
        res.json(updated);
    }
    catch (err) {
        res.json({message: err});
    }
});

// Delete a brand
router.delete('/:brandId', async (req, res) => {
    try {
        const deleted = await Brand.remove({_id: req.params.brandId});
        res.json(deleted);
    }
    catch (err) {
        res.json({message: err});
    }
});


export default router;
