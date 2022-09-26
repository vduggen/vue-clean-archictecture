import IUser from "./IUser";

export default interface IUserRepository {
    getAll(): Promise<IUser[]>;
}