import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'example',
    label: 'sw-cms.elements.example.label',
    component: 'sw-cms-el-example',
    configComponent: 'sw-cms-el-config-example',
    previewComponent: 'sw-cms-el-preview-example',
    defaultConfig: {
        content: {
            source: 'static',
            value: '',
            required: true
        }
    }
});
