import "./fs-interactive-image.scss";

import register from "ShopUi/app/registry";

export default register(
  "fs-interactive-image",
  () => import(/* webpackMode: 'lazy' */ "./fs-interactive-image")
);
