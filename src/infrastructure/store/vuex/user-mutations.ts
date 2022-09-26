import IUser from '@/domain/IUser';
import { IUserState } from './user-store';

export const VUEX_MUTATION_SET_NEW_USER = 'VUEX_MUTATION_SET_NEW_USER';
export const VUEX_MUTATION_SET_USERS = 'VUEX_MUTATION_SET_USERS';

export default {
  [VUEX_MUTATION_SET_NEW_USER](state: IUserState, newUser: IUser) {
    state.users = [...state.users, newUser];
  },
  [VUEX_MUTATION_SET_USERS](state: IUserState, newUsers: IUser[]) {
    state.users = newUsers;
  },
};
