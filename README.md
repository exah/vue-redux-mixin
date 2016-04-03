# vue-redux-mixin

For Vue.js 1.0.18+.

> Super simple Vue.js + Redux binding mixin

## Features

- Inside .vue components you can access to shared state with `this.state`;
- Dispatch Redux actions directly in store (like normal) or use `this.$actions.actionName(value)`


store/index.js:

```js
import { createStore, combineReducers } from 'redux';
import * as reducers from 'reducers';
import * as actions from 'actions';
import createReduxStoreMixin from 'vue-redux-store-mixin';

export const store = createStore( combineReducers( reducers ) );

export default reduxStoreMixin = createReduxStoreMixin(store, actions);
```


index.js:

```js
import Vue from 'vue';
import { reduxStoreMixin } from 'store';

Vue.mixin(reduxStoreMixin);
```

app.vue:

```html
<template>
  <div class='app'> {{ state.msg }} </div>
</template>
<script>
  export default {
    ready() {
      this.$actions.setMessage('Hello World!');
    }
  }
</script>
```

http://www.webpackbin.com/NJZza92Tx


## TODO

- [ ] Add options documentation
- [ ] Add example project
- [ ] Figure out what needs to improve
