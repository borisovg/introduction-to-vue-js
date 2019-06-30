/* globals $store Vue */

new Vue({
    computed: {
        items () {
            'use strict';
            return this.$store.state.items;
        },
    },

    el: '#items',

    methods: {
        mark_item_done (idx) {
            'use strict';
            this.$store.commit('mark_item_done', idx);
        }
    },

    store: $store,

    template: [
        '<div>',
            '<item v-for="(item, idx) in items" :item="item" :key="idx" @done="mark_item_done(idx)"/>',
            '<p v-if="!items.length">No items</p>',
        '</div>',
    ].join('')
});
