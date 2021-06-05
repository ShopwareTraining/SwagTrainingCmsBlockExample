import template from './sw-cms-el-example.html.twig';
import './sw-cms-el-example.scss';

Shopware.Component.register('sw-cms-el-example', {
    template,
    mixins: [
        'cms-element'
    ],
    computed: {
        elementContent() {
            return this.element.config.content.value;
        }
    },
    created() {
        this.createdComponent();
    },
    methods: {
        createdComponent() {
            this.initElementConfig('example');
        }
    }
});
