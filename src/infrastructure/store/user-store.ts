import IUser from '@/domain/IUser';
import { VUEX_MUTATION_SET_NEW_USER, VUEX_MUTATION_SET_USERS } from './vuex/user-mutations';
import vuexStore from './vuex/user-store';

class UserStore {
  public subscribeToUsers(callback: (users: IUser[]) => void) {
    vuexStore.subscribe((mutation, state) => {
      callback(state.users);
    })
  }

  public getUsers() {
    return vuexStore.state.users;
  }

  public setNewUser(newUser: IUser) {
    vuexStore.commit(VUEX_MUTATION_SET_NEW_USER, newUser);
  }

  public setUsers(newUsers: IUser[]) {
    vuexStore.commit(VUEX_MUTATION_SET_USERS, newUsers);
  }
}

export default new UserStore();