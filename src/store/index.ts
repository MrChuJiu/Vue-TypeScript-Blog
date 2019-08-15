import Vue from 'vue';
import Vuex from 'vuex';
import { IFrom } from '@/store/modules/form'
import { IUser } from '@/store/modules/user'

Vue.use(Vuex);

export interface IRootState {
    from:IFrom,
    user:IUser
}

export default new Vuex.Store<IRootState>({})