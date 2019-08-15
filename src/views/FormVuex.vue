<template>
    <div class="parent">
        <h3>问卷调查</h3>
        <child ></child><!-- 注意： 这里已经没有 .sync 了 -->
        <div class="">
            <br>
            <br>
            <p>数据：{{_fatherData}}</p>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IFromModule } from '@/store/modules/form'
import child from '@/components/dialogVuex.vue'
@Component({
    components:{
        child
    }
})
export default class FormVuex extends Vue {
    private  form = {
        name: "",
        namePla: "姓名不能为空",
        address: "",
        age: ""
    }

    get _fatherData() {//获取全局 store 仓库中的 formDatas 值
       // 读取store里面的值，这里是重点
      return IFromModule.formDatas
    }

}
</script>
