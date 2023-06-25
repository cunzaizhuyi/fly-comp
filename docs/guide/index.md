# 开始

教你怎么使用组件


## 安装

This setup assumes your client app is created with Vite and vue-ts template, and you use 'npm link' to link to `my-lib` locally.

In your `package.json`, you shall have the dependencies compatible with the following:

```json
"dependencies": {
  "vue": "^3.2.25"
}
```

In your `vite.config.ts`, you shall configure to dedupe `vue`:

```ts
export default defineConfig({
  resolve: {
    dedupe: ['vue'],
  },
});
```

在你的`main.ts`文件，引入CSS:

```ts
import 'fly-comp/dist/style.css';
```

导入组件

```html
<script setup lang="ts">
  import { ComponentA, ComponentB } from 'fly-comp';
</script>
```
