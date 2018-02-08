import { get } from 'object-path'
import { Base } from './Base'

export const I18n = {
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

        // Dispatch reactI18nDidSetLocale event
        setTimeout(() => {
            const event = new CustomEvent('reactI18nDidSetLocale')
            window.dispatchEvent(event)
        })
    },

    setTranslations(translations) {
        this._translations = translations
        this.forceComponentUpdate()
    },

    /**
     * Return translation for a given key.
     *
     * @param  {String} key
     * @param  {String} [locale] - translate to specific locale
     *
     * @return {String} Translation or key if translation can't be found
     */
    translate(key, locale) {
        locale = locale || this._locale

        const path = `${locale}.${key}`
        let translation = get(this._translations, path)

        // Shortcuts
        // If key 'a.b.c' returns object, try 'a.b.c.c'
        if (typeof translation === 'object') {
            const parts = path.split('.')
            const lastPart = parts[parts.length - 1]
            const shortcutPath = `${path}.${lastPart}`

            translation = get(this._translations, shortcutPath)
        }

        if (translation !== undefined) {
            return translation
        }

        return key
    },

    forceComponentUpdate() {
        Base.forceUpdateAllInstances()
    }
}
