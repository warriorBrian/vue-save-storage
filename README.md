# vue-save-storage

<hr />

## Install

```bash
npm install --save vue-save-storage
```

## Usage

```js
import Vue from 'vue'
import storage from 'vue-save-storage'
// 默认引入为localstorage
Vue.prototype.$storage = storage
```

```js
import Vue from 'vue'
import {local, session} from 'vue-save-storage'
// localstorage, session
Vue.prototype.$local = local
Vue.prototype.$session = session
```

### Nuxt.js

可以在Nuxt.js中使用`vue-save-storage`。

`vue-save-storage`必须作为NuxtJS插件包含在内：

```javascript
// nuxt.config.js
plugins: [{ src: '~/plugins/storage.js', ssr: false }]
```

## API

### `localStorage and sessionStorage`

- `setItem(key, value<any>)`: value可以为对象、数组或者基本类型
- `getItem(key<string>)`: 获取localStorage或者sessionStorage中设置的值。
- `remove(key<string>)`: 移除localStorage或者sessionStorage中某一个值
- `clear()`: 移除localStorage或者sessionStorage中所有的值
