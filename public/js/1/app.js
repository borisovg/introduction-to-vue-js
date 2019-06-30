/* globals $subscribe Vue */

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
            const item = {
                done: false,
                text: '',
                unsubscribe: $subscribe((word) => {
                    if (word) {
                        item.text += ` ${word}`;

                    } else {
                        item.done = true;
                    }
                })
            };

            this.items.push(item);
        },

        remove_item () {
            'use strict';
            if (this.items.length) {
                this.items.pop().unsubscribe();
            }
        }
    },

    template: [
        '<div class="container">',
            '<div>',
                '<div class="controls">',
                    '<p class="counter">',
                        '<span v-if="items.length !== doneCount">{{ doneCount }} / {{ items.length }}</span>',
                        '<span v-else>{{ items.length }}</span>',
                    '</p>',
                    '<p>',
                        '<button v-on:click="remove_item">-</button>',
                        '<button v-on:click="add_item">+</button>',
                    '</p>',
                '</div>',
            '</div>',
            '<div>',
                '<p v-for="item in items" v-bind:class="{ done: item.done }" class="item">{{ item.text }}</p>',
                '<p v-if="!items.length">No items</p>',
            '</div>',
        '</div>',
    ].join('')
});
