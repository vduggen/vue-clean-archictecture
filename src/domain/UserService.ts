import IUser from "./IUser";
import IUserRepository from "./IUserRepository";

export default class UserService {
  constructor(protected userRepository: IUserRepository) {}

  public async getAll(): Promise<IUser[]> {
    return this.userRepository.getAll();
  }
}
