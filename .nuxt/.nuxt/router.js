import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b6931ac0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _7b501665 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _4639d07d = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _70bffc1c = () => interopDefault(import('../pages/love/index.vue' /* webpackChunkName: "pages/love/index" */))
const _07e50b99 = () => interopDefault(import('../pages/redirect.vue' /* webpackChunkName: "pages/redirect" */))
const _ff46e4a0 = () => interopDefault(import('../pages/rents/index.vue' /* webpackChunkName: "pages/rents/index" */))
const _33c79038 = () => interopDefault(import('../pages/topics/index.vue' /* webpackChunkName: "pages/topics/index" */))
const _6da07d3c = () => interopDefault(import('../pages/tweets/index.vue' /* webpackChunkName: "pages/tweets/index" */))
const _664a277d = () => interopDefault(import('../pages/admin/articles/index.vue' /* webpackChunkName: "pages/admin/articles/index" */))
const _4e0b3a74 = () => interopDefault(import('../pages/admin/comments/index.vue' /* webpackChunkName: "pages/admin/comments/index" */))
const _93d12162 = () => interopDefault(import('../pages/admin/links/index.vue' /* webpackChunkName: "pages/admin/links/index" */))
const _bddac75e = () => interopDefault(import('../pages/admin/operate-log/index.vue' /* webpackChunkName: "pages/admin/operate-log/index" */))
const _33f569e3 = () => interopDefault(import('../pages/admin/settings/index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _2f5e3e4e = () => interopDefault(import('../pages/admin/tags/index.vue' /* webpackChunkName: "pages/admin/tags/index" */))
const _a7536238 = () => interopDefault(import('../pages/admin/topics/index.vue' /* webpackChunkName: "pages/admin/topics/index" */))
const _e12c4f3c = () => interopDefault(import('../pages/admin/tweets/index.vue' /* webpackChunkName: "pages/admin/tweets/index" */))
const _f68f5244 = () => interopDefault(import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _61bce3b2 = () => interopDefault(import('../pages/article/create.vue' /* webpackChunkName: "pages/article/create" */))
const _5414870c = () => interopDefault(import('../pages/love/create.vue' /* webpackChunkName: "pages/love/create" */))
const _c840be36 = () => interopDefault(import('../pages/rent/create.vue' /* webpackChunkName: "pages/rent/create" */))
const _019f4b19 = () => interopDefault(import('../pages/topic/create.vue' /* webpackChunkName: "pages/topic/create" */))
const _ca8fece0 = () => interopDefault(import('../pages/user/favorites.vue' /* webpackChunkName: "pages/user/favorites" */))
const _15ce35a3 = () => interopDefault(import('../pages/user/messages.vue' /* webpackChunkName: "pages/user/messages" */))
const _c1298c90 = () => interopDefault(import('../pages/user/scores.vue' /* webpackChunkName: "pages/user/scores" */))
const _fd76a60c = () => interopDefault(import('../pages/user/settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _0cf06cb9 = () => interopDefault(import('../pages/user/signin.vue' /* webpackChunkName: "pages/user/signin" */))
const _2186c32f = () => interopDefault(import('../pages/user/signup.vue' /* webpackChunkName: "pages/user/signup" */))
const _89f70736 = () => interopDefault(import('../pages/admin/components/UserInfo.vue' /* webpackChunkName: "pages/admin/components/UserInfo" */))
const _0d719d7a = () => interopDefault(import('../pages/admin/topics/nodes.vue' /* webpackChunkName: "pages/admin/topics/nodes" */))
const _33bf8c9e = () => interopDefault(import('../pages/admin/users/score.vue' /* webpackChunkName: "pages/admin/users/score" */))
const _76e25e15 = () => interopDefault(import('../pages/admin/users/score-log.vue' /* webpackChunkName: "pages/admin/users/score-log" */))
const _0afd4f1e = () => interopDefault(import('../pages/rents/node/newest.vue' /* webpackChunkName: "pages/rents/node/newest" */))
const _3325ef81 = () => interopDefault(import('../pages/rents/node/recommend.vue' /* webpackChunkName: "pages/rents/node/recommend" */))
const _771d8ba5 = () => interopDefault(import('../pages/topics/node/newest.vue' /* webpackChunkName: "pages/topics/node/newest" */))
const _38507fcd = () => interopDefault(import('../pages/topics/node/recommend.vue' /* webpackChunkName: "pages/topics/node/recommend" */))
const _9ca259ba = () => interopDefault(import('../pages/user/email/verify.vue' /* webpackChunkName: "pages/user/email/verify" */))
const _44a87a6a = () => interopDefault(import('../pages/user/github/callback.vue' /* webpackChunkName: "pages/user/github/callback" */))
const _05e6abcd = () => interopDefault(import('../pages/user/qq/callback.vue' /* webpackChunkName: "pages/user/qq/callback" */))
const _6cafd22a = () => interopDefault(import('../pages/article/edit/_id.vue' /* webpackChunkName: "pages/article/edit/_id" */))
const _87d9a086 = () => interopDefault(import('../pages/article/redirect/_id.vue' /* webpackChunkName: "pages/article/redirect/_id" */))
const _f6b76876 = () => interopDefault(import('../pages/love/edit/_id.vue' /* webpackChunkName: "pages/love/edit/_id" */))
const _0610535e = () => interopDefault(import('../pages/rent/edit/_id.vue' /* webpackChunkName: "pages/rent/edit/_id" */))
const _04979c3e = () => interopDefault(import('../pages/rents/node/_nodeId.vue' /* webpackChunkName: "pages/rents/node/_nodeId" */))
const _fa6aba06 = () => interopDefault(import('../pages/rents/tag/_tagId.vue' /* webpackChunkName: "pages/rents/tag/_tagId" */))
const _0ae37edc = () => interopDefault(import('../pages/topic/edit/_id.vue' /* webpackChunkName: "pages/topic/edit/_id" */))
const _149e652d = () => interopDefault(import('../pages/topics/node/_nodeId.vue' /* webpackChunkName: "pages/topics/node/_nodeId" */))
const _4d013949 = () => interopDefault(import('../pages/topics/tag/_tagId.vue' /* webpackChunkName: "pages/topics/tag/_tagId" */))
const _46712df4 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _5489d93b = () => interopDefault(import('../pages/articles/_tagId.vue' /* webpackChunkName: "pages/articles/_tagId" */))
const _7cbcb962 = () => interopDefault(import('../pages/link/_id.vue' /* webpackChunkName: "pages/link/_id" */))
const _1031aaeb = () => interopDefault(import('../pages/links/_page.vue' /* webpackChunkName: "pages/links/_page" */))
const _22c9d8da = () => interopDefault(import('../pages/love/_id.vue' /* webpackChunkName: "pages/love/_id" */))
const _2ca5d917 = () => interopDefault(import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */))
const _0bdb19d4 = () => interopDefault(import('../pages/projects/_page.vue' /* webpackChunkName: "pages/projects/_page" */))
const _e48894be = () => interopDefault(import('../pages/rent/_id.vue' /* webpackChunkName: "pages/rent/_id" */))
const _35836316 = () => interopDefault(import('../pages/tags/_page.vue' /* webpackChunkName: "pages/tags/_page" */))
const _c7395026 = () => interopDefault(import('../pages/topic/_id.vue' /* webpackChunkName: "pages/topic/_id" */))
const _7b826f2f = () => interopDefault(import('../pages/tweet/_id.vue' /* webpackChunkName: "pages/tweet/_id" */))
const _1f42cfe1 = () => interopDefault(import('../pages/user/_userId/index.vue' /* webpackChunkName: "pages/user/_userId/index" */))
const _3ca8c3c6 = () => interopDefault(import('../pages/user/_userId/articles/_page.vue' /* webpackChunkName: "pages/user/_userId/articles/_page" */))
const _f13712f8 = () => interopDefault(import('../pages/user/_userId/topics/_page.vue' /* webpackChunkName: "pages/user/_userId/topics/_page" */))
const _77236536 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _b6931ac0,
    name: "about"
  }, {
    path: "/admin",
    component: _7b501665,
    name: "admin"
  }, {
    path: "/articles",
    component: _4639d07d,
    name: "articles"
  }, {
    path: "/love",
    component: _70bffc1c,
    name: "love"
  }, {
    path: "/redirect",
    component: _07e50b99,
    name: "redirect"
  }, {
    path: "/rents",
    component: _ff46e4a0,
    name: "rents"
  }, {
    path: "/topics",
    component: _33c79038,
    name: "topics"
  }, {
    path: "/tweets",
    component: _6da07d3c,
    name: "tweets"
  }, {
    path: "/admin/articles",
    component: _664a277d,
    name: "admin-articles"
  }, {
    path: "/admin/comments",
    component: _4e0b3a74,
    name: "admin-comments"
  }, {
    path: "/admin/links",
    component: _93d12162,
    name: "admin-links"
  }, {
    path: "/admin/operate-log",
    component: _bddac75e,
    name: "admin-operate-log"
  }, {
    path: "/admin/settings",
    component: _33f569e3,
    name: "admin-settings"
  }, {
    path: "/admin/tags",
    component: _2f5e3e4e,
    name: "admin-tags"
  }, {
    path: "/admin/topics",
    component: _a7536238,
    name: "admin-topics"
  }, {
    path: "/admin/tweets",
    component: _e12c4f3c,
    name: "admin-tweets"
  }, {
    path: "/admin/users",
    component: _f68f5244,
    name: "admin-users"
  }, {
    path: "/article/create",
    component: _61bce3b2,
    name: "article-create"
  }, {
    path: "/love/create",
    component: _5414870c,
    name: "love-create"
  }, {
    path: "/rent/create",
    component: _c840be36,
    name: "rent-create"
  }, {
    path: "/topic/create",
    component: _019f4b19,
    name: "topic-create"
  }, {
    path: "/user/favorites",
    component: _ca8fece0,
    name: "user-favorites"
  }, {
    path: "/user/messages",
    component: _15ce35a3,
    name: "user-messages"
  }, {
    path: "/user/scores",
    component: _c1298c90,
    name: "user-scores"
  }, {
    path: "/user/settings",
    component: _fd76a60c,
    name: "user-settings"
  }, {
    path: "/user/signin",
    component: _0cf06cb9,
    name: "user-signin"
  }, {
    path: "/user/signup",
    component: _2186c32f,
    name: "user-signup"
  }, {
    path: "/admin/components/UserInfo",
    component: _89f70736,
    name: "admin-components-UserInfo"
  }, {
    path: "/admin/topics/nodes",
    component: _0d719d7a,
    name: "admin-topics-nodes"
  }, {
    path: "/admin/users/score",
    component: _33bf8c9e,
    name: "admin-users-score"
  }, {
    path: "/admin/users/score-log",
    component: _76e25e15,
    name: "admin-users-score-log"
  }, {
    path: "/rents/node/newest",
    component: _0afd4f1e,
    name: "rents-node-newest"
  }, {
    path: "/rents/node/recommend",
    component: _3325ef81,
    name: "rents-node-recommend"
  }, {
    path: "/topics/node/newest",
    component: _771d8ba5,
    name: "topics-node-newest"
  }, {
    path: "/topics/node/recommend",
    component: _38507fcd,
    name: "topics-node-recommend"
  }, {
    path: "/user/email/verify",
    component: _9ca259ba,
    name: "user-email-verify"
  }, {
    path: "/user/github/callback",
    component: _44a87a6a,
    name: "user-github-callback"
  }, {
    path: "/user/qq/callback",
    component: _05e6abcd,
    name: "user-qq-callback"
  }, {
    path: "/article/edit/:id?",
    component: _6cafd22a,
    name: "article-edit-id"
  }, {
    path: "/article/redirect/:id?",
    component: _87d9a086,
    name: "article-redirect-id"
  }, {
    path: "/love/edit/:id?",
    component: _f6b76876,
    name: "love-edit-id"
  }, {
    path: "/rent/edit/:id?",
    component: _0610535e,
    name: "rent-edit-id"
  }, {
    path: "/rents/node/:nodeId?",
    component: _04979c3e,
    name: "rents-node-nodeId"
  }, {
    path: "/rents/tag/:tagId?",
    component: _fa6aba06,
    name: "rents-tag-tagId"
  }, {
    path: "/topic/edit/:id?",
    component: _0ae37edc,
    name: "topic-edit-id"
  }, {
    path: "/topics/node/:nodeId?",
    component: _149e652d,
    name: "topics-node-nodeId"
  }, {
    path: "/topics/tag/:tagId?",
    component: _4d013949,
    name: "topics-tag-tagId"
  }, {
    path: "/article/:id?",
    component: _46712df4,
    name: "article-id"
  }, {
    path: "/articles/:tagId",
    component: _5489d93b,
    name: "articles-tagId"
  }, {
    path: "/link/:id?",
    component: _7cbcb962,
    name: "link-id"
  }, {
    path: "/links/:page?",
    component: _1031aaeb,
    name: "links-page"
  }, {
    path: "/love/:id",
    component: _22c9d8da,
    name: "love-id"
  }, {
    path: "/project/:id?",
    component: _2ca5d917,
    name: "project-id"
  }, {
    path: "/projects/:page?",
    component: _0bdb19d4,
    name: "projects-page"
  }, {
    path: "/rent/:id?",
    component: _e48894be,
    name: "rent-id"
  }, {
    path: "/tags/:page?",
    component: _35836316,
    name: "tags-page"
  }, {
    path: "/topic/:id?",
    component: _c7395026,
    name: "topic-id"
  }, {
    path: "/tweet/:id?",
    component: _7b826f2f,
    name: "tweet-id"
  }, {
    path: "/user/:userId",
    component: _1f42cfe1,
    name: "user-userId"
  }, {
    path: "/user/:userId?/articles/:page?",
    component: _3ca8c3c6,
    name: "user-userId-articles-page"
  }, {
    path: "/user/:userId?/topics/:page?",
    component: _f13712f8,
    name: "user-userId-topics-page"
  }, {
    path: "/",
    component: _77236536,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
