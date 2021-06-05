import template from './sw-cms-el-config-example.html.twig';

Shopware.Component.register('sw-cms-el-config-example', {
    template,
    mixins: [
        'cms-element'
    ],
    computed: {
        elementContent: {
            get: function() {
                return this.element.config.content.value;
            },
            set: function(newValue) {
                this.element.config.content.value = newValue;
            }
        }
    },
    created() {
        this.createdComponent();
    },
    methods: {
        createdComponent() {
            this.initElementConfig('example');
        },
        onElementUpdate(element) {
            this.$emit('element-update', element);
        }
    }
});
