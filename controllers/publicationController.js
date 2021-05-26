const Publication = require("../models/publication");

exports.createPublication = async (values) => {
  const description = values;
  const newPublication = new Publication({description});
  await newPublication.save();
  return newPublication;
};

exports.addUserToPublication = async (publicationId, user) => {
  await Publication.findOneAndUpdate({ _id: publicationId },
      {
          $push: {
              user: user
          }
      }
  )
}

/*exports.getAllPublications = async () => {
  return Publication.find({}).lean();
};*/

exports.getAllPublications = async () => {
  return await Publication.find().populate({path: 'user',
  model: 'User'})
}

exports.findPublicationById = async (id) => {
  return await Publication.findOne({_id: id})
}



