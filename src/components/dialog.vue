
<template>
    <div class="child">
        <label>
            姓名：<input :placeholder="form.namePla" type="text" v-model="form.name">
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
import { Component, Prop, Vue, Watch, Model } from 'vue-property-decorator'

@Component({
    name:'child'
})
export default class dialog extends Vue{
    @Prop()  private formData:any

    private form = {
        name: "",
        namePla: "姓名不能为空",
        address: "",
        age: ""   
    }

    @Watch('formData', { immediate: true, deep: true })
    onformDataChanged () {
        this.form = this.formData;
        console.log('监听到了变化');
    }

}
</script>
























