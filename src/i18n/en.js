export default {
  code: 'en',
  name: 'English',
  skip: 'Skip to the quote form',

  nav: {
    label: 'Main',
    home: 'MOBA home',
    fleet: 'Fleet',
    guarantees: 'Guarantees',
    drivers: 'Drivers',
    faq: 'FAQ',
    cta: 'Get a price',
    language: 'Language',
  },

  hero: {
    lead: 'Let’s explore all the wonders of',
    place: 'Costa Rica.',
    sub: 'Private transfers across Guanacaste, from Liberia airport to wherever you’re staying. One fixed price, confirmed on WhatsApp before you fly.',
  },

  quote: {
    title: 'Request your transfer',
    note: 'This builds a WhatsApp message. You read it, change anything you want, and send it yourself.',
    pickup: 'Pick-up',
    dropoff: 'Drop-off',
    dropoffPlaceholder: 'Hotel, beach town, or border',
    date: 'Date',
    time: 'Time',
    flight: 'Flight number',
    flightPlaceholder: 'AA 1234',
    adults: 'Adults',
    adult: 'adult',
    children: 'Children',
    child: 'child',
    // word order differs by language, so these are templates not prefixes
    fewerLabel: 'One fewer {noun}',
    moreLabel: 'One more {noun}',
    notes: 'Anything we should know',
    notesPlaceholder: 'Surfboards, hotel name, early landing',
    seat: 'I need a child seat',
    roundtrip: 'I also need the return trip',
    barText: 'We reply with a fixed, all-in price. No card details on this page.',
    submit: 'Build my WhatsApp message',
  },

  errors: {
    template: 'We still need {items} before we can write the message.',
    pickup: 'a pick-up',
    dropoff: 'a drop-off',
    date: 'a date',
    time: 'a time',
    and: 'and',
    copyFailed: 'Your browser blocked the copy. Select the text above instead.',
  },

  preview: {
    title: 'Here’s your message',
    send: 'Open WhatsApp and send',
    copy: 'Copy the text',
    copied: 'Copied',
    edit: 'Change something',
    // Shown only in English: the message that actually goes to WhatsApp is Spanish.
    spanishNote:
      'We send this in Spanish, because that is what your driver reads. Your dates, names and numbers go through exactly as you typed them.',
    showSpanish: 'Show the Spanish we send',
    showMine: 'Show it in English',
    spanishLabel: 'Sent to WhatsApp (Spanish)',
  },

  fleet: {
    title: 'The vehicle that fits your group',
    sub: 'Every unit is licensed for tourist transport, air conditioned, and insured for passengers. Tell us the group size and we bring the right one.',
    foot: 'Group too big for one vehicle? We send a lead driver so everyone arrives together.',
    specPassengers: 'Passengers',
    specLuggage: 'Luggage',
    specBest: 'Best for',
    alt: 'Side view of a {name}',
    items: {
      van: {
        name: 'Van',
        blurb: 'The everyday transfer. Couples, families, and anyone landing with more luggage than they admitted to packing.',
        passengers: 'Up to 8',
        luggage: '8 cases',
        best: 'Airport to the beach towns',
      },
      suv: {
        name: '4×4 SUV',
        blurb: 'High clearance for the roads that stop being roads. Nosara, Santa Teresa, and anywhere a river crossing is part of the directions.',
        passengers: 'Up to 5',
        luggage: '4 cases',
        best: 'Rough access and rainy season',
      },
      sprinter: {
        name: 'Sprinter',
        blurb: 'Standing room, a real luggage bay, and seats that hold a group together instead of splitting it across two cars.',
        passengers: 'Up to 16',
        luggage: '16 cases',
        best: 'Weddings and surf groups',
      },
      minibus: {
        name: 'Minibus',
        blurb: 'For the whole wedding party, the team, or the family reunion that somehow became twenty-four people.',
        passengers: 'Up to 28',
        luggage: 'Full bay',
        best: 'Large groups and events',
      },
    },
  },

  guarantees: {
    title: 'Four guarantees, not empty adjectives',
    sub: 'What takes the stress out of landing at night, in a country you don’t know, with family and luggage.',
    items: {
      flight: {
        title: 'We track your flight',
        body: 'We watch the flight number you give us. If you land late, your driver already knows and is still there. Up to 60 minutes of waiting is included.',
      },
      sign: {
        title: 'Your name at arrivals',
        body: 'Your driver waits just outside customs holding a sign with your name. We send their name and photo the day before, so you know who to look for.',
      },
      insured: {
        title: 'Licensed and insured',
        body: 'Tourist transport units with active passenger insurance and current permits. Our numbers are printed on this page, not buried in a footer.',
      },
      price: {
        title: 'The quote is the price',
        body: 'What we confirm on WhatsApp is what you pay the driver. Tolls, fuel and waiting time are already inside it. No airport surcharge, no night rate.',
      },
    },
  },

  trust: {
    title: 'Who will be waiting for you',
    sub: 'Getting into a van with your family in another country means wanting to see a real face first. Here are ours.',
    founderTitle: 'The founder',
    founderParas: [
      'MOBA started in Tempate for a plain reason: too many visitors were landing in Liberia at ten at night and finding out their ride had quoted one price and wanted another.',
      'We drive these roads every day. We know which hotel entrance is unmarked, which turn floods in October, and how long Nosara really takes.',
    ],
    namePending: 'Name to add',
    portraitPending: 'Founder portrait to add',
    photo: 'Photo',
    name: 'Name',
    driversTitle: 'The drivers',
    driversNote: 'Every driver is a licensed professional, speaks English and Spanish, and has been with us long enough that we’d put our own family in the back seat.',
    entityLabel: 'Legal entity',
    entityNote: 'Cédula jurídica, shown openly rather than in small print.',
    permitLabel: 'Tourist transport permit',
    permitValue: 'ICT number',
    permitNote: 'Plate and permit number travel with each vehicle.',
  },

  faq: {
    title: 'Questions people ask before booking',
    sub: 'The six that come up most on WhatsApp.',
    items: [
      {
        q: 'What happens if my flight is delayed?',
        a: 'We track the flight number you send when booking, so a delay reaches us before it reaches you. Your driver shifts the pickup time and waits. Up to 60 minutes after landing is included at no extra cost.',
      },
      {
        q: 'How will I recognize my driver?',
        a: 'The day before you travel we send their name, photo and plate number on WhatsApp. They wait at the arrivals exit with a sign showing your name.',
      },
      {
        q: 'How do I pay?',
        a: 'Cash in US dollars or colones directly to the driver, or a bank transfer in advance if you prefer. No deposit is needed to hold a booking, and we never ask for card details over WhatsApp.',
      },
      {
        q: 'Can I cancel?',
        a: 'Yes, free of charge up to 24 hours before pickup. Plans change on holiday, and we would rather you tell us than leave a driver at the airport.',
      },
      {
        q: 'Do you provide child seats?',
        a: 'Yes, and they are free. Tick the child seat box in the form and tell us your children’s ages so we bring the right type. Costa Rican law requires a seat for children under twelve.',
      },
      {
        q: 'Do you cross to Nicaragua?',
        a: 'We drive you to Peñas Blancas and a partner vehicle meets you on the other side. You walk the border yourself with your documents, which is the only way it legally works. We explain each step on WhatsApp beforehand.',
      },
    ],
  },

  closer: {
    title: 'Tell us where you’re landing.',
    sub: 'Send the flight and the hotel. We reply with one price and the driver’s name.',
    wa: 'Message us on WhatsApp',
  },

  footer: {
    tag: 'Private transfers and drivers. Guanacaste, Costa Rica.',
    whereTitle: 'Where we drive',
    whereBody: 'Liberia airport, Tamarindo, Flamingo, Papagayo, Nosara, Sámara, Monteverde, Arenal, and the Nicaragua border.',
    reachTitle: 'Reach us',
    whatsapp: 'WhatsApp',
    hours: 'Replies from 6:00 to 22:00, every day.',
    legalTitle: 'Legal',
    entityPending: 'Cédula jurídica to add',
    permitPending: 'ICT permit to add',
    insurance: 'Passenger insurance active on every unit.',
  },

  float: 'Ask for a price on WhatsApp',

  // The WhatsApp message itself. The English version is only ever shown as a
  // preview — what actually goes to WhatsApp is always the Spanish one,
  // because the owner reads Spanish.
  message: {
    greeting: 'Hi MOBA, I would like a transfer price.',
    pickup: 'Pick-up',
    dropoff: 'Drop-off',
    date: 'Date',
    time: 'Time',
    passengers: 'Passengers',
    adult: 'adult',
    adults: 'adults',
    child: 'child',
    children: 'children',
    flight: 'Flight',
    seat: 'Child seat: yes, please',
    roundtrip: 'Return trip: yes, I need one too',
    notes: 'Notes',
    thanks: 'Thank you.',
    dateLocale: 'en-GB',
    am: 'AM',
    pm: 'PM',
  },
}
