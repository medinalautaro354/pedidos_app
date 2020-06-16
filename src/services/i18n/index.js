import config from '../../constants/config'
import locales from './locales'

import localesType from '../../constants/locales'

import es from 'date-fns/locale/es'

// Get active language file stored in localStorage.
export const locale = localStorage.getItem('locale') || config.DEFAULT_LOCALE

// Get translation by key.
export const i18n = (key, ...args) => {
  // Check if key is for template translation.
  const isTemplateTranslation = args.length > 0

  // If is template translation pass arguments, if not just return the value of the translation key.
  const translation = isTemplateTranslation ? locales[locale][key](...args) : locales[locale][key]

  // Return translation.
  if (translation) {
    return translation
  }
}

export const getLocale = () => {
  switch (locale) {
    case localesType.ES:
      return es
    default:
      return es
  }
}