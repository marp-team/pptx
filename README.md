_**NOTE**: This module was created for PptxGenJS v2. The latest [PptxGenJS v3](https://gitbrent.github.io/PptxGenJS/) has improved module size and type definition. We've no longer maintained `@marp-team/pptx` so you should use [`pptxgenjs`](https://www.npmjs.com/package/pptxgenjs)._

---

# @marp-team/pptx

A wrapper module for creating PPTX using [PptxGenJS](https://github.com/gitbrent/PptxGenJS), with the least module size.

- It includes only required files and dependencies for working PptxGenJS in Node (or module bundler).
- User-friendly entry point (CommonJS default export and better TypeScript definition)

## Usage

```javascript
import PPTX from '@marp-team/pptx'

const pptx = new PPTX()
```

Refer to [PptxGenJS documentation](https://gitbrent.github.io/PptxGenJS/docs/usage-pres-create.html) how to use.

## Contributing

We are following [the contributing guideline of marp-team projects](https://github.com/marp-team/.github/blob/master/CONTRIBUTING.md). Please read these guidelines this before starting work in this repository.

## Author

Managed by [@marp-team](https://github.com/marp-team).

## License

[MIT License](LICENSE)
