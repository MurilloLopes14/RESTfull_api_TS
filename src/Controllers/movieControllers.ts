import { Request, Response } from "express";

//Model
import { Movie } from "../../Models/Movie";

//Logger
import Logger from "../../Config/logger";

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newMovie = await Movie.create(data);
    return res.status(201).json(newMovie);
  } catch (err: any) {
    Logger.error(`Erro no sistema ${err.message}`);
    res
      .status(500)
      .json({ msg: "Ocorreu um erro, por favor tente novamente mais tarde!" });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findMovie = await Movie.findById(id);

    if (!findMovie) {
      return res.status(404).json({ error: "O filme não existe" });
    }

    return res.status(200).json(findMovie);
  } catch (err: any) {
    Logger.error(`Erro no sistema ${err.message}`);
    res
      .status(500)
      .json({ msg: "Ocorreu um erro, por favor tente novamente mais tarde!" });
  }
};

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await Movie.find();
    res.status(200).json(allMovies);
  } catch (err: any) {
    Logger.error(`Erro no sistema ${err.message}`);
    res
      .status(500)
      .json({ msg: "Ocorreu um erro, por favor tente novamente mais tarde!" });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findMovie = await Movie.findById(id);

    //Check
    if (!findMovie) {
      return res.status(404).json({ error: "Filme não encontrado " });
    }

    await findMovie.deleteOne();
    return res.status(200).json({ msg: "Post do filme deletado" });
  } catch (err: any) {
    Logger.error(`Erro no sistema ${err.message}`);
    res
      .status(500)
      .json({ msg: "Ocorreu um erro, por favor tente novamente mais tarde!" });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const findMovie = await Movie.findById(id);

    if (!findMovie) {
      return res.status(404).json({ msg: "O filme não existe!" });
    }

    await Movie.updateOne({ _id: id }, data);

    return res.status(200).json(data);
  } catch (err: any) {
    Logger.error(`Erro no sistema ${err.message}`);
    res
      .status(500)
      .json({ msg: "Ocorreu um erro, por favor tente novamente mais tarde!" });
  }
};
