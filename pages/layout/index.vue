<template>
    <div class="nav">
        <!-- 导航栏 -->
        <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">conduit</a>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/article/1">
                            <i class="ion-compose"></i>&nbsp;New Article
                        </nuxt-link>
                    </li>
                    <template v-if="user">
                        <li class="nav-item">
                        <nuxt-link class="nav-link" to="/setting">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link ng-binding" to="/profile/123">
                            <img class="user-pic" ng-src="">
                            yangG
                        </nuxt-link>
                    </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                        <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
                    </li>
                    </template>
                </ul>
            </div>
        </nav>
        <!-- 出口 -->
        <nuxt-child />
        <!-- 页脚 -->
        <footer>
            <div class="container">
                <a href="/" class="logo-font">conduit</a>
                <span class="attribution">
                    An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
                    licensed under MIT.
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'LayoutPage',
        computed: {
            ...mapState(['user'])
        },
    }
</script>

<style>

</style>