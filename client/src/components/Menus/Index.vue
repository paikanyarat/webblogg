<template>
  <div>
    <h2>Get all Menus</h2>
    <h4>จํานวนเมนูอาหาร {{ menus.length }}</h4>
    <p>
      <button v-on:click="navigateTo('/menu/create')">
        สร้างข้อมูลเมนูอาหาร
      </button>
    </p>

    <div v-for="menu in menus" v-bind:key="menu.id">
      <p>ชื่อเมนูอาหาร : {{ menu.name }}</p>
      <p>ประเภท : {{ menu.category }}</p>
      <p>ขนาด : {{ menu.size }}</p>
      <p>ราคา : {{ menu.price }} บาท</p>
      <p>
        <button v-on:click="navigateTo('/menu/' + menu.id)">
          ดูข้อมูลเมนูอาหาร
        </button>

        <button v-on:click="navigateTo('/menu/edit/' + menu.id)">
          แก้ไขข้อมูลเมนูอาหาร
        </button>

        <button v-on:click="deleteMenu(menu)">ลบข้อมูลเมนูอาหาร</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import MenusService from "@/services/MenusService";
export default {
  data() {
    return {
      menus: [],
    };
  },
  async created() {
    try {
      this.menus = (await MenusService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteMenu(menu) {
      let result = confirm("Want of delete?")
      if (result) {
        try {
          await MenusService.delete(menu);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this. menus = (await  MenusService.index()).data;
    },
  },
};
</script>
<style scoped></style>