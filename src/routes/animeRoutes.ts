import { Router } from "express";
import AnimeController from "../controllers/AnimeController";

const animeRoutes = Router()
const controller = new AnimeController()

animeRoutes.get('/', controller.getAll)
animeRoutes.get('/:id', controller.getById)
animeRoutes.get('/', controller.create)
animeRoutes.get('/:id', controller.update)
animeRoutes.get('/:id', controller.delete)

export default animeRoutes