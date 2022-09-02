const express = require("express");
const usersControllers = require("../../controllers/users.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/veiwCount");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("users found with id");
// });

// router.post("/", (req, res) => {
//   res.send("user added");
// });

router
  .route("/all")
  /**
   * @api {get} /all All users
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersControllers.getAllUsers);

router
  .route("/random")
  /**
   * @api {get} /random A random user
   * @apiDescription Get a random user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersControllers.getARandomUser);

router
  .route("/save")
  /**
   * @api {post} /save save a user
   * @apiDescription Save a user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(usersControllers.saveAUser);

router
  .route("/update")
  /**
   * @api {post} /update update a user
   * @apiDescription update a user
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .patch(usersControllers.updateUser);

// router
//   .route("/:id")
//   .get(viewCount, limiter, usersControllers.getUserDetail)
//   .patch(usersControllers.updateUser)
//   .delete(usersControllers.deleteUser);

module.exports = router;
