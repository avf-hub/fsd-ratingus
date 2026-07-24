import type {User} from ".";
import type {StateCreator} from "zustand/vanilla";
import {createWithEqualityFn} from "zustand/traditional";
import {devtools} from "zustand/middleware/devtools";

export type UserState = {
    profile?: User;
}

export type UserActions = {
    getProfile: () => void
}

type createUserStoreType = StateCreator<UserState & UserActions>;

const userSlice: createUserStoreType = () => ({
    profile: undefined,
    getProfile: async () => {
        // получениее профиля
    }
})

export const useUserStore = createWithEqualityFn<UserState & UserActions>()(
    devtools(userSlice, {
        name: 'userStore'
    })
);