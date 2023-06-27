<script setup>
import Basic from './demo/MaskSwipe/Basic.vue'
import Basic2 from './demo/MaskSwipe/Basic2.vue'
</script>
# MaskSwipe

新式轮播组件，遮罩轮播组件

## Usage

### 基本使用


<DemoContainer>
  <Basic/>
</DemoContainer>

<<< @/components/demo/MaskSwipe/Basic.vue

### 实际场景


<DemoContainer>
  <Basic2/>
</DemoContainer>

<<< @/components/demo/MaskSwipe/Basic2.vue

## Reference
You may show props, slots, events, methods, etc. using Markdown.

### Properties

| Name                | Type     | Default  | Description                     |
|---------------------|----------|----------|---------------------------------|
| img-list            | string[] | []       | 待轮播图片数组                         |
| duration            | number   | 3        | 轮播间隔，单位秒                        |
| transition-duration | number       | 1        | 过渡动效持续时间，单位秒                    |
| mask-image-url      | string   | ''       | 遮罩图片URL                         |
| mask-position-from  | string   | `left`   | 遮罩图片mask-position属性的值           |
| mask-position-from  | string   | `right`  | 动效过渡后，遮罩图片mask-position属性的值     |
| indicatorPosition                    | string   | `center` | 指示器位置，`left`, `right`, `center` |  

### Events

| Name        | Parameters   | Description     |
| ----------- | ----------   | --------------- |
|             |              |                 |

### Slots

| Name        | Parameters   | Description     |
| ----------- | ----------   | --------------- |
|             |              |                 |
