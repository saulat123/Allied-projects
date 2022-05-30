const db = require("../models");
const proSpecs = db.product_specs;

const viewproductSpec = async (req, res) => {
  const product_specs = await proSpecs.findAll();
  res.send(product_specs);
};

const getProductSpecsbyId = async (req, res) => {
  const getSpecsbyId = await proSpecs.findAll({where:{ps_id: req.params.id}});
  res.send(getSpecsbyId);
};


const insertProjectSpecs=async(req,res)=>{
  const newProjSpec = await proSpecs.create({
    memory: req.body.memory,
    product_id: req.body.memory,
    color: req.body.color,
    screen_size: req.body.screen_size,
    price: req.body.price,
    ram: req.body.ram,
    });
    console.log(newProjSpec);
    res.send(newProjSpec);
  };

module.exports = { viewproductSpec, insertProjectSpecs, getProductSpecsbyId };
