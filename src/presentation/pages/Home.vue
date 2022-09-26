<template>
    <div v-if="users.length > 0">
        <v-container>
            <v-row>
                <v-col v-for="user in users" :key="user.id">
                    <Item :user="user" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import UseUser from '@/application/services/useUser';

export default UseUser;
</script>
