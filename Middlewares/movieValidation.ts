import { body } from "express-validator";

export const movieValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título é obrigatório")
      .isLength({ max: 20 })
      .withMessage("O título do filme é muito extenso!"),
    body("rating")
      .isNumeric()
      .withMessage("Por favor, dê alguma nota válida!")
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error("A nota precisa ser entre 0 e 10");
        }
        return true;
      }),
    body("description")
      .isString()
      .withMessage("Por favor, coloque alguma descrição no seu post."),
    body("director")
      .isString()
      .withMessage("O nome do diretor do filme é obrigatório!"),
    body("poster").isURL().withMessage("A imagem precisa ser uma URL."),
  ];
};
