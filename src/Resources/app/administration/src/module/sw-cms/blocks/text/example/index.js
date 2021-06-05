import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'example',
    category: 'text',
    label: 'sw-cms.blocks.example.label',
    component: 'sw-cms-block-example',
    previewComponent: 'sw-cms-preview-example',
    defaultConfig: {
        padding: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        main: 'example',
    }
});
