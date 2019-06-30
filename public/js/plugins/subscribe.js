/* globals $subscribe Vue */

Vue.use({
    install (Vue) {
        'use strict';
        Vue.prototype.$subscribe = $subscribe;
    }
});
