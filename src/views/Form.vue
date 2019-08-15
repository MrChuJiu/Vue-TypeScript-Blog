<template>
    <div class="parent">
        <h3>问卷调查</h3>
       <!-- 注意这里，formData是自定义属性，用来向子组件传递数据，如果要想被子组件控制，必须加上 .sync-->
        <child :formData.sync="form" />
        <div class="">
            <p>姓名：{{form.name}}</p>
            <p>年龄：{{form.age}}</p>
            <p>地址：{{form.address}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import child from '@/components/dialog.vue'
@Component({
    components:{
        child
    }
})
export default class From  extends Vue{
    private form = {
        name: "111",
        namePla: "姓名不能为空",
        address: "",
        age: ""   
    }
}
</script>