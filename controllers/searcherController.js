const User = require("../models/user");


exports.findUserBySearch = async (name) => {
  return await User.findOne({name: name})
}

//por ahora no srive

