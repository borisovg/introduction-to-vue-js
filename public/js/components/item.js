/* globals $subscribe Vue */

Vue.component('item', {
    beforeDestroy () {
        'use strict';
        this.unsubscribe();
    },

    data () {
        'use strict';
        return {
            text: '',
            unsubscribe: undefined
        };
    },

    mounted () {
        'use strict';
        this.unsubscribe = $subscribe((word) => {
            if (word) {
                this.text += ` ${word}`;

            } else {
                this.$emit('done');
            }
        });
    },

    props: {
        item: Object,
    },

    template: '<p :class="{ done: item.done }" class="item">{{ text }}</p>'
});
