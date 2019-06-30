/* globals Vue */

new Vue({
    computed: {
        doneCount () {
            'use strict';
            let c = 0;

            for (let i = 0; i < this.items.length; i += 1) {
                if (this.items[i].done) {
                    c += 1;
                }
            }

            return c;
        }
    },

    data: {
        items: []
    },

    el: '#app',

    methods: {
        add_item () {
            'use strict';
            this.items.push({
                done: false,
            });
        },

        mark_item_done (idx) {
            'use strict';
            this.items[idx].done = true;
        },

        remove_item () {
            'use strict';
            if (this.items.length) {
                this.items.pop();
            }
        }
    },

    template: [
        '<div class="container">',
            '<div>',
                '<div class="controls">',
                    '<counter :done="doneCount" :total="items.length"/>',
                    '<p>',
                        '<button @click="remove_item">-</button>',
                        '<button @click="add_item">+</button>',
                    '</p>',
                '</div>',
            '</div>',
            '<div>',
                '<item v-for="(item, idx) in items" :item="item" :key="idx" @done="mark_item_done(idx)"/>',
                '<p v-if="!items.length">No items</p>',
            '</div>',
        '</div>',
    ].join('')
});
