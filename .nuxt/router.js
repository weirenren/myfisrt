import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _597b0012 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2b857352 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _2c0f796a = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _6997e880 = () => interopDefault(import('../pages/love/index.vue' /* webpackChunkName: "pages/love/index" */))
const _37162693 = () => interopDefault(import('../pages/playfun/index.vue' /* webpackChunkName: "pages/playfun/index" */))
const _2ced30e7 = () => interopDefault(import('../pages/redirect.vue' /* webpackChunkName: "pages/redirect" */))
const _216c84bc = () => interopDefault(import('../pages/rents/index.vue' /* webpackChunkName: "pages/rents/index" */))
const _c9abee64 = () => interopDefault(import('../pages/resou/index.vue' /* webpackChunkName: "pages/resou/index" */))
const _54d50632 = () => interopDefault(import('../pages/topics/index.vue' /* webpackChunkName: "pages/topics/index" */))
const _37e88fb0 = () => interopDefault(import('../pages/tweets/index.vue' /* webpackChunkName: "pages/tweets/index" */))
const _49a2706a = () => interopDefault(import('../pages/admin/articles/index.vue' /* webpackChunkName: "pages/admin/articles/index" */))
const _7a204a7c = () => interopDefault(import('../pages/admin/comments/index.vue' /* webpackChunkName: "pages/admin/comments/index" */))
const _746d3c7e = () => interopDefault(import('../pages/admin/links/index.vue' /* webpackChunkName: "pages/admin/links/index" */))
const _cae51d7a = () => interopDefault(import('../pages/admin/operate-log/index.vue' /* webpackChunkName: "pages/admin/operate-log/index" */))
const _ae4beb9e = () => interopDefault(import('../pages/admin/settings/index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _d3844fb2 = () => interopDefault(import('../pages/admin/tags/index.vue' /* webpackChunkName: "pages/admin/tags/index" */))
const _da3aaa9c = () => interopDefault(import('../pages/admin/topics/index.vue' /* webpackChunkName: "pages/admin/topics/index" */))
const _75f63430 = () => interopDefault(import('../pages/admin/tweets/index.vue' /* webpackChunkName: "pages/admin/tweets/index" */))
const _d72b6d60 = () => interopDefault(import('../pages/admin/users/index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _057b5680 = () => interopDefault(import('../pages/article/create.vue' /* webpackChunkName: "pages/article/create" */))
const _79fc9204 = () => interopDefault(import('../pages/love/create.vue' /* webpackChunkName: "pages/love/create" */))
const _0accd0d7 = () => interopDefault(import('../pages/rent/create.vue' /* webpackChunkName: "pages/rent/create" */))
const _70581967 = () => interopDefault(import('../pages/topic/create.vue' /* webpackChunkName: "pages/topic/create" */))
const _3e767c5e = () => interopDefault(import('../pages/user/favorites.vue' /* webpackChunkName: "pages/user/favorites" */))
const _e8c01d14 = () => interopDefault(import('../pages/user/forget.vue' /* webpackChunkName: "pages/user/forget" */))
const _7e2f3115 = () => interopDefault(import('../pages/user/messages.vue' /* webpackChunkName: "pages/user/messages" */))
const _3a539270 = () => interopDefault(import('../pages/user/profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _0927b079 = () => interopDefault(import('../pages/user/resign.vue' /* webpackChunkName: "pages/user/resign" */))
const _0e5869aa = () => interopDefault(import('../pages/user/scores.vue' /* webpackChunkName: "pages/user/scores" */))
const _2cb4af28 = () => interopDefault(import('../pages/user/settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _7bdd9cab = () => interopDefault(import('../pages/user/signin.vue' /* webpackChunkName: "pages/user/signin" */))
const _df1819be = () => interopDefault(import('../pages/user/signup.vue' /* webpackChunkName: "pages/user/signup" */))
const _411ddcd7 = () => interopDefault(import('../pages/admin/components/UserInfo.vue' /* webpackChunkName: "pages/admin/components/UserInfo" */))
const _4058e5de = () => interopDefault(import('../pages/admin/topics/nodes.vue' /* webpackChunkName: "pages/admin/topics/nodes" */))
const _43717f10 = () => interopDefault(import('../pages/admin/users/score.vue' /* webpackChunkName: "pages/admin/users/score" */))
const _c2dc70f2 = () => interopDefault(import('../pages/admin/users/score-log.vue' /* webpackChunkName: "pages/admin/users/score-log" */))
const _0a334ae3 = () => interopDefault(import('../pages/rents/node/newest.vue' /* webpackChunkName: "pages/rents/node/newest" */))
const _afeae062 = () => interopDefault(import('../pages/rents/node/recommend.vue' /* webpackChunkName: "pages/rents/node/recommend" */))
const _5da9e773 = () => interopDefault(import('../pages/topics/node/newest.vue' /* webpackChunkName: "pages/topics/node/newest" */))
const _5fffe93f = () => interopDefault(import('../pages/topics/node/recommend.vue' /* webpackChunkName: "pages/topics/node/recommend" */))
const _577f30e3 = () => interopDefault(import('../pages/user/email/reset.vue' /* webpackChunkName: "pages/user/email/reset" */))
const _7d3e74d6 = () => interopDefault(import('../pages/user/email/verify.vue' /* webpackChunkName: "pages/user/email/verify" */))
const _8ce5ca90 = () => interopDefault(import('../pages/user/github/callback.vue' /* webpackChunkName: "pages/user/github/callback" */))
const _9858b9ca = () => interopDefault(import('../pages/user/qq/callback.vue' /* webpackChunkName: "pages/user/qq/callback" */))
const _77950e39 = () => interopDefault(import('../pages/article/edit/_id.vue' /* webpackChunkName: "pages/article/edit/_id" */))
const _30f7d00b = () => interopDefault(import('../pages/article/redirect/_id.vue' /* webpackChunkName: "pages/article/redirect/_id" */))
const _25f57192 = () => interopDefault(import('../pages/love/edit/_id.vue' /* webpackChunkName: "pages/love/edit/_id" */))
const _6e714ed0 = () => interopDefault(import('../pages/rent/edit/_id.vue' /* webpackChunkName: "pages/rent/edit/_id" */))
const _377ee4a2 = () => interopDefault(import('../pages/rents/node/_nodeId.vue' /* webpackChunkName: "pages/rents/node/_nodeId" */))
const _30b79a4b = () => interopDefault(import('../pages/rents/tag/_tagId.vue' /* webpackChunkName: "pages/rents/tag/_tagId" */))
const _c3669940 = () => interopDefault(import('../pages/topic/edit/_id.vue' /* webpackChunkName: "pages/topic/edit/_id" */))
const _00c4f9c2 = () => interopDefault(import('../pages/topics/node/_nodeId.vue' /* webpackChunkName: "pages/topics/node/_nodeId" */))
const _5cb32bbb = () => interopDefault(import('../pages/topics/tag/_tagId.vue' /* webpackChunkName: "pages/topics/tag/_tagId" */))
const _95434434 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _2899c02d = () => interopDefault(import('../pages/articles/_tagId.vue' /* webpackChunkName: "pages/articles/_tagId" */))
const _bc7642a0 = () => interopDefault(import('../pages/link/_id.vue' /* webpackChunkName: "pages/link/_id" */))
const _7f1edadd = () => interopDefault(import('../pages/links/_page.vue' /* webpackChunkName: "pages/links/_page" */))
const _47d1fe28 = () => interopDefault(import('../pages/love/_id.vue' /* webpackChunkName: "pages/love/_id" */))
const _c8d9edee = () => interopDefault(import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */))
const _c45e3438 = () => interopDefault(import('../pages/projects/_page.vue' /* webpackChunkName: "pages/projects/_page" */))
const _9a784a22 = () => interopDefault(import('../pages/rent/_id.vue' /* webpackChunkName: "pages/rent/_id" */))
const _2e5b4f7a = () => interopDefault(import('../pages/tags/_page.vue' /* webpackChunkName: "pages/tags/_page" */))
const _185fdc5f = () => interopDefault(import('../pages/topic/_id.vue' /* webpackChunkName: "pages/topic/_id" */))
const _110218be = () => interopDefault(import('../pages/tweet/_id.vue' /* webpackChunkName: "pages/tweet/_id" */))
const _05cf2baf = () => interopDefault(import('../pages/user/_userId/index.vue' /* webpackChunkName: "pages/user/_userId/index" */))
const _46eeaa0f = () => interopDefault(import('../pages/user/_userId/articles/_page.vue' /* webpackChunkName: "pages/user/_userId/articles/_page" */))
const _0d7dd6f6 = () => interopDefault(import('../pages/user/_userId/topics/_page.vue' /* webpackChunkName: "pages/user/_userId/topics/_page" */))
const _7932dad7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _597b0012,
    name: "about"
  }, {
    path: "/admin",
    component: _2b857352,
    name: "admin"
  }, {
    path: "/articles",
    component: _2c0f796a,
    name: "articles"
  }, {
    path: "/love",
    component: _6997e880,
    name: "love"
  }, {
    path: "/playfun",
    component: _37162693,
    name: "playfun"
  }, {
    path: "/redirect",
    component: _2ced30e7,
    name: "redirect"
  }, {
    path: "/rents",
    component: _216c84bc,
    name: "rents"
  }, {
    path: "/resou",
    component: _c9abee64,
    name: "resou"
  }, {
    path: "/topics",
    component: _54d50632,
    name: "topics"
  }, {
    path: "/tweets",
    component: _37e88fb0,
    name: "tweets"
  }, {
    path: "/admin/articles",
    component: _49a2706a,
    name: "admin-articles"
  }, {
    path: "/admin/comments",
    component: _7a204a7c,
    name: "admin-comments"
  }, {
    path: "/admin/links",
    component: _746d3c7e,
    name: "admin-links"
  }, {
    path: "/admin/operate-log",
    component: _cae51d7a,
    name: "admin-operate-log"
  }, {
    path: "/admin/settings",
    component: _ae4beb9e,
    name: "admin-settings"
  }, {
    path: "/admin/tags",
    component: _d3844fb2,
    name: "admin-tags"
  }, {
    path: "/admin/topics",
    component: _da3aaa9c,
    name: "admin-topics"
  }, {
    path: "/admin/tweets",
    component: _75f63430,
    name: "admin-tweets"
  }, {
    path: "/admin/users",
    component: _d72b6d60,
    name: "admin-users"
  }, {
    path: "/article/create",
    component: _057b5680,
    name: "article-create"
  }, {
    path: "/love/create",
    component: _79fc9204,
    name: "love-create"
  }, {
    path: "/rent/create",
    component: _0accd0d7,
    name: "rent-create"
  }, {
    path: "/topic/create",
    component: _70581967,
    name: "topic-create"
  }, {
    path: "/user/favorites",
    component: _3e767c5e,
    name: "user-favorites"
  }, {
    path: "/user/forget",
    component: _e8c01d14,
    name: "user-forget"
  }, {
    path: "/user/messages",
    component: _7e2f3115,
    name: "user-messages"
  }, {
    path: "/user/profile",
    component: _3a539270,
    name: "user-profile"
  }, {
    path: "/user/resign",
    component: _0927b079,
    name: "user-resign"
  }, {
    path: "/user/scores",
    component: _0e5869aa,
    name: "user-scores"
  }, {
    path: "/user/settings",
    component: _2cb4af28,
    name: "user-settings"
  }, {
    path: "/user/signin",
    component: _7bdd9cab,
    name: "user-signin"
  }, {
    path: "/user/signup",
    component: _df1819be,
    name: "user-signup"
  }, {
    path: "/admin/components/UserInfo",
    component: _411ddcd7,
    name: "admin-components-UserInfo"
  }, {
    path: "/admin/topics/nodes",
    component: _4058e5de,
    name: "admin-topics-nodes"
  }, {
    path: "/admin/users/score",
    component: _43717f10,
    name: "admin-users-score"
  }, {
    path: "/admin/users/score-log",
    component: _c2dc70f2,
    name: "admin-users-score-log"
  }, {
    path: "/rents/node/newest",
    component: _0a334ae3,
    name: "rents-node-newest"
  }, {
    path: "/rents/node/recommend",
    component: _afeae062,
    name: "rents-node-recommend"
  }, {
    path: "/topics/node/newest",
    component: _5da9e773,
    name: "topics-node-newest"
  }, {
    path: "/topics/node/recommend",
    component: _5fffe93f,
    name: "topics-node-recommend"
  }, {
    path: "/user/email/reset",
    component: _577f30e3,
    name: "user-email-reset"
  }, {
    path: "/user/email/verify",
    component: _7d3e74d6,
    name: "user-email-verify"
  }, {
    path: "/user/github/callback",
    component: _8ce5ca90,
    name: "user-github-callback"
  }, {
    path: "/user/qq/callback",
    component: _9858b9ca,
    name: "user-qq-callback"
  }, {
    path: "/article/edit/:id?",
    component: _77950e39,
    name: "article-edit-id"
  }, {
    path: "/article/redirect/:id?",
    component: _30f7d00b,
    name: "article-redirect-id"
  }, {
    path: "/love/edit/:id?",
    component: _25f57192,
    name: "love-edit-id"
  }, {
    path: "/rent/edit/:id?",
    component: _6e714ed0,
    name: "rent-edit-id"
  }, {
    path: "/rents/node/:nodeId?",
    component: _377ee4a2,
    name: "rents-node-nodeId"
  }, {
    path: "/rents/tag/:tagId?",
    component: _30b79a4b,
    name: "rents-tag-tagId"
  }, {
    path: "/topic/edit/:id?",
    component: _c3669940,
    name: "topic-edit-id"
  }, {
    path: "/topics/node/:nodeId?",
    component: _00c4f9c2,
    name: "topics-node-nodeId"
  }, {
    path: "/topics/tag/:tagId?",
    component: _5cb32bbb,
    name: "topics-tag-tagId"
  }, {
    path: "/article/:id?",
    component: _95434434,
    name: "article-id"
  }, {
    path: "/articles/:tagId",
    component: _2899c02d,
    name: "articles-tagId"
  }, {
    path: "/link/:id?",
    component: _bc7642a0,
    name: "link-id"
  }, {
    path: "/links/:page?",
    component: _7f1edadd,
    name: "links-page"
  }, {
    path: "/love/:id",
    component: _47d1fe28,
    name: "love-id"
  }, {
    path: "/project/:id?",
    component: _c8d9edee,
    name: "project-id"
  }, {
    path: "/projects/:page?",
    component: _c45e3438,
    name: "projects-page"
  }, {
    path: "/rent/:id?",
    component: _9a784a22,
    name: "rent-id"
  }, {
    path: "/tags/:page?",
    component: _2e5b4f7a,
    name: "tags-page"
  }, {
    path: "/topic/:id?",
    component: _185fdc5f,
    name: "topic-id"
  }, {
    path: "/tweet/:id?",
    component: _110218be,
    name: "tweet-id"
  }, {
    path: "/user/:userId",
    component: _05cf2baf,
    name: "user-userId"
  }, {
    path: "/user/:userId?/articles/:page?",
    component: _46eeaa0f,
    name: "user-userId-articles-page"
  }, {
    path: "/user/:userId?/topics/:page?",
    component: _0d7dd6f6,
    name: "user-userId-topics-page"
  }, {
    path: "/",
    component: _7932dad7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
