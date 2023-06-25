<script setup>
import img1 from '../../../../src/assets/swipe/img/1.jpg';
import img2 from '../../../../src/assets/swipe/img/2.jpg';
import img3 from '../../../../src/assets/swipe/img/3.jpg';
import img4 from '../../../../src/assets/swipe/img/4.jpg';
</script>

<template>
  <MaskSwipe :duration="3000"
    :transition-duration="1000"
    :img-list="[img1, img2, img3, img4]"
  />
</template>
