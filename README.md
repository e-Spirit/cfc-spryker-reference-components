# cfc-spryker-reference-components
This module is part of the FirstSpirit Connect for Commerce Spryker integration.
It contains the implementation of the components included in the Connect for Commerce reference project.

## Installation

Add the following to your `composer.json` file
```json
    "repositories": [
        {
            "url": "https://github.com/e-spirit/cfc-spryker-reference-components.git",
            "type": "vcs"
        }
    ],
```
and run
```
$ composer require e-spirit/cfc-spryker-reference-components
```

## Configuration
Add the following to your configuration:
```php
<?php

use Spryker\Shared\Kernel\KernelConstants;

$config[KernelConstants::PROJECT_NAMESPACES] = [
  'Pyz',
  'Crownpeak',
];

```

Modify the `frontend/settings.js` file:

```js
/// ...
    // entry point patterns (components)
    componentEntryPoints: {
        // absolute dirs in which look for
        dirs: [
            join(globalSettings.context, paths.core),
            // CFC start
            join(globalSettings.context, './vendor/e-spirit'),
            // CFC end
            join(globalSettings.context, paths.eco),
            join(globalSettings.context, paths.project),
        ],
// ...
```

Modify the `tsconfig.json` file:

```js
// ...
    "include": ["./vendor/spryker-shop/**/*", "./vendor/spryker-eco/**/*", "./src/Pyz/Yves/**/*", "./vendor/e-spirit/**/*"],
```

## Building components
To build the component CSS files, run 

```
npm run yves
```

## Testing
To test a particular branch in your Spryker installation replace _{branchname}_ in the command below:
```
$ docker/sdk cli composer require e-spirit/cfc-spryker-reference-components:dev-{branchname}
```

## Legal Notices
The spryker-cfc-reference-components module is a product of Crownpeak Technology GmbH, Dortmund, Germany. The spryker-cfc-reference-components module is subject to the Apache-2.0 license.

Details regarding any third-party software products in use but not created by Crownpeak Technology GmbH, as well as the third-party licenses and, if applicable.

## Disclaimer
This document is provided for information purposes only. Crownpeak may change the contents hereof without notice. This document is not warranted to be error-free, nor subject to any other warranties or conditions, whether expressed orally or implied in law, including implied warranties and conditions of merchantability or fitness for a particular purpose. Crownpeak specifically disclaims any liability with respect to this document and no contractual obligations are formed either directly or indirectly by this document. The technologies, functionality, services, and processes described herein are subject to change without notice.