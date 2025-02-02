interface ConditionDescription {
  title: string;
  description: string;
}

export const conditionDescriptions: Record<string, ConditionDescription> = {
  fair: {
    title: 'Fair',
    description: 'The phone shows clear signs of use such as deep scratches, dents, or other marks. The phone is carrier unlocked, fully tested, and works like new.'
  },
  good: {
    title: 'Good',
    description: 'The phone has visible signs of use, such as scratches, small dents, or other markings. The phone is carrier unlocked, fully tested, and works like new.'
  },
  excellent: {
    title: 'Excellent',
    description: 'The phone may show slight signs of use such as minor scratches. The phone is carrier unlocked, fully tested, and works like new.'
  }
};

// Dutch translations
export const conditionDescriptionsNL: Record<string, ConditionDescription> = {
  fair: {
    title: 'Redelijk',
    description: 'De telefoon vertoont duidelijke tekens van gebruik zoals diepe krassen, deuken of andere merktekens. De telefoon is simlock vrij, volledig getest, en werkt als nieuw.'
  },
  good: {
    title: 'Goed',
    description: 'De telefoon heeft zichtbare gebruikssporen, zoals krassen, deukjes, of andere markeringen. De telefoon is simlock vrij, volledig getest, en werkt als nieuw.'
  },
  excellent: {
    title: 'Uitstekend',
    description: 'De telefoon kan lichte gebruikssporen vertonen zoals kleine krasjes. De telefoon is simlock vrij, volledig getest, en werkt als nieuw.'
  }
};