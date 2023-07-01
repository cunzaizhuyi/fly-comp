<script setup>
import img1 from '../../../../src/assets/swipe/1.png';
import img2 from '../../../../src/assets/swipe/2.png';
import img3 from '../../../../src/assets/swipe/3.png';
import img4 from '../../../../src/assets/swipe/4.png';
import maskImage from '../../../../src/assets/swipe/mask.png';
</script>

<template>
  <div>
    <MaskSwipe
        :duration="3"
        :transition-duration="1"
        :img-list="[img1, img2, img3, img4]"
        maskPositionFrom="left"
        maskPositionTo="right"
        :mask-image="`url(${maskImage})`"
        indicator-position="right"
    />
  </div>
</template>
