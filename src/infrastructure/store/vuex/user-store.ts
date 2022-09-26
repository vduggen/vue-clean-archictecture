import Vue from 'vue';
import IUser from '@/domain/IUser';
import Vuex from 'vuex';
import mutations from './user-mutations';

export interface IUserState {
  users: IUser[]
}

const state: IUserState = {
  users: []
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations
})
