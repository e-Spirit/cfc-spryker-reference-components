# cfc-spryker-reference-components
This module is part of the FirstSpirit Connect for Commerce Spryker integration.
It contains the implementation of the components included in the Connect for Commerce reference project.

## Installation

Add the following to your `composer.json` file
```json
    "repositories": [
        {
            "url": "https://github.com/ecom-espirit/cfc-spryker-reference-components.git",
            "type": "vcs"
        }
    ],
```
and run
```
$ composer require ecom-espirit/cfc-spryker-reference-components
```


## Testing
To test a particular branch in your Spryker installation replace _{branchname}_ in the command below:
```
$ docker/sdk cli composer require ecom-espirit/cfc-spryker-reference-components:dev-{branchname}
```