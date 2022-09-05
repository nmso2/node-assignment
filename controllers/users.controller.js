const users = require("../assets/data.json");
const fs = require("fs");

module.exports.getAllUsers = (req, res, next) => {
  const { limit, page } = req.query;
  // console.log("check 1:  ", limit, page);
  // console.log("check 2:  ", users);
  // undefined.test();
  // res.json(users.slice(0, limit));
  res.send(users.slice(0, limit));
};

module.exports.getARandomUser = (req, res, next) => {
  res.send(users[Math.floor(Math.random() * users.length)]);
};

module.exports.saveAUser = (req, res) => {
  const { gender, name, address, contact, photoUrl } = req.body;

  if (!gender || !name || !address || !contact || !photoUrl) {
    res.send({ message: "All required fields must be filled!" });
    res.end();
  } else {
    users.push({ ...req.body, id: Math.random() });
    fs.writeFile("./assets/data.json", JSON.stringify(users), function (err) {
      if (err) throw err;
      console.log("Replaced save!");
    });
    res.send(users);
  }
};

module.exports.updateUser = (req, res) => {
  const { id, gender, name, address, contact, photoUrl } = req.body;
  // const newData = users.find((user) => user.id === Number(id));
  // console.log(id, gender, name, address, contact, photoUrl);
  let newData, isFound;

  if (
    gender === "" ||
    name === "" ||
    address === "" ||
    contact === "" ||
    photoUrl === ""
  ) {
    res.send({ message: "All required fields must be filled!" });
    res.end();
  } else {
    newData = users.map((obj) => {
      if (obj.id === Number(id)) {
        isFound = true;
        res.send({ ...obj, ...req.body });
        res.end();
        return { ...obj, ...req.body };
      }
      return obj;
    });
  }

  fs.writeFile("./assets/data.json", JSON.stringify(newData), function (err) {
    if (err) throw err;
    console.log("Replaced update!");
  });
  if (!isFound) {
    res.send({ message: "No user with this id!" });
    res.end();
  }
};

// module.exports.getUserDetail = (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   // const filter = {_id: id};
//   const foundUser = users.find((user) => user.id === Number(id));
//   res.status(200).send({
//     success: true,
//     messages: "Success",
//     data: foundUser,
//   });
//   // res.status(500).send({
//   //   success: false,
//   //   error: "Internal server error."
//   // });
// };

module.exports.deleteUser = (req, res) => {
  // const { id } = req.params;
  // const filter = { _id: id };
  let newData, isFound;
  const { id } = req.body;

  // newData = users.map((obj) => {
  //   if (obj.id !== Number(id)) {
  //     console.log(obj);
  //     return obj;
  //   } else {
  //     isFound = true;
  //     return;
  //   }
  //   // return obj;
  // });
  // if (!isFound) {
  //   res.send({ message: "No user with this id!" });
  //   res.end();
  // }
  // console.log(newData);
  // console.log(id);

  newData = users.filter((user) => user.id !== Number(id));
  const foundUser = users.find((user) => user.id === Number(id));

  fs.writeFile("./assets/data.json", JSON.stringify(newData), function (err) {
    if (err) throw err;
    console.log("Replaced update!");
  });
  if (!foundUser) {
    res.send({ message: "No user with this id!" });
    res.end();
  } else {
    res.send(newData);
  }
};
