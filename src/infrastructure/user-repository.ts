import IUser from '@/domain/IUser';
import IUserRepository from '@/domain/IUserRepository';
import userHttp from './http/user-http';
import userStore from './store/user-store';

class UserRepository implements IUserRepository {
    async getAll() {
        const response = await userHttp.get<IUser[]>('/users');

        userStore.setUsers(response.data);

        return response.data;
    }
}

export default new UserRepository();
