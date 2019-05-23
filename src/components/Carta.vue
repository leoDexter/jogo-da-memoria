<template>
  <transition name="flip" mode="out-in">
    <img
      v-if="(imgObject.open == true)"
      :src="imgObject.src"
      class="card-img-top"
      :class="{done: imgObject.done == true}"
      :key="Math.random().toString(36).substr(2)"
      @click="flipCard"
      :title="Math.random().toString(36).substr(2)"
      style="height: 150px; width: 150px;"
    >

    <img
      :src="imgUrlVerso"
      class="card-img-top"
      v-else
      :key="'verso_'+ imgObject.hash"
      @click="flipCard"
      style="height: 150px; width: 150px;"
    >
  </transition>
</template>

<script>
export default {
  props: ["imgObject", "imgUrlVerso"],
  data() {
    return { isShown: true };
  },
  created() {
    var that = this;
    var autoFlip = window.setTimeout(function() {
      that.imgObject.open = false;
    }, 2000);
  },
  methods: {
    flipCard() {
      if (!this.imgObject.open) {
        this.imgObject.open = !this.imgObject.open;
        if (this.imgObject.open) this.$emit("cardSelected", this.imgObject);
      }
    }
  }
};
</script>

<style scoped>
img {
  cursor: pointer;
}

.done {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.flip-enter {
  transform: rotateY(90deg);
}

/* Animations */
.flip-enter-active {
  animation: flip-in 700ms;
}

.flip-leave-active {
  animation: flip-out 700ms;
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>