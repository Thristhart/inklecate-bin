# inklecate-bin
a simple repackaging of inklecate releases

## Install
```bash
$ npm install -D inklecate-bin
```

## Usage
```ts
import { getInklecateBinaryPath } from 'inklecate-bin';
import child_process from 'node:child_process';

child_process.spawn(getInklecateBinaryPath(), inklecateArgs);
```

This package should be considered under the same license as https://github.com/inkle/ink which at the time of writing is MIT.