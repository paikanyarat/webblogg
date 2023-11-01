import Api from "@/services/Api";
export default {
  index(search) {
    return Api().get("menus");
  },
  show(menuId) {
    return Api().get("menus/" + menuId);
  },
  post(menu) {
    return Api().post("menu", menu);
  },
  put(menu) {
    return Api().put("menus/" + menu.id, menu);
  },
  delete(menu) {
    return Api().delete("menu/" + menu.id, menu);
  },
};