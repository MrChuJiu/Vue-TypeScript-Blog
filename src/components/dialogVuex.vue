<template>
    <div class="child">
        <label>
            姓名：<input  type="text" v-model="form.name">
        </label>
        <label>
            年龄：<input type="text" v-model="form.age">
        </label>
        <label>
            地址：<input type="text" v-model="form.address">
        </label>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { IFromModule } from '@/store/modules/form'
@Component({
    name:'child'
})
export default class dialogVuex extends Vue{
  private form = {
        name: "",
        namePla: "",
        age: "",
        address: ""
   }

   created() {
        IFromModule.getFormData(this.form)
   }

}
</script>