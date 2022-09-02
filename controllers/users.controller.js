const users = require("../assets/data.json");

module.exports.getAllUsers = (req, res, next) => {
  const { limit, page } = req.query;
  // console.log("check 1:  ", limit, page);
  // console.log("check 2:  ", users);
  // undefined.test();
  // res.json(users.slice(0, limit));
  res.send(users.slice(0, limit));
};

module.exports.saveAUser = (req, res) => {
  console.log(req.query);
  users.push(req.body);
  res.send(users);
};

module.exports.getUserDetail = (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const filter = {_id: id};
  const foundUser = users.find((user) => user.id === Number(id));
  res.status(200).send({
    success: true,
    messages: "Success",
    data: foundUser,
  });
  // res.status(500).send({
  //   success: false,
  //   error: "Internal server error."
  // });
};

module.exports.updateUser = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  const filter = { _id: id };

  const newData = users.find((user) => user.id === Number(id));

  newData.id = id;
  newData.name = req.body.name;

  res.send(newData);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  users = users.filter((user) => user.id !== Number(id));

  res.send(users);
};
