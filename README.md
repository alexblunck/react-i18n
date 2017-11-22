# react-i18n
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

## Acknowledgments
Architecture inspired by [react-i18nify](https://github.com/JSxMachina/react-i18nify)
