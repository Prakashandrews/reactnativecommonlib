# Common UI Library

This project, **commonLib**, is a shared UI library designed for use in multiple React Native projects, specifically **sampleProject** and **sampleProjectLatest**. It provides a set of reusable components, hooks, utilities, and types to streamline development and ensure consistency across applications.

## Installation

To install the common UI library, run the following command in your React Native project:

```bash
npm install path/to/commonLib
```

or

```bash
yarn add path/to/commonLib
```

Make sure to replace `path/to/commonLib` with the actual path to the library.

## Usage

### Components

The library includes a variety of common UI components. You can import and use them as follows:

```javascript
import { Button, Input, Card } from 'commonLib/src/components';
```

### Hooks

Custom hooks are provided for reusable logic. For example, you can use the `useTheme` hook to manage theme-related state:

```javascript
import { useTheme } from 'commonLib/src/hooks';
```

### Utilities

Utility functions are available for common tasks. For instance, you can format dates or validate emails:

```javascript
import { formatDate, validateEmail } from 'commonLib/src/utils';
```

### Types

TypeScript types and interfaces are defined to ensure type safety. You can import them as needed:

```javascript
import { MyComponentProps } from 'commonLib/src/types';
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.