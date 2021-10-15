<template>
  <div class="login">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avtar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 登录 -->
      <el-form ref="loginFormRef" :model="loginForm"  class="login_form" :rules="loginFormRules">
        <!-- 用户名 -->
        <el-form-item label="" prop="username">
          <el-input  prefix-icon="el-icon-user-solid"  v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item label="" class="btn">
          <el-button type="primary" @click="login(loginForm)">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
        
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '@/request/http.js'
export default {
  data(){
     return {
       news:[],
       //登录表单验证的数据对象
       loginForm:{
         username:'admin',
         password:'123456'
       },
       //表单验证规则对象
       loginFormRules:{
        username:[
           { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
        ],
        password:[
           { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12个字符', trigger: 'blur' }
        ]
       }
     }
  },
  methods:{
      reset(){
        this.$refs.loginFormRef.resetFields();
      },
     async login(loginForm){
       const a = await login(loginForm)
       if(a.meta.status !== 200){
         this.$message.error('登录失败')
       }else{
         this.$message.success(a.meta.msg);
         window.sessionStorage.setItem('token',a.data.token)
         this.$router.push('/welcome')
       }
       
       
        // this.$refs.loginFormRef.validate(async valid=>{
        //   if(! valid) return;
        //  const res =await this.$http.post("/login",this.loginForm)
        //  console.log(res);
        // });

      }
  },
  // async mounted() {
  //   this.news = await login();
  // },
  name: "Login",
  components: {},
};
</script>
<style scoped lang="scss">
.login {
  background-color: #2b4b6b;
  width: 100%;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .avtar_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    background-color: #fff;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .login_form{
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
  }
  .btn{
    display: flex;
    justify-content: flex-end;
  }
}
</style>
