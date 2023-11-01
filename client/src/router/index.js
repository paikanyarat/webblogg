import Vue from "vue";
import Router from "vue-router";
// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";

import MenuIndex from "@/components/Menus/Index";
import MenuShow from "@/components/Menus/Showmenu";
import MenuEdit from "@/components/Menus/Editmenu";
import MenuCreate from "@/components/Menus/Createmenu";

import Login from "@/components/Login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    {
      path: "/menus",
      name: "menus",
      component: MenuIndex
    },
    {
      path: "/menu/create",
      name: "menu-create",
      component: MenuCreate
    },
    {
      path: "/menu/edit/:menuId",
      name: "menu-edit",
      component: MenuEdit
    },
    {
      path: "/menu/:menusId",
      name: "menu",
      component: MenuShow
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});