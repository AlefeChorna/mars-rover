# Mars Rover

Send commands to robotic rovers and receive final coordinates.

## Requirements:
 - Node.js 16

## Install

```bash
$ npm install
```

## Testing

```bash
$ npm run test
```
## Usage

```js
const { sendCommands } = require("./src/send-commands.js");

const finalCoordinates = sendCommands(`1 2 N\nLMLMLMLMM\n3 3 E\nMRRMMRMRRM`);

console.log(finalCoordinates);
// 1 3 N
// 2 3 S
```
