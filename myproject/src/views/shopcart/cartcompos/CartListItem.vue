<template>
  <div id="shopItem">
    <div
      class="shop-content"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      :style="deleteSlider"
    >
      <div class="item-select">
        <check-button :isChecked="product.checked" @click.native="checkClick"></check-button>
      </div>
      <div class="img">
        <img :src="product.image" alt />
      </div>
      <div class="info">
        <div class="title">{{product.title}}</div>
        <div class="desc">{{product.desc}}</div>
        <div class="bottom">
          <div class="price">￥{{product.lowPrice}}</div>
          <div class="change">
            <span @click="decreaseClick">-</span>
            <span>{{product.count}}</span>
            <span @click="increaseClick">+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="remove" ref="remove" @click="delCarPanelHandel(product.id)">删除</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";
export default {
  data() {
    return {
      startX: 0, //触摸位置
      endX: 0, //结束位置
      moveX: 0, //滑动时的位置
      disX: 0, //移动距离
      deleteSlider: "" //滑动时的效果,使用v-bind:style="deleteSlider"
    };
  },
  props: {
    product: {
      type: Object,
      dufault() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    },
    decreaseClick() {
      if (this.product.count > 1) {
        this.product.count--;
      }
    },
    increaseClick() {
      this.product.count++;
    },
    delCarPanelHandel(id) {
      this.$store.commit("delCarPanelData", id);
    },
    touchStart(ev) {
      ev = ev || event;
      //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
      if (ev.touches.length == 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX;
      }
    },
    touchMove(ev) {
      ev = ev || event;
      //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      let wd = this.$refs.remove.offsetWidth;
      if (ev.touches.length == 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].clientX;
        //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX;
        //console.log(this.disX)
        // 如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX < 0 || this.disX == 0) {
          this.deleteSlider = "transform:translateX(0px)";
        } else if (this.disX > 0) {
          // 大于0，表示左滑了，此时滑块开始滑动
          //具体滑动距离我取的是 手指偏移距离*5。
          this.deleteSlider = "transform:translateX(-" + this.disX * 5 + "px)";
          // 最大也只能等于删除按钮宽度
          if (this.disX * 5 >= wd) {
            this.deleteSlider = "transform:translateX(-" + wd + "px)";
          }
        }
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      let wd = this.$refs.remove.offsetWidth;
      if (ev.changedTouches.length == 1) {
        let endX = ev.changedTouches[0].clientX;
        this.disX = this.startX - endX;
        //console.log(this.disX)
        //如果距离小于删除按钮一半,强行回到起点
        if (this.disX * 5 < wd / 2) {
          this.deleteSlider = "transform:translateX(0px)";
        } else {
          //大于一半 滑动到最大值
          this.deleteSlider = "transform:translateX(-" + wd + "px)";
        }
      }
    },
    deleteLine() {
      this.deleteSlider = "transform:translateX(0px)";
      this.$emit("deleteLine");
    }
  }
};
</script>

<style scoped>
/* .shop-content{
  width: 98%;
  margin: 10px auto 0;
  display: flex;
  background: #fff;
  align-items: center;
  padding: 10px 0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

#shopItem {
  
     position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    transition: 0.3s;
    background-color: #fff;
    border-bottom: 1px solid #d3d3d3;
} */
.shop-content {
  z-index: 100;
  transition: 0.3s;
  height: 170px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  background: #fff;
  overflow: hidden;
  /* margin:10px 0 0; */
}

#shopItem {
  width: 98%;
  overflow: hidden;
  border-radius: 10px;
  margin: 10px auto 0;
  display: flex;
  align-items: center;
  background: #fff;
  position: relative;
  /* padding: 10px 0; */
  height: 170px;
  z-index: 99;
  transition: 0.3s;
  background-color: #fff;
  border-bottom: 1px solid #d3d3d3;
}
.remove {
  position: absolute;
  width: 140px;
  height: 170px;
  line-height: 170px;
  background-color: #f60;
  right: 0;
  top: 0;
  bottom: 0;
  color: #fff;
  text-align: center;
  font-size: 16px;
}
.item-select {
  width: 30px;
}
.img {
  width: 115px;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
}
.img img {
  width: 100%;
  height: auto;
}
.info {
  flex: 1;
  line-height: 1.4;
  padding: 0 10px;
  font-size: 14px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: justify;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  -webkit-box-orient: vertical;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -webkit-box-orient: vertical;
}
.price {
  font-size: 16px;
  color: #fe7600;
  font-weight: bold;
}
.change {
  height: 20px;
  width: 80px;
  display: flex;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.change span {
  flex: 1;
  border: 1px solid #dcdcdc;
}
.change span:nth-child(1) {
  border-radius: 5px 0 0 5px;
}
.change span:nth-child(3) {
  border-radius: 0 5px 5px 0;
}
</style>
