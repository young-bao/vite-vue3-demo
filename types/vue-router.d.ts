export { }

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    orderNo?: number
    // title
    title: string
    // Whether not to cache
    ignoreKeepAlive?: boolean
    // icon on tab
    icon?: string
  }
}
