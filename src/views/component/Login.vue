<template>
  <div id="login">
    <el-row>
      <div class="login">
        <el-col :span="9" :offset="5">
          <div id="login_img" class="loginleft_bg">
            <div class="loginleft"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <el-form  :model="loginForm" :rules="rules2"  ref="loginForm" label-position="left" label-width="0px"  class="demo-ruleForm login-container" id="formdiv">
            <h3 class="title">系统登录</h3>
            <!-- <span class="title"><i class="iconfont icon-icon_boss"></i></span> -->
            <el-form-item prop="userName">
              <el-input type="text" v-model="loginForm.userName" auto-complete="off"  placeholder="用户名" class="noborder">
                <i slot="prefix" class="iconfont icon-icon_boss iconColor"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="passWord">
              <el-input  type="password" v-model="loginForm.passWord"  placeholder="密码" auto-complete="off" show-password>
                <i slot="prefix" class="el-icon-view iconColor"></i>
              </el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
              <el-button type="primary"  @click.native.prevent="handleSubmit" :loading="logining" class="loginbtn">登录</el-button>
              <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
            </el-form-item>
          </el-form>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import { requestLogin } from "@/api/api";
import { setName, getName, setPassword, getPassword } from "../../utils/auth";
import md5 from 'js-md5';
import { mapGetters, mapActions } from "vuex";

//import NProgress from 'nprogress'
export default {
   
  data() {
    var validateInput = (rule, value, callback) => {
      if (!this.checkSpecialKey(value)) {
        callback(new Error("不能含有特殊字符和空格！！"));
      } else {
        callback();
      }
    };
    return {
      logining: false,
      loginForm: {
        userName: "",
        passWord: ""
      },
      userToken: "",
      rules2: {
        userName: [
          {required: true, message: "请输入账号", trigger: "blur" },
          {validator: validateInput, trigger: ["blur", "change"] },
          {pattern:/^[A-Za-z0-9]+$/,message: "用户名不能为中文", trigger: ["blur", "change"] },
          // {pattern:/^[^ ]+$/,message: "用户名不能含有空格", trigger: ["blur", "change"] },
          { min:3,max:10, message: "请输入正确的账号格式，长度3~10个字符", trigger: ["blur"]}
         
        ],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {validator: validateInput, trigger: ["blur", "change"] },
          {pattern:/^[A-Za-z0-9]+$/,message: "密码不能为中文", trigger: ["blur", "change"] },
          // {pattern:/^[^ ]+$/,message: "密码不能含有空格", trigger: ["blur", "change"] },
          { min:5,max:12, message: "请输入正确的密码格式，长度6~12个字符", trigger: ["blur"]}
        ]
      },
      checked: false,
      users: []
    };
  },
  mounted() {
    this.changeheight();
    // 数据首次加载完后 → 获取宽度，并设置其高度
    this.$nextTick(() => {
      this.changeheight();
    });
    // 挂载 reisze 事件 → 屏幕缩放时监听宽度变化
    window.onresize = () => {
      return (() => {
        this.$nextTick(() => {
          this.changeheight();
        });
      })();
    };
    //用户选择记住密码时，下次打开登录页通过cookie自动获取用户名和密码
    this.loginForm.userName = getName("name");
    this.loginForm.passWord = getPassword("password");
  },
  methods: {
    // handleReset2() {
    //   this.$refs.ruleForm2.resetFields();
    // },
    ...mapActions(["changeLogin"]),
    //登录
    handleSubmit(ev) {
      this.$refs.loginForm.validate(valid => {
        //如果验证通过
        if (valid) {
          this.logining = true;
          //  this.$axios.post('/data/index').then((res)=>{
          //          console.log(res);              
          //     }).catch((res) => {
          //         alert("错误：" + res);
          //     })
          //  this.$router.push({ path: "/Dashboard1" });
          var loginParams = {
            username: this.loginForm.userName,
            password: md5(this.loginForm.passWord)
          };
          console.log(md5(this.loginForm.passWord));
          requestLogin(loginParams).then(data => {
            this.logining = false;
            let { msg, code, user } = data;
            // console.log(data);
            if (code !== 200) {
              this.$message({
                message: msg,
                type: "error"
              });
            } else {
              if (this.checked === true) {//如果选择记住密码，就保存cookie
                setName(this.loginForm.userName);
                setPassword(this.loginForm.passWord);
              } else {
                setName("");
                setPassword("");
              }

              this.userToken = user.token;
              this.changeLogin({ Authorization: this.userToken });
              console.log(this.userToken);
              this.$router.push({ path: "/Dashboard1" });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //校验用户名方法
    checkSpecialKey(str) {
      var specialKey = "[`~!#$^&*()=|{}':;'\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？] ‘'";
      for (var i = 0; i < str.length; i++) {
        if (specialKey.indexOf(str.substr(i, 1)) != -1) {
          return false;
        }
      }
      return true;
    },

    changeheight() {
      var h = window.innerHeight ||document.documentElement.clientHeight || document.body.clientHeight; //可见区域高度
      var logindiv = document.getElementById("login");
      logindiv.style.height = h + "px";
      var formHeight = document.getElementById("formdiv").offsetHeight;
      var margintop = (h - formHeight) / 2;
      document.getElementById("formdiv").style.marginTop = margintop + "px";
      document.getElementById("login_img").style.marginTop = margintop + "px";
    }
  }
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  /* background-image: url("../../assets/boxed-bg/polygon/bg/13.jpg");
  background-size: 100% 100%; */
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
  /* -webkit-border-radius: 5px; */
  /* border-radius: 5px; */
  /* -moz-border-radius: 5px; */
  /* background-clip: padding-box; */
  /* margin: auto; */
  line-height: 100%;
  width: 220px;
  height: 330px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-container .title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #366491;
}
.login-container .remember {
  margin: 0px 0px 35px 0px;
}
.loginbtn {
  width: 100%;
  background: #366491 !important;
}
.loginleft_bg {
  background: url("../../../static/image/login_img.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 382px;
  position: relative;
}
.loginleft {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 382px;
  line-height: 50px;
  text-align: center;
  background: rgba(149, 174, 191, 0.3);
}
.iconColor {
  color: #409eff !important;
}
</style>