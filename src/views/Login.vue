<template>
    <el-row type="flex" justify="center">
        <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="50px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { userModule } from '@/store/modules/user'
import  required  from '@/api/http'
import From from './Form.vue';
@Component
export default class login extends Vue{

    private user:any = {}
    private rules = {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
    }


    login () {
          this.$refs.loginForm.validate((valid) => {
          if (valid) {
            
                if (this.user.name === "admin" && this.user.pass === "123") {


                            required({
                                url:'/Login',
                                data: { name: this.user.name, pass: this.user.pass }
                            }).then((res:any) => {
                                if (res.success) {
                                    var token = res.token;
                                    userModule.Set_Token(token);
                                    this.$notify({
                                        type: "success",
                                        message: "欢迎你,admin",
                                        duration: 3000
                                    });
                                    //console.log(that.$store.state.token);
                                    this.$router.replace("/");
                                } else {
                                    this.$message({
                                        type: "error",
                                        message: "用户名或密码错误",
                                        showClose: true
                                    });
                                }
                            })

                }else{
                      this.$message({
                                        type: "error",
                                        message: "用户名或密码错误",
                                        showClose: true
                                    });
                }

          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }

}
</script>
