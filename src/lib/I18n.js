import { get } from 'object-path'
import Base from './Base'

export default {
    _locale: 'en',
    _translations: null,

    get browserLocale() {
        const language = window.navigator.language

        if (language) {
            return language.split('-')[0].toLowerCase()
        }
    },

    setLocale(locale) {
        this._locale = locale
        this.forceComponentUpdate()
    },

    setTranslations(translations) {
        this._translations = translations
        this.forceComponentUpdate()
    },

    translate(key) {
        const path = `${this._locale}.${key}`
        const translation = get(this._translations, path)

        return translation || key
    },

    forceComponentUpdate() {
        Base.forceUpdateAllInstances()
    }
}
