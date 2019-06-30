/* globals Vue */

Vue.component('counter', {
    props: {
        done: Number,
        total: Number,
    },

    template: [
        '<p class="counter">',
            '<span v-if="done !== total">{{ done }} / {{ total }}</span>',
            '<span v-else>{{ total }}</span>',
        '</p>',
    ].join('')
});
