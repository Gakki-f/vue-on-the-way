<template>
  <transition name="fade">
    <div class="toast" v-if="isShow">
      <div>{{message}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message, duration = 1500) {
      this.isShow = true;
      this.message = message;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 8px 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
}


.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter {
  opacity: 0;
  /* transform: scale(1.2); */
}

.fade-leave-to {
  opacity: 0;
  /* transform: scale(0.8); */
}
</style>
