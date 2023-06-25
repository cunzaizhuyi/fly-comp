<script setup lang="ts">
// import img1 from '@/assets/swipe/1.png';
// import img2 from '@/assets/swipe/2.png';
// import img3 from '@/assets/swipe/3.png';
// import img4 from '@/assets/swipe/4.png';

// import img1 from '../../assets/swipe/img/1.jpg';
// import img2 from '../../assets/swipe/img/2.jpg';
// import img3 from '../../assets/swipe/img/3.jpg';
// import img4 from '../../assets/swipe/img/4.jpg';

import { ref, onMounted, watch } from "vue";

const props = defineProps(['imgList',
  'duration', 'transitionDuration',
  'maskPositionFrom', 'maskPositionTo',
  'maskImageUrl']);

const currentIndex = ref(0);
const oldCurrentIndex = ref(0);
const imgList = ref([...props.imgList, props.imgList[0]]);
const getInitZindex = () => {
  const arr = [1];
  for (let i = imgList.value.length - 1; i >= 1; i--) {
    arr.unshift(arr[0] + 1);
  }
  return arr;
}
const zIndexArr = ref([...getInitZindex()]);
const maskPosition = ref(props.maskPositionFrom || 'left');
const transition = ref('all 1s');

const transitionDuration = props.transitionDuration || 1000;
const duration = props.duration || 3000;
const totalTranslateX = 475;

watch(currentIndex, () => {
  if (currentIndex.value === 0) {
    zIndexArr.value = [...getInitZindex()];
  }
  maskPosition.value = props.maskPositionFrom || 'left';
  transition.value = 'none';
})
const execAnimation = () => {
  transition.value = 'all 1s';
  maskPosition.value = props.maskPositionFrom || 'left';
  maskPosition.value = props.maskPositionTo || 'right';
  oldCurrentIndex.value = (currentIndex.value + 1) % (imgList.value.length - 1);


  setTimeout(() => {

    zIndexArr.value[currentIndex.value] = 1;
    currentIndex.value = (currentIndex.value + 1) % (imgList.value.length - 1);

  }, 1000)
}

onMounted(()=> {
  const firstDelay = duration - transitionDuration;
  function animate() {
    execAnimation();
    setTimeout(animate, duration);
  }
  setTimeout(animate, firstDelay);
})

</script>

<template>
  <div class="fly-swipe-container">
    <div class="swipe-item"
         :class="{'swipe-item-mask': index === currentIndex}"
         v-for="(url, index) in imgList"
         :key="index"
         :style="{ zIndex: zIndexArr[index],
         'transition': index === currentIndex ? transition : 'none',
         'mask-image': index === currentIndex ? `url(${maskImageUrl})` : '',
         '-webkit-mask-image': index === currentIndex ? `url(${maskImageUrl})`: '',
         'mask-position':  index === currentIndex ? maskPosition: '',
         '-webkit-mask-position':  index === currentIndex ? maskPosition: '' }">
      <img :src="url" alt="">
    </div>
    <div class="fly-indicator">
      <div class="fly-indicator-item"
           :class="{'fly-indicator-item-active': index === oldCurrentIndex}"
           v-for="(_, index) in imgList.slice(0, imgList.length - 1)"
           :key="index"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.fly-swipe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: inherit;

  .swipe-item:first-child {
    position: relative;
  }
  .swipe-item {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    //overflow: hidden;

    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }

  .swipe-item-mask {
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-size: cover;
    -webkit-mask-size: cover;
    //mask-image: url('../../assets/swipe/mask4.png');
    //-webkit-mask-image: url(../../assets/swipe/mask4.png);
  }
  
  .fly-indicator{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 666;
    position: relative;
    top: -20px;
    .fly-indicator-item{
      margin: 0 5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: gray;
    }
    .fly-indicator-item-active{
      background: #fff;
    }
  }
}
</style>