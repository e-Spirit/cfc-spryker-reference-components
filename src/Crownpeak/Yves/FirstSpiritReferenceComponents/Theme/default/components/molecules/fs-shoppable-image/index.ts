import './fs-shoppable-image.scss';

import register from 'ShopUi/app/registry';

export default register(
    'fs-shoppable-image',
    () => import(/* webpackMode: 'lazy' */'./fs-shoppable-image')
);
