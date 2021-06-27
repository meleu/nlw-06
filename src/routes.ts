import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthentication } from "./middlewares/ensureAuthentitcation";
import { ListComplimentsBySenderController } from "./controllers/ListComplimentsBySenderController";
import { ListComplimentsByReceiverController } from "./controllers/ListComplimentsByReceiverController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listComplimentsBySenderController = new ListComplimentsBySenderController();
const listComplimentsByReceiverController = new ListComplimentsByReceiverController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post(
  "/tags",
  ensureAuthentication,
  ensureAdmin,
  createTagController.handle
)
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthentication,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthentication,
  listComplimentsBySenderController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthentication,
  listComplimentsByReceiverController.handle
);

router.get("/tags", ensureAuthentication, listTagsController.handle);

router.get("/users", ensureAuthentication, listUsersController.handle);

export { router };
