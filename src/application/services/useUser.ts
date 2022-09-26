import Vue from "vue";
import Component from "vue-class-component";

import IUser from '@/domain/IUser';
import UserService from '@/domain/UserService';
import userStore from '@/infrastructure/store/user-store';
import userRepository from '@/infrastructure/user-repository';

import Item from '../../presentation/components/Item.vue';

const userService = new UserService(userRepository);

@Component({
  components: {
    Item
  }
})
export default class UseUser extends Vue {
  users: IUser[] = [];

  async getAll() {
      return userService.getAll();
  }

  mounted() {
    this.getAll();

    userStore.subscribeToUsers((storeUsers: IUser[]) => {
      this.users = storeUsers;      
    });
  }
}