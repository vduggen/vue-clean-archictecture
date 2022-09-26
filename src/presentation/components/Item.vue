<template>
    <v-card
        class="mx-auto"
        max-width="300"
    >
        <v-img
            class="white--text align-end"
            height="200px"
            :src="getAvatar()"
        >
            <v-card-title>{{ user.username }}</v-card-title>
            <v-card-subtitle>{{ user.name }}</v-card-subtitle>
        </v-img>

        <v-card-subtitle class="pb-0">
            Contatos
        </v-card-subtitle>

        <v-card-text class="text--primary">
            <div>{{ user.email }}</div>
            <div>{{ user.phone }}</div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import IUser from '@/domain/IUser';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
    @Prop() user!: IUser;

    getAvatar() {
        const partsName = this.user.name.split(' ');
        const first = partsName[0];
        const last = partsName.at(-1);

        return `https://ui-avatars.com/api/?name=${first}+${last}`;
    }
}
</script>

<style scoped>

</style>