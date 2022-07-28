import { Router } from "express";
import { RoomController } from "./constrollers/RoomController";
import { SubjectController } from "./constrollers/SubjectController";

const routes = Router();

routes.post("/subject", new SubjectController().create)
routes.post("/room", new RoomController().create)
routes.get("/room", new RoomController().list)
routes.post("/room/:idRoom/create", new RoomController().createVideo)
routes.post("/room/:idRoom/subject", new RoomController().roomSubject)
// routes.post("/Video", new VideoController().create)

export default routes;
