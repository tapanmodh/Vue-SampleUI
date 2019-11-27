<template>
  <div>
    <button class="btn cancel" @click="cancel">Cancel</button>
    <button class="btn done" @click="done">Done</button>

    <div id="create-item" class="create-item">
      <img class="create-radio" src="../assets/checkbox.svg" />
      <textarea class="create-text" placeholder="What do you want to do?"></textarea>
    </div>

    <types-component />
  </div>
</template>

<script>
import typesComponent from "./TypesList.vue";
import router from "../router";

export default {
  methods: {
    cancel: function() {
      router.go(-1);
    },
    done: function() {
      router.go(-1);
    }
  },
  components: {
    typesComponent
  }
};
</script>

<style scoped>
.btn {
  background-color: Transparent;
  background-repeat: no-repeat;
  color: blue;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: 14px;
  margin-top: 10px;
}

.done {
  float: right;
  font-weight: bold;
}

.create-item {
  margin-top: 4%;
}

.create-radio {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  vertical-align: top;
}

.create-text {
  width: 85%;
  height: 150px;
  outline-width: 0;
  border: none;
  border-color: transparent;
  font-size: 16px;
  margin-left: 5px;
}
</style>