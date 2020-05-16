# MCCS Alpha API UI

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](/docs/prs.md) [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](/docs/COPYING.txt)

This will be a UI for [MCCS Alpha API](https://github.com/ic3network/mccs-alpha-api).

## Table of Contents

- [Usage](#usage)
    - [Local machine](#use-a-local-build)
    - [Live development build](#use-the-live-development-build)
- [Built Using](#built-using)  
- [Install](#install)
- [Maintainer](#maintainer)
- [Contributing](#contributing)
- [License](#license)

## Usage

You can run the application on a [local machine](#use-a-local-build), or you can test drive the [live development build](#use-the-live-development-build).

### Use a Local Build

First follow the [Install](#install) instructions. Then, from the [/app](/app) directory:

1. Start an instance of [http-server](https://www.npmjs.com/package/http-server) by typing `npm run start`.

Then load the web application:

1. Go to the address [http://127.0.0.1:8080](http://127.0.0.1:8080) in your browser.

### Use the Live Development Build

A live version of the app' is running at [https://mccs-alpha-api-ui.ic3.dev/](https://mccs-alpha-api-ui.ic3.dev/).

## Built Using

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [TypeScript](https://www.typescriptlang.org/)

## Install

First, install the [dependencies](#dependencies). Then create the web application:

1. In the [/app](/app) directory, type `npm install`. That should install everything listed in [package.json](/app/package.json), which form the components of the REACT-based web frontend to this application.
2. Build the REACT frontend by typing `npm run compile` (you can also watch for any changes by running `npm run watch`). For a production build, type `npm run prod`.

### Dependencies

Clone this repository, and ensure [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) are installed.

## Maintainer

[Steve Huckle](https://glowkeeper.github.io/).

## Contributing

Contributions welcome - please get in touch via steve at glowkeeper dot uk.

## License

GNU General Public License v3.0

Please refer to the file: [COPYING](/docs/COPYING.txt) for the full text.
