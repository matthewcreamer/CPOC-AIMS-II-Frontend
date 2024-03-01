<template>
  <div id="page-login" class="page-body">
    <div class="login-panel" v-if="!isLoading">
      <img class="app-background" src="/img/banner.png" alt="app background image">
      
      <div class="form-login">
        <img class="app-logo" :src="appIcon" alt="app icon" />

        <div class="app-description">
          <h2>CPOC IMS</h2>
          <h1>INSPECTION & MAINTENANCE SYSTEM</h1>
          <h3>CARIGALI-PTTEPI Operating Company Sdn. Bhd.</h3>
        </div>

        <input
            class="user"
            type="text"
            placeholder="Username"
            v-model="formData.username"
            v-on:keyup.enter="SIGN_IN()"
        />
        <input
            class="password"
            type="password"
            placeholder="Password"
            v-model="formData.password"
            v-on:keyup.enter="SIGN_IN()"
        />

        <button class="signin" v-on:click="SIGN_IN()">Sign In</button>
        <button class="microsoft" v-on:click="SIGN_IN()">
          <img src="/img/microsoft.svg" alt="microsoft">
          Login with Microsoft
        </button>

        <span @click="$router.push('/forgot-password')" class="forgotPassword">Forgot Password?</span>

        <div class="footer">
          <span>2024 Ⓒ Designed and developed by</span>
          <img src="/img/dexon.svg" alt="dexon">
        </div>
      </div>
    </div>

    <PageLoading v-if="isLoading == true" text="Logging In" />
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.page-container {
  position: relative;
  height: 100%;
}
.login-panel {
  display: grid;
  grid-template-columns: 60% 40%;
  .app-background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .form-login {
    background-color: white;
    height: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 35px 0 35px;
    gap: 20px;
    .app-logo {
      margin-top: 15vh;
      width: 80px;
      height: 80px;
      align-self: flex-start;
    }
    .app-description {
      margin-top: 10px;
      align-self: flex-start;
      h2 {
        color: #1D9531;
        font-size: 16px;
        margin: 0;
      }
      h1 {
        font-size: 20px;
        font-weight: 800;
        margin: 0;
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        margin-top: 3px;
      }
    }
    input {
      width: calc(100% - 60px);
      padding: 10px 30px;
      background-color: #F9F9F9;
      border: none;
      margin-top: 15px;
      border-radius: 5px;
      box-shadow: inset 0 2px 0 #E9E9E9;
    }
    input::placeholder {
      color: #BCBCBC;
    }
    button {
      width: 100%;
      padding: 12px 0;
      border: none;
      color: white;
      border-radius: 5px;
      font-weight: 800;
      cursor: pointer;
    }
    .signin {
      background-image: linear-gradient(to right, #1A0D7F, #3F2DCA);
    }
    .microsoft {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      background-image: linear-gradient(to right, #000000, #737373);
    }
    .forgotPassword {
      text-decoration: underline;
      font-size: 13px;
      align-self: flex-start;
      cursor: pointer;
    }
    .footer {
      display: flex;
      align-items: center;
      gap: 10px;
      position: fixed;
      bottom: 20px;
      font-size: 10px;
      img {
        width: 100px;
        height: auto;
      }
    }
  }
}
</style>