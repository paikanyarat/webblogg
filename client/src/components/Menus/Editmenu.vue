<template>
  <div>
    <div>
      <h1>Edit Menu</h1>
      <form v-on:submit.prevent="editMenu">
        <p>ชื่อเมนู : <input type="text" v-model="menu.name" /></p>
        <p>ราคา : <input type="text" v-model="menu.price" />บาท</p>
        <p>ขนาด : <input type="text" v-model="menu.size" /></p>
        <p>ประเภท : <input type="text" v-model="menu.category" /></p>
        <p>รายละเอียด: <input type="text" v-model="menu.description" /></p>
        <p>ส่วนประกอบ : <input type="text" v-model="menu.ingredients" /></p>
        <p><button type="submit">edit menu</button></p>
      </form>
    </div>
    <hr />
    <div>
      <p>ชื่อเมนู : {{ menu.name }}</p>
      <p>ราคา : {{ menu.price }}</p>
      <p>ขนาด : {{ menu.size }}</p>
      <p>ประเภท : {{ menu.category }}</p>
      <p>รายละเอียด : {{ menu.description }}</p>
      <p>ส่วนประกอบ : {{ menu.ingredients }}</p>
    </div>
  </div>
</template>
<script>
import MenusService from "@/services/MenusService";

export default {
  data() {
    return {
      menu: {
        name:"",
        price:"",
        size:"",
        category:"",
        description:"",
        ingredients:"",
      },
    };
  },
  methods: {
    async editMenu() {
      try {
        await MenusService.put(this.menu);
        this.$router.push({ name: "menus" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      let menuId = this.$route.params.menuId;
      this.menu = (await MenusService.show(menuId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped></style>