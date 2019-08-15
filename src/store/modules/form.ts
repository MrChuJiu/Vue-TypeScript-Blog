import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'


export interface IFrom {
   formDatas: any//随便写的 规范应该定义类
}

@Module({ dynamic:true,store,name:'from'})
class from extends VuexModule implements IFrom{

    formDatas: any = null

     @Mutation
     public getFormData(data:any) {
        this.formDatas = data;
     }
}

export const IFromModule = getModule(from)
