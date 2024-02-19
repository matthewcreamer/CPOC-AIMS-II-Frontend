<template>
  <div id="page-login" class="page-body">
    <div class="app-logo-login">
      <!-- <img src="/img/logo-dark.png" /> -->
    </div>

    <!-- LOG IN -->
    <div class="login-panel" v-if="current_tab == 1">
      <div class="app-logo">
        <img :src="appIcon" alt="app icon" />
      </div>
      <!-- <h1>SPRC</h1> -->
      <label class="sub-title">E-NDE REPORT</label>
      <div class="form-login">
        <div class="input-set">
          <input
            class="user"
            type="text"
            placeholder="Username"
            v-model="formData.username"
            v-on:keyup.enter="SIGN_IN()"
          />
        </div>
        <div class="input-set">
          <input
            class="password"
            type="password"
            placeholder="Password"
            v-model="formData.password"
            v-on:keyup.enter="SIGN_IN()"
          />
        </div>
        <div class="button-set" style="margin-top: 40px">
          <button class="blue" v-on:click="SIGN_IN()">
            <label>Sign In</label>
          </button>
        </div>
        <!-- <hr />
        <div class="button-set">
          <button class="outline-blue" v-on:click="SIGN_UP_BTN(2)">
            <label>Create Account</label>
          </button>
        </div>-->
        <div class="help-label">
          <label>
            Need helps? Visit
            <a>Help Center</a>
          </label>
        </div>
      </div>
    </div>

    <PageLoading v-if="isLoading == true" text="Logging In" />
    <div class="bg-filter"></div>
  </div>
</template>

<script>
//API
//import axios from "/axios.js";

//UI
import ViewLayout from "@/layouts/non-sidebar-layout.vue";
import PageLoading from "@/components/app-structures/app-loading.vue";

export default {
  name: "Login-View",
  components: { PageLoading },
  data() {
    return {
      appIcon: this.$store.state.appIcon,
      isLoggedIn: localStorage.getItem("user"),
      isLoading: false,
      current_tab: 1,
      formData: {
        username: "",
        password: ""
      }
    };
  },
  created() {
    this.$emit(`update:layout`, ViewLayout);
    this.$store.commit("CLEAR_CURRENT_INAPP");
    if (this.isLoggedIn) this.$router.push("/");
  },
  methods: {
    SIGN_IN() {
      this.$router.push("/");
      // if (this.formData.username) {
      //   if (this.formData.password) {
      //     this.isLoading = true;
      //     setTimeout(() => {
      //       var password = this.formData.password;
      //       var username = this.formData.username.toLowerCase();

      //       axios({
      //         method: "post",
      //         url: "/UserAccount/login",
      //         data: { username, password }
      //       })
      //         .then(res => {
      //           if (res.data.user && res.data.token) {
      //             localStorage.setItem("user", JSON.stringify(res.data.user));
      //             localStorage.setItem("token", JSON.stringify(res.data.token));
      //             console.log("==> SIGNED IN USER: ");
      //             console.log(res.data.user);
      //             this.$router.push("/");
      //           }
      //         })
      //         .catch(error => {
      //           if (error.response) {
      //             if (error.response.data) {
      //               this.$ons.notification.alert(error.response.data.message);
      //             }
      //             if (error.response.status == 0) {
      //               this.$ons.notification.alert(
      //                 "Cannot connect to a server.<br/> Please try again later."
      //               );
      //             }
      //           } else {
      //             console.log(error);
      //           }
      //         })
      //         .finally(() => {
      //           this.isLoading = false;
      //         });
      //     }, 500);
      //   } else {
      //     this.$ons.notification.alert('"Password" cannot be empty');
      //   }
      // } else {
      //   this.$ons.notification.alert('"Username" cannot be empty');
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";

#page-login {
  // background-image: url("/public/img/main-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .bg-filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: linear-gradient(180deg, #140a4b 0%, rgba(39, 89, 168, 0) 100%);
  }
}
.page-container {
  position: relative;
  height: 100%;
}
.login-panel {
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 20px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 2px 25px 2px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  h1 {
    font-size: 2.5em;
    font-style: normal;
    font-weight: 510;
    line-height: 30px;
    color: $web-font-color-black;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  label.sub-title {
    font-size: 24px;
    color: $web-font-color-grey;
    margin: 2px 0 10px 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }
  .content-wrapper {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
}
.app-logo {
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  img {
    height: 100%;
    object-fit: contain;
  }
}

.app-logo-login {
  width: 150px;
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 9;
  img {
    width: 100%;
    object-fit: contain;
  }
}

.form-login {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  .input-set {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    input {
      width: -webkit-fill-available;
      background: #f0f0f0;
      border: 1px solid #cecece;
      box-sizing: border-box;
      height: 44px;
      text-indent: 10px;
      font-size: 1.75em;
      line-height: 30px;
      font-style: normal;
      font-weight: 400;
      border-radius: 6px;
    }
    .user,
    .first {
      border-radius: 6px 6px 0px 0px;
    }
    .middle {
      border-radius: 0px;
      border-width: 0px 1px 1px 1px;
    }
    .password,
    .last {
      border-radius: 0px 0px 6px 6px;
      border-width: 0px 1px 1px 1px;
    }

    .password:focus {
      border-width: 0px 1px 1px 1px;
    }
  }
  .save-password-set {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    label {
      font-style: normal;
      font-weight: 400;
      font-size: 1.75em;
      line-height: 30px;
      color: $web-font-color-grey;
      margin-left: 10px;
    }
  }
}
.button-set {
  margin: 20px 0;
  button {
    height: 44px;
  }
}
h1 {
  font-weight: 800 !important;
  margin: 20px 0 20px 0;
}
.help-label {
  font-size: 12px;
  color: $web-font-color-grey;
  a {
    color: $web-font-color-blue;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>