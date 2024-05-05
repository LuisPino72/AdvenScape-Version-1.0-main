const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/create", userController.createUser);
router.post("/login", userController.login);
router.get("/getAll", userController.getAllUsers);
router.get("/", userController.getUserLogged);
router.get("/profile", userController.getUserProfileImage);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id/password", userController.changePassword);
router.post("/favorites", userController.setFavorite);
router.get("/favorites/:userId", userController.getFavoritesByUser);
router.post("/follows", userController.setFollow);
//router.post("/images/single", userController.setUploadImage);
router.get("/followers/:user_id", userController.getFollowersByUser);
router.put("/update/profile", userController.updateUserImage);

module.exports = router;
