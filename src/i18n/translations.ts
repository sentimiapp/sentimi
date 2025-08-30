export type Lang = 'it' | 'en' | 'es' | 'fr' | 'de' | 'pt' | 'tr' | 'ar' | 'zh' | 'ja';

type Dict = Record<string, string>;

type Translations = Record<Lang, Dict>;

export const translations: Translations = {
  it: {
    'nav.home': 'Home',
    'nav.feed': 'Feed',
    'nav.profile': 'Profilo',
    'nav.dating': 'Dating',
    'nav.settings': 'Impostazioni',
    'auth.login': 'Login',
    'auth.signup': 'Registrati',
    'actions.record': 'Registra',
    'actions.stop': 'Stop',
    'actions.play': 'Riproduci',
    'actions.upload': 'Carica',
    'actions.post': 'Pubblica',
    'actions.cancel': 'Annulla',
    'actions.save': 'Salva',
    'messages.mic_permission': 'Concedi il permesso microfono per registrare.',
    homeTitle: 'Benvenuti in Sentimi',
    homeSubtitle: 'Ogni parola ha un suono, ogni voce un’emozione.',
    homeSlogan: 'Perché ciò che senti è ciò che conta.',
    'feed.title': 'Vocali recenti',
    'feed.empty': 'Ancora nessun vocale. Registrane uno!'
  },
  en: {
    'nav.home': 'Home',
    'nav.feed': 'Feed',
    'nav.profile': 'Profile',
    'nav.dating': 'Dating',
    'nav.settings': 'Settings',
    'auth.login': 'Login',
    'auth.signup': 'Sign up',
    'actions.record': 'Record',
    'actions.stop': 'Stop',
    'actions.play': 'Play',
    'actions.upload': 'Upload',
    'actions.post': 'Post',
    'actions.cancel': 'Cancel',
    'actions.save': 'Save',
    'messages.mic_permission': 'Please grant microphone permission to record.',
    homeTitle: 'Welcome to Sentimi',
    homeSubtitle: 'Every word has a sound, every voice an emotion.',
    homeSlogan: 'Because what you feel is what really matters.',
    'feed.title': 'Recent voice notes',
    'feed.empty': 'No voice notes yet. Record one!'
  },
  es: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
  fr: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
  de: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
  pt: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
  tr: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
  ar: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
  zh: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
  ja: { homeTitle: 'TODO', homeSubtitle: 'TODO', homeSlogan: 'TODO' },
};
