<template>
    <div class="home-page">

        <div class="banner">
            <div class="container">
                <h1 class="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div class="container page">
            <div class="row">

                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li 
                            class="nav-item" v-if="user">
                                <nuxt-link 
                                class="nav-link" 
                                :to="{
                                    name: 'home',
                                    query: {
                                        tab: 'your_feed'
                                    }
                                }"
                                :class="{
                                    active: tab === 'your_feed'
                                }"
                                exact
                                >
                                    Your Feed
                                </nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link 
                                class="nav-link" 
                                :to="{
                                    name: 'home',
                                    query: {
                                        tab: 'global_feed'
                                    }
                                }"
                                :class="{
                                    active: tab === 'global_feed'
                                }"
                                exact
                                >
                                    Global Feed
                                </nuxt-link>
                            </li>
                            <li class="nav-item" v-if="tag">
                                <nuxt-link :to="{
                                    name: 'home',
                                    query: {
                                        tag,
                                        tab: 'tag'
                                    }
                                }" 
                                class="nav-link"
                                :class="{
                                    active: tab === 'tag'
                                }">
                                #{{tag}}
                            </nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="article-preview" v-for="(item, index) in articles" :key="item.slug">
                        <div class="article-meta">
                            <nuxt-link :to="{
                                name: 'profile',
                                params: {
                                    username: item.author.username
                                }
                            }"><img :src="item.author.image" /></nuxt-link>
                            <div class="info">
                                <nuxt-link class="author" :to="{
                                name: 'profile',
                                params: {
                                    username: item.author.username
                                }
                            }">{{item.author.username}}</nuxt-link>
                                <span class="date">{{item.createdAt | formatDate}}</span>
                            </div>
                            <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{
                                    active: item.favorited
                                }">
                                <i class="ion-heart"></i> {{item.favoritesCount}}
                            </button>
                        </div>
                        <nuxt-link :to="{
                            name: 'article',
                            params: {
                                slug: item.slug
                            }
                        }" class="preview-link">
                            <h1>{{item.title}}</h1>
                            <p>{{item.description}}</p>
                            <span>Read more...</span>
                            <ul class="tag-list">
                                <!-- ngRepeat: tag in $ctrl.article.tagList -->
                                <li class="tag-default tag-pill tag-outline ng-binding ng-scope" v-for="tag in item.tagList">
                                    {{tag}}
                                </li>
                            </ul>
                        </nuxt-link>
                    </div>

                </div>

                <div class="col-md-3">
                    <div class="sidebar">
                        <p>Popular Tags</p>

                        <div class="tag-list">
                            <!-- <template > -->
                            <nuxt-link :to="{
                                    name: 'home',
                                    query: {
                                        tag,
                                        tab: 'tag'
                                    }
                                }" class="tag-pill tag-default" v-for="(tag, index) in tags" :key="tag">{{tag}}
                            </nuxt-link>
                            <!-- </template> -->
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import {
        getArticles,
        getTags
    } from '@/api/articles';
import { format } from 'path';
    import {mapState} from 'vuex';
    export default {
        name: 'homePage',
        async asyncData({
            query
        }) {
            const {tag, tab} = query;
            const [article, tagArr] = await Promise.all([
                getArticles({
                    tag
                }),
                getTags()
            ]);
            const {
                articles,
                articlesCount
            } = article.data;
            const {
                tags
            } = tagArr.data;
            return {
                articles,
                articlesCount,
                tags,
                tag,
                tab: tab || 'global_feed'
            }
        },
        watchQuery: ['tag', 'tab'], // 用于监听浏览器参数变化后，触发asyncData、fetch
        computed: {
            ...mapState(['user'])
        }
    }
</script>

<style>

</style>