export { default as NuxtLogo } from '../../components/global/NuxtLogo.vue'
export { default as Tutorial } from '../../components/global/Tutorial.vue'
export { default as MenuCardOption } from '../../components/global/cards/MenuCardOption.vue'
export { default as UserSidebarProfileCard } from '../../components/global/cards/UserSidebarProfileCard.vue'
export { default as Sidebar } from '../../components/global/sidebars/Sidebar.vue'
export { default as SidebarProfile } from '../../components/global/sidebars/SidebarProfile.vue'
export { default as ZenkoCardsHallMenuCardOption } from '../../components/zenko/cards/HallMenuCardOption.vue'
export { default as ZenkoCardsMenuCardAbout } from '../../components/zenko/cards/MenuCardAbout.vue'
export { default as ZenkoCardsMenuCardOption } from '../../components/zenko/cards/MenuCardOption.vue'
export { default as ZenkoCardsPostsListsCard } from '../../components/zenko/cards/PostsListsCard.vue'
export { default as ZenkoCardsUserSidebarProfileCard } from '../../components/zenko/cards/UserSidebarProfileCard.vue'
export { default as ZenkoSidebarsSidebar } from '../../components/zenko/sidebars/Sidebar.vue'
export { default as ZenkoSidebarsSidebarProfile } from '../../components/zenko/sidebars/SidebarProfile.vue'
export { default as FranbeautyCardsMenuCardAbout } from '../../components/franbeauty/cards/MenuCardAbout.vue'
export { default as FranbeautyCardsUserSidebarProfileCard } from '../../components/franbeauty/cards/UserSidebarProfileCard.vue'
export { default as FranbeautySidebarsSidebarProfile } from '../../components/franbeauty/sidebars/SidebarProfile.vue'
export { default as CodegrownCardsHallMenuCardOption } from '../../components/codegrown/cards/HallMenuCardOption.vue'
export { default as CodegrownCardsMenuCardAbout } from '../../components/codegrown/cards/MenuCardAbout.vue'
export { default as CodegrownCardsMenuCardOption } from '../../components/codegrown/cards/MenuCardOption.vue'
export { default as CodegrownCardsPostsListsCard } from '../../components/codegrown/cards/PostsListsCard.vue'
export { default as CodegrownCardsUserSidebarProfileCard } from '../../components/codegrown/cards/UserSidebarProfileCard.vue'
export { default as CodegrownSidebarsSidebar } from '../../components/codegrown/sidebars/Sidebar.vue'
export { default as CodegrownSidebarsSidebarProfile } from '../../components/codegrown/sidebars/SidebarProfile.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
