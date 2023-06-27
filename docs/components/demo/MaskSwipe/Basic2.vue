<script setup>
import img1 from '../../../../src/assets/swipe/img/1.jpg';
import img2 from '../../../../src/assets/swipe/img/2.jpg';
import img3 from '../../../../src/assets/swipe/img/3.jpg';
import img4 from '../../../../src/assets/swipe/img/4.jpg';
import maskImage from '../../../../src/assets/swipe/mask4.png';
</script>

<template>
  <div>
    <MaskSwipe
        :duration="3"
        :transition-duration="1"
        :img-list="[img1, img2, img3, img4]"
        maskPositionFrom="left"
        maskPositionTo="right"
        :mask-image-url="maskImage"
    />
  </div>
</template>
