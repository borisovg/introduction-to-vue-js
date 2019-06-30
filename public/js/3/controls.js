/* globals $store Vue */

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
        },

        items () {
            'use strict';
            return this.$store.state.items;
        }
    },

    el: '#controls',

    methods: {
        add_item () {
            'use strict';
            this.$store.commit('add_item');
        },

        remove_item () {
            'use strict';
            this.$store.commit('remove_item');
        }
    },

    store: $store,

    template: [
        '<div class="controls">',
            '<counter :done="doneCount" :total="items.length"/>',
            '<p>',
                '<button @click="remove_item">-</button>',
                '<button @click="add_item">+</button>',
            '</p>',
        '</div>',
    ].join('')
});
