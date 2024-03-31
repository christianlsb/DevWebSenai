import { CreateUserUseCase } from "../use-cases/create-user.js";
import { UserDTO } from "../dto/user_dto.js";
export class CreateUserController {
  async execute(httpRequest) {
    try {
      //validar a requisicao (campos obrigatorios e tamanho de senha e email)
      const params = httpRequest.body;
      const requiredFields = ["name", "last_name", "email", "password"];
      for (const field of requiredFields) {
        if (!params[field] || params[field].trim().length === 0) {
          return {
            statusCode: 400,
            body: {
              errorMessage: `Campo ${field} invalido`,
            },
          };
        }
      }
      //chamar o use case
      const { name, last_name, email, password } = params;
      const userDTO = new UserDTO(name, last_name, email, password);

      const createUserUseCase = new CreateUserUseCase();
      const createdUser = await createUserUseCase.execute(userDTO);
      //retornar a resposta para o usuario (status code)
      return {
        statusCode: 201,
        body: createdUser,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: {
          errorMessage: "Internal server error",
        },
      };
    }
  }
}
