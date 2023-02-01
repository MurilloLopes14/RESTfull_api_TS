import { Router, Response, Request } from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from "./Controllers/movieControllers";

//Validations
import { validate } from "../Middlewares/handleValidation";
import { movieValidation } from "../Middlewares/movieValidation";

//Routes
const router = Router();

router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).json({ msg: "Working!" });
  })
  .post("/movie/create", movieValidation(), validate, createMovie)
  .get("/movie/:id", getMovieById)
  .get("/movie", getAllMovies)
  .delete("/movie/:id", deleteMovie)
  .put("/movie/:id", movieValidation(), validate, updateMovie);

export default router;
