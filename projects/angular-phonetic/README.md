# angular-phonetic

A simple component to aid in rendering ruby text.

See an example here: <https://tyrantwave.github.io/angular-phonetic/>

## Installation

- Install from npm:

```bash
npm install --save angular-phonetic
```

## Importing to your application

Reference the directive in the main module:

```typescript
import { AngularPhoneticModule } from 'angular-phonetic';
```

Then in your base module:

```typescript
imports: [
    AngularPhoneticModule,
]
```

## Using in your application

Use the component, providing the phonetic guide:

```html
<ng-phonetic phonetic="zhōng wén">中文</ng-phonetic>
```

## Customisation

For browsers that don't support the `<ruby>` tag, the brackets used for the phonetic guide can be customised:

```html
<ng-phonetic phonetic="にほんご" brackets="「」">日本語</ng-phonetic>
```

You can also specify no brackets if required:

```html
<ng-phonetic phonetic="にほんご" brackets="">日本語</ng-phonetic>
```

Or use the same bracket on both sides:

```html
<ng-phonetic phonetic="조선적" brackets="|">朝鮮的</ng-phonetic>
```  

## License

MIT