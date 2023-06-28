<script setup lang="ts">
  import { onMounted } from 'vue';
  /* 设置当前时间 */
  const time = new Date();
  const hour = -3600 * (time.getHours() % 12);
  const mins = -60 * time.getMinutes();
  const sec = -time.getSeconds();
  onMounted(() => {
    const app = document.getElementById('fly-clock');
    app?.style?.setProperty('--delay-second', `${sec}s`);
    app?.style?.setProperty('--delay-minute', `${mins + sec}s`);
    app?.style?.setProperty('--delay-hour', `${(hour + mins + sec)}s`);
  });
</script>

<template>
    <div class="fly-clock" id="fly-clock">
      <div class="fly-clock-face">
        <span class="label">12</span>
        <span class="label">1</span>
        <span class="label">2</span>
        <span class="label">3</span>
        <span class="label">4</span>
        <span class="label">5</span>
        <span class="label">6</span>
        <span class="label">7</span>
        <span class="label">8</span>
        <span class="label">9</span>
        <span class="label">10</span>
        <span class="label">11</span>
        <div class="pointer seconds"></div>
        <div class="pointer minutes"></div>
        <div class="pointer hours"></div>
        <div class="pointer circle"></div>
      </div>
    </div>
</template>

<style lang="less">
:root{
  --fly-clock-width: 100px;
}
.fly-clock {
  --box-width: var(--fly-clock-width); // 容器宽度
  --clock-width: 88cqi; // 时钟宽度 clock width
  --label-width: 12cqi; // 时钟数字 宽度
  // 数字摆放半径
  --radius: calc((var(--clock-width) - var(--label-width)) / 2);

  width: var(--box-width);
  height: var(--box-width);
  border-radius: 50%;
  background: #333;
  margin-inline: auto;
  container-type: inline-size;

  // 表盘居中
  display: grid;
  place-content: center;

  .fly-clock-face {
    position: relative;
    width: var(--clock-width);
    height: var(--clock-width);
    border-radius: 50%;
    background: #fff;
    font-size: 6cqi;

    .label:nth-child(1) { --degree: 270deg; }
    .label:nth-child(2) { --degree: 300deg; }
    .label:nth-child(3) { --degree: 330deg; }
    .label:nth-child(4) { --degree: 0deg; }
    .label:nth-child(5) { --degree: 30deg; }
    .label:nth-child(6) { --degree: 60deg; }
    .label:nth-child(7) { --degree: 90deg; }
    .label:nth-child(8) { --degree: 120deg; }
    .label:nth-child(9) { --degree: 150deg; }
    .label:nth-child(10) { --degree: 180deg; }
    .label:nth-child(11) { --degree: 210deg; }
    .label:nth-child(12) { --degree: 240deg; }
    .label {
      --x: var(--radius) + (var(--radius) * cos(var(--degree)));
      --y: var(--radius) + (var(--radius) * sin(var(--degree)));
      width: var(--label-width);
      height: var(--label-width);
      position: absolute;
      left: calc(var(--x));
      top: calc(var(--y));

      // label内的文字水平垂直居中
      display: grid;
      place-content: center;
    }

    .pointer {
      width: var(--pointer-width);
      height: var(--pointer-height);
      border-radius: calc(var(--pointer-width) * 2);
      position: absolute;
      left: calc((var(--clock-width) - var(--pointer-width)) / 2);
      top: calc((var(--clock-width) / 2) - var(--pointer-height));
      transform: rotate(0deg);
      transform-origin: bottom;
    }
    .seconds {
      --pointer-width: 1cqi;
      --pointer-height: 40cqi;
      background-color: #333;
      animation: turn 60s steps(60, end) infinite;
      animation-delay: var(--delay-second, 0ms);
    }
    .minutes {
      --pointer-width: 2cqi;
      --pointer-height: 35cqi;
      background-color: #333;
      animation: turn 3600s linear infinite;
      animation-delay: var(--delay-minute, 0ms);
    }
    .hours {
      --pointer-width: 2.5cqi;
      --pointer-height: 30cqi;
      background-color: #333;
      animation: turn 43200s linear infinite; /* 60 * 60 * 12 */
      animation-delay: var(--delay-hour, 0ms);
      position: relative;
    }
    .circle{
      --pointer-width: 4cqi;
      --pointer-height: 4cqi;
      border: 1cqi solid #333;
      background-color: #fff;
      border-radius: 50%;
      transform: translateY(50%);
    }
  }
}


@keyframes turn {
  from{
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>