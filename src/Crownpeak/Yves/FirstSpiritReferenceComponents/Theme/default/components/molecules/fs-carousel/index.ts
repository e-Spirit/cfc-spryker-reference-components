import './fs-carousel.scss';

import register from 'ShopUi/app/registry';

export default register(
    'fs-carousel',
    () => import(/* webpackMode: 'lazy' */'./fs-carousel')
);
