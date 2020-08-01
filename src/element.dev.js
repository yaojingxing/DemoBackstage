import {Tabs,TabPane, Menu,RadioButton,RadioGroup,Button,
    Submenu,
    MenuItem,
    MenuItemGroup,Input} from 'element-ui'
import Vue from "vue"
export default function elementconstructor(){
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Menu)
    Vue.use(RadioButton)
    Vue.use(RadioGroup)
    Vue.use(Submenu)
    Vue.use(Input)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Button)
}