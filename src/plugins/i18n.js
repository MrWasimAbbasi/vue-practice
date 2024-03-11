const translations = {
    en: {
        hello: 'Hello',
        name: 'Name'
        // other translations...
    },
    fr: {
        hello: 'Bonjour',
        name: 'WasimAbbasiFR'
        // other translations...
    },
};

export const $t = (key, language = 'fr') => {
    const translation = translations[language][key];
    return translation || key;
};

export const i18n = {
    install(app, options) {
        app.config.globalProperties.$t = $t;
    },
};
