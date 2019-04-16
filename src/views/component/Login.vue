<template>
<div id="login">
  
<div class="login">
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container" id="formdiv">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号" class="noborder"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</div>
</div>
</template>

<script>
  import { requestLogin } from '@/api/api';
  import {setName,getName} from '../../utils/auth';
  import axios from 'axios';
  //import NProgress from 'nprogress'
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true,
        users:[]
      };
    },
    mounted(){
      this.changeheight();
      // 数据首次加载完后 → 获取宽度，并设置其高度
    this.$nextTick(() => {
      this.changeheight();
    })
    // 挂载 reisze 事件 → 屏幕缩放时监听宽度变化
    window.onresize = () => {
        return (() => {
            this.$nextTick(() => {
              this.changeheight();
            })
        })()
    }

  },    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            //NProgress.start();
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            requestLogin(loginParams).then(data => {
              this.logining = false;
              //NProgress.done();
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                setName(this.ruleForm2.account);
                let aaa=getName("name");
                console.log(aaa);
                this.$router.push({ path: '/Dashboard1' });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changeheight(){
         var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//可见区域高度
         var logindiv=document.getElementById('login');
         logindiv.style.height=h+"px";
         var formHeight=document.getElementById('formdiv').offsetHeight;
         var margintop=(h-formHeight)/2;
         document.getElementById('formdiv').style.marginTop=margintop+'px';
      }
    },
     
  }

</script>

<style>
#login{
  width:100%;
  height:100%;
  overflow-y: hidden;
  background-image: url("../../assets/boxed-bg/polygon/bg/13.jpg");
  background-size: 100% 100%;
  

/* background: linear-gradient(to bottom, #c6cbf3 0%,#3e90e6 100%) */ 
}
  /* .login{overflow-y: hidden;  
     display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;

    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-box-pack: center;
} */
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    /* background-clip: padding-box; */
    margin: auto;
    line-height: 100%;
    width: 300px;
    height: 100%;
    padding: 35px 35px 15px 35px;
    background: transparent;
    /* border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6; */
    }
   .login-container .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
   .login-container .remember {
      margin: 0px 0px 35px 0px;
    }
  .el-input__inner {
    -webkit-appearance: none;
    background-color: #ffffff05;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    border: none !important;
    border-bottom: 1px solid;
    box-sizing: border-box;
    color: #ffffff  !important;;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
</style>