/* globals Vuex */
/* exported $store */

const $store = new Vuex.Store({
    state: {
        items: []
    },

    mutations: {
        add_item (state) {
            'use strict';
            state.items.push({
                done: false,
            });
        },

        mark_item_done (state, idx) {
            'use strict';
            state.items[idx].done = true;
        },

        remove_item (state) {
            'use strict';
            if (state.items.length) {
                state.items.pop();
            }
        },
    }
});
