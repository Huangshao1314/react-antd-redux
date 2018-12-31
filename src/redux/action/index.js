/*
 * action 类型
 */

export const type = {
    SWITCH_MENU : 'SWITCH_MENU',
    COLLAPED_SIDER: 'COLLAPED_SIDER'
}

// 菜单点击切换，修改面包屑名称
export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        menuName
    }
}

// 点击图标收起展开侧边导航
export function collapedSider(collapedFlag) {
      return {
        type:type.COLLAPED_SIDER,
        collapedFlag
      }
}