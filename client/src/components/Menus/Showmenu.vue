<template>
    <div>
      <h1>Get Menu</h1>
      <p>ชื่อเมนู : <input type="text" v-model="menu.name" /></p>
      <p>ราคา : <input type="text" v-model="menu.price" />บาท</p>
      <p>ขนาด : <input type="text" v-model="menu.size" /></p>
      <p>ประเภท : <input type="text" v-model="menu.category" /></p>
      <p>รายละเอียด: <input type="text" v-model="menu.description" /></p>
      <p>ส่วนประกอบ : <input type="text" v-model="menu.ingredients" /></p>
    </div>
  </template>
  <script>
  import MenusService from "@/services/MenusService";
  export default {
    data() {
      return {
        menu: "",
      };
    },
    async created() {
      try {
        let menuId = this.$route.params.menusId;
        this.menu = (await MenusService.show(menuId)).data;
      } catch (error) {
        console.log(error);
      }
    },
  };
  </script>
<style scoped></style>