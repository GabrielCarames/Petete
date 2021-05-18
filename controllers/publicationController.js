const Publication = require("../models/publication");

exports.createPublication = async (values) => {
  const description = values;
  const newPublication = new Publication({description});
  await newPublication.save();
  return newPublication;
};

exports.getWeaponsCategory = async (category) => {
  const weaponsCategory = await this.findByCategory(category);
  return weaponsCategory;
};

exports.getAllPublications = async () => {
  return Publication.find({}).lean();
};

exports.findPublicationById = async (id) => {
  return await Publication.findOne({_id: id})
}

