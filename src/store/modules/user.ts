import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IUser {
    token:string 
}


@Module({dynamic:true,store,name:'user'})
class user extends VuexModule implements IUser {
   token = '';

   @Mutation
   public Set_Token(token:string){
    this.token = token
   }

}

export const userModule = getModule(user)