<template>
  <div>
    <h1>Привет</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <button @click="register" />
  </div>
</template>

<script>
import AuthenticationsService from "@/services/AuthenticationsService";
export default {
  data() {
    return {
      email: "ABC",
      password: "123",
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationsService.register({
        email: this.email,
        password: this.password,
      });
      console.log('Проверочка',response.data);
    },
  },
  watch: {
    emaill(value) {
      console.log("email has changed", value);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
