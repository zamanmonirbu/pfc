import { navigation as enNavigation } from './en/navigation';
import { home as enHome } from './en/home';
import { shop as enShop } from './en/shop';
import { product as enProduct } from './en/product';
import { footer as enFooter } from './en/footer';
import { about as enAbout } from './en/about';
import { help as enHelp } from './en/help';
import { sell as enSell } from './en/sell';
import { newsletter as enNewsletter } from './en/newsletter';
import { privacy as enPrivacy } from './en/privacy';
import { warranty as enWarranty } from './en/warranty';
import { checkout as enCheckout } from './en/checkout';

import { navigation as nlNavigation } from './nl/navigation';
import { home as nlHome } from './nl/home';
import { shop as nlShop } from './nl/shop';
import { product as nlProduct } from './nl/product';
import { footer as nlFooter } from './nl/footer';
import { about as nlAbout } from './nl/about';
import { help as nlHelp } from './nl/help';
import { sell as nlSell } from './nl/sell';
import { newsletter as nlNewsletter } from './nl/newsletter';
import { privacy as nlPrivacy } from './nl/privacy';
import { warranty as nlWarranty } from './nl/warranty';
import { checkout as nlCheckout } from './nl/checkout';

export const translations = {
  en: {
    ...enNavigation,
    ...enHome,
    ...enShop,
    ...enProduct,
    ...enFooter,
    ...enAbout,
    ...enHelp,
    ...enSell,
    ...enNewsletter,
    ...enPrivacy,
    ...enWarranty,
    ...enCheckout
  },
  nl: {
    ...nlNavigation,
    ...nlHome,
    ...nlShop,
    ...nlProduct,
    ...nlFooter,
    ...nlAbout,
    ...nlHelp,
    ...nlSell,
    ...nlNewsletter,
    ...nlPrivacy,
    ...nlWarranty,
    ...nlCheckout
  }
};