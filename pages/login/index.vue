<template>
  <div class="auth-page">
    <div class="container page">
        <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">{{ isLogin ? 'sign in' : 'Sign up'}}</h1>
                <p class="text-xs-center">
                    <nuxt-link v-if="!isLogin" to="/login">Have an account?</nuxt-link>
                    <nuxt-link v-else to="/register">Need an account?</nuxt-link>
                </p>

                <ul class="error-messages">
                    <li>That email is already taken</li>
                </ul>

                <form @submit.prevent="signInOrOn">
                    <fieldset class="form-group" v-if="!isLogin">
                        <input class="form-control form-control-lg" type="text" v-model="user.username" placeholder="Your Name" required >
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="email" v-model="user.email" placeholder="Email" required>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="password" v-model="user.password" placeholder="Password" required>
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right">
                        {{ isLogin ? 'sign in' : 'Sign up'}}
                    </button>
                </form>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import {login, register} from '@/api/user';
export default {
    middleware: 'auth',
    data() {
        return {
            user: {
                email: '815336232@qq.com',
                password: '123456',
                username: ''
            }
        };
    },
    computed: {
        isLogin() {
            return this.$route.name === 'login';
        }
    },
    methods: {
       async signInOrOn() {
        const Cookie = process.client ? require('js-cookie') : undefined;
            // 判断是登录还是注册
            if (this.isLogin) {

            }
           try {
                 const {data} = this.isLogin ? await login({
                    user: this.user
                }) : await register({user: this.user});

                this.$store.commit('setUser', data.user);
                Cookie.set('user', JSON.stringify(data.user));
                this.$router.push('/');
           } catch (error) {    
                this.error = error
           }
        }
    }
}
</script>

<style>

</style>