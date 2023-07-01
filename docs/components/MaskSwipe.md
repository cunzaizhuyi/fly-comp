<script setup>
import Basic from './demo/MaskSwipe/Basic.vue'
import Basic2 from './demo/MaskSwipe/Basic2.vue'
import Basic3 from './demo/MaskSwipe/Basic3.vue'
import Basic4 from './demo/MaskSwipe/Basic4.vue'
import Basic5 from './demo/MaskSwipe/Basic5.vue'
</script>
# MaskSwipe

新式轮播组件，遮罩轮播组件

## Usage

### 图片遮罩1

<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/MaskSwipe/Basic.vue

### 图片遮罩2

<DemoContainer>
  <Basic2/>
</DemoContainer>

<<< @/components/demo/MaskSwipe/Basic2.vue

### 线性渐变

<DemoContainer>
  <Basic3/>
</DemoContainer>

<<< @/components/demo/MaskSwipe/Basic3.vue

### 径向渐变

<DemoContainer>
  <Basic4/>
</DemoContainer>

<<< @/components/demo/MaskSwipe/Basic4.vue

### 锥形渐变

<DemoContainer>
  <Basic5/>
</DemoContainer>

<<< @/components/demo/MaskSwipe/Basic5.vue

## Reference
You may show props, slots, events, methods, etc. using Markdown.

### Properties

| Name                | Type     | Default  | Description                     |
|---------------------|----------|----------|---------------------------------|
| img-list            | string[] | []       | 待轮播图片数组                         |
| duration            | number   | 3        | 轮播间隔，单位秒                        |
| transition-duration | number       | 1        | 过渡动效持续时间，单位秒                    |
| mask-image          | string   | ''       | mask-image属性的设置                 |
| mask-position-from  | string   | `left`   | 遮罩图片mask-position属性的值           |
| mask-position-from  | string   | `right`  | 动效过渡后，遮罩图片mask-position属性的值     |
| mask-size           | string   | `cover`  | mask-size属性设置                   |
| effect-type         | string   | ``  | `radial`径向渐变,`conic`锥形渐变        |
| indicatorPosition   | string   | `center` | 指示器位置，`left`, `right`, `center` |  

### Events

| Name        | Parameters   | Description     |
| ----------- | ----------   | --------------- |
|             |              |                 |

### Slots

| Name        | Parameters   | Description     |
| ----------- | ----------   | --------------- |
|             |              |                 |
