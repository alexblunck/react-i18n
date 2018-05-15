# react-i18n

[![Latest Version on NPM](https://img.shields.io/npm/v/@blunck/react-i18n.svg?style=flat-square)](https://www.npmjs.com/package/@blunck/react-i18n)

Simple i18n in react.

## Installation
`npm i @blunck/react-i18n`

## Getting Started
First load translations & set locale to translate to
```js
import { I18n } from '@blunck/react-i18n'

I18n.setTranslations({
  en: {
    noun: {
      language: 'Language',
      country: 'Country'
    }
  },
  de: {
    noun: {
      language: 'Sprache',
      country: 'Land'
    }
  }
})

I18n.setLocale('en')
```

## Translate Component
Use the `Translate` component to add translations to your app
```js
import { Translate } from '@blunck/react-i18n'

const MyComponent = () => {
    return <Translate value="noun.country" />
}
```

## Translate Manually
You can use the `I18n` class to translate a key manually
```js
const str = I18n.translate('noun.country')
```

Alternatively you can use the `__` helper function
```js
import { __ } from '@blunck/react-i18n'

const str = __('noun.country')
```

## I18nProvider
Use the `I18nProvider` component to access the locale from within your own components
```js
import { I18nProvider } from '@blunck/react-i18n'

<I18nProvider render={locale => (
    <span>The current locale is {locale}</span>
)} />
```

## Acknowledgments
Architecture inspired by [react-i18nify](https://github.com/JSxMachina/react-i18nify)
