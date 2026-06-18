/**
 * site.ts — brand & contact constants, set ONCE per site.
 * Hingulapuran — a Hinglaj Mata book + awareness platform.
 */
export const site = {
  name: 'Hingulapuran',
  legalName: 'Hingulapuran',
  tagline: 'Goddess of war · Kuldevi of the Kshatriya',
  description: 'Read Hingulapuran online, explore the legend of Hinglaj Mata, and spread the awareness — a devotional archive of the book, blog, gallery, and the temples of the Mother Goddess.',

  url: 'https://hingulapuran.example', // TODO: production domain

  // The Hinglaj Mata mantra — used at the door reveal, the jyot section, the footer.
  mantra: 'ॐ हिंगुले परमहिंगुले अमृतरूपिणि तनुशक्तिमनः शिवे श्री हिंगुलाय नमः',

  contact: {
    email: 'hello@hingulapuran.example',   // TODO
    phone: '+91 00000 00000',              // TODO
    whatsapp: '910000000000',              // TODO
    address: 'TODO — City, State, PIN',
  },

  social: {
    instagram: '',
    youtube: '',
    x: '',
  },
} as const;

export type Site = typeof site;
