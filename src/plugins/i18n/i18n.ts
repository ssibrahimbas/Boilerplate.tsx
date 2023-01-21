import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'

const languages: string[] = ['en-US', 'tr-TR']

const fallbackLanguages: Record<string, string> = {
	en: 'en-US',
	tr: 'tr-TR',
}

const loadDynamicPath = (lng: string, ns: string) => {
	if (fallbackLanguages[lng]) {
		lng = fallbackLanguages[lng]
	} else if (!languages.includes(lng)) {
		lng = fallbackLanguages.en
	}
	return import(`../../domains/${ns}/locales/${lng}.json`)
}

i18n
	.use(initReactI18next)
	.use(resourcesToBackend(loadDynamicPath))
	.use(languageDetector)
	.init({
		fallbackLng: fallbackLanguages.en,
		defaultNS: false,
		ns: [],
		lng: fallbackLanguages.en,
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
