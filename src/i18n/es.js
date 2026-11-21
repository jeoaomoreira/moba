// Costa Rican Spanish, usted form throughout — that is how a transfer
// company addresses a guest here, and it stays consistent with the driver's
// own tone on WhatsApp.
export default {
  code: 'es',
  name: 'Español',
  skip: 'Saltar al formulario de cotización',

  nav: {
    label: 'Principal',
    home: 'Inicio MOBA',
    fleet: 'Flota',
    guarantees: 'Garantías',
    drivers: 'Choferes',
    faq: 'Preguntas',
    cta: 'Cotizar',
    language: 'Idioma',
  },

  hero: {
    lead: 'Exploremos las maravillas de',
    place: 'Costa Rica.',
    sub: 'Traslados privados por Guanacaste, desde el aeropuerto de Liberia hasta donde se hospede. Un precio fijo, confirmado por WhatsApp antes de viajar.',
  },

  quote: {
    title: 'Solicite su traslado',
    note: 'Esto arma un mensaje de WhatsApp. Usted lo lee, cambia lo que quiera y lo envía.',
    pickup: 'Recogida',
    dropoff: 'Destino',
    dropoffPlaceholder: 'Hotel, playa o frontera',
    date: 'Fecha',
    time: 'Hora',
    flight: 'Número de vuelo',
    flightPlaceholder: 'AA 1234',
    adults: 'Adultos',
    adult: 'adulto',
    children: 'Niños',
    child: 'niño',
    fewerLabel: 'Un {noun} menos',
    moreLabel: 'Un {noun} más',
    notes: 'Algo que debamos saber',
    notesPlaceholder: 'Tablas de surf, nombre del hotel, llegada temprano',
    seat: 'Necesito silla para niños',
    roundtrip: 'También necesito el regreso',
    barText: 'Le respondemos con un precio fijo, todo incluido. Aquí no pedimos datos de tarjeta.',
    submit: 'Armar mi mensaje de WhatsApp',
  },

  errors: {
    template: 'Nos falta {items} para poder armar el mensaje.',
    pickup: 'la recogida',
    dropoff: 'el destino',
    date: 'la fecha',
    time: 'la hora',
    and: 'y',
    copyFailed: 'Su navegador bloqueó la copia. Seleccione el texto de arriba.',
  },

  preview: {
    title: 'Este es su mensaje',
    send: 'Abrir WhatsApp y enviar',
    copy: 'Copiar el texto',
    copied: 'Copiado',
    edit: 'Cambiar algo',
    spanishNote: null,
    showSpanish: null,
    showMine: null,
    spanishLabel: null,
  },

  fleet: {
    title: 'El vehículo para su grupo',
    sub: 'Cada unidad cuenta con permiso de transporte turístico, aire acondicionado y seguro de pasajeros. Díganos cuántos viajan y llevamos la indicada.',
    foot: '¿Grupo muy grande para un solo vehículo? Mandamos un chofer guía para que todos lleguen juntos.',
    specPassengers: 'Pasajeros',
    specLuggage: 'Equipaje',
    specBest: 'Ideal para',
    alt: 'Vista lateral de {name}',
    items: {
      van: {
        name: 'Buseta',
        blurb: 'El traslado de todos los días. Parejas, familias y cualquiera que llegue con más equipaje del que admitió haber empacado.',
        passengers: 'Hasta 8',
        luggage: '8 maletas',
        best: 'Del aeropuerto a las playas',
      },
      suv: {
        name: 'SUV 4×4',
        blurb: 'Despeje alto para los caminos que dejan de ser caminos. Nosara, Santa Teresa y cualquier lugar donde cruzar un río sea parte de las indicaciones.',
        passengers: 'Hasta 5',
        luggage: '4 maletas',
        best: 'Accesos difíciles y época lluviosa',
      },
      sprinter: {
        name: 'Sprinter',
        blurb: 'Espacio para ir de pie, una bodega de equipaje de verdad y asientos que mantienen al grupo junto en vez de partirlo en dos carros.',
        passengers: 'Hasta 16',
        luggage: '16 maletas',
        best: 'Bodas y grupos de surf',
      },
      minibus: {
        name: 'Microbús',
        blurb: 'Para toda la fiesta de bodas, el equipo o la reunión familiar que de alguna forma llegó a veinticuatro personas.',
        passengers: 'Hasta 28',
        luggage: 'Bodega completa',
        best: 'Grupos grandes y eventos',
      },
    },
  },

  guarantees: {
    title: 'Cuatro garantías, no adjetivos vacíos',
    sub: 'Lo que le quita el estrés a aterrizar de noche, en un país que no conoce, con familia y equipaje.',
    items: {
      flight: {
        title: 'Seguimos su vuelo',
        body: 'Revisamos el número de vuelo que nos da. Si aterriza tarde, su chofer ya lo sabe y sigue ahí. Se incluyen hasta 60 minutos de espera.',
      },
      sign: {
        title: 'Su nombre en llegadas',
        body: 'Su chofer lo espera justo afuera de aduanas con un rótulo con su nombre. Le mandamos su nombre y su foto el día anterior, para que sepa a quién buscar.',
      },
      insured: {
        title: 'Con permiso y seguro',
        body: 'Unidades de transporte turístico con seguro de pasajeros vigente y permisos al día. Nuestros números están impresos en esta página, no escondidos en el pie.',
      },
      price: {
        title: 'La cotización es el precio',
        body: 'Lo que confirmamos por WhatsApp es lo que le paga al chofer. Peajes, combustible y tiempo de espera ya van incluidos. Sin recargo de aeropuerto ni tarifa nocturna.',
      },
    },
  },

  trust: {
    title: 'Quién lo va a estar esperando',
    sub: 'Subirse a una buseta con su familia en otro país significa querer ver una cara real primero. Aquí están las nuestras.',
    founderTitle: 'El fundador',
    founderParas: [
      'MOBA nació en Tamarindo por una razón sencilla: demasiados visitantes aterrizaban en Liberia a las diez de la noche y descubrían que su transporte había cotizado un precio y quería otro.',
      'Manejamos estos caminos todos los días. Sabemos cuál entrada de hotel no tiene rótulo, cuál curva se inunda en octubre y cuánto dura de verdad llegar a Nosara.',
    ],
    namePending: 'Falta el nombre',
    portraitPending: 'Falta la foto del fundador',
    photo: 'Foto',
    name: 'Nombre',
    driversTitle: 'Los choferes',
    driversNote: 'Cada chofer es un profesional con licencia, habla español e inglés, y lleva con nosotros el tiempo suficiente como para que subamos a nuestra propia familia en la parte de atrás.',
    entityLabel: 'Cédula jurídica',
    entityNote: 'Cédula jurídica, a la vista y no en letra pequeña.',
    permitLabel: 'Permiso de transporte turístico',
    permitValue: 'Número del ICT',
    permitNote: 'La placa y el número de permiso viajan con cada vehículo.',
  },

  faq: {
    title: 'Preguntas antes de reservar',
    sub: 'Las seis que más nos hacen por WhatsApp.',
    items: [
      {
        q: '¿Qué pasa si mi vuelo se atrasa?',
        a: 'Seguimos el número de vuelo que nos envía al reservar, así que el atraso nos llega antes que a usted. Su chofer ajusta la hora de recogida y espera. Se incluyen hasta 60 minutos después de aterrizar, sin costo extra.',
      },
      {
        q: '¿Cómo reconozco a mi chofer?',
        a: 'El día antes de viajar le mandamos su nombre, su foto y el número de placa por WhatsApp. La espera es en la salida de llegadas, con un rótulo con su nombre.',
      },
      {
        q: '¿Cómo pago?',
        a: 'Efectivo en dólares o colones directo al chofer, o transferencia bancaria por adelantado si prefiere. No se necesita depósito para separar la reserva, y nunca pedimos datos de tarjeta por WhatsApp.',
      },
      {
        q: '¿Puedo cancelar?',
        a: 'Sí, sin costo hasta 24 horas antes de la recogida. Los planes cambian en vacaciones, y preferimos que nos avise a dejar a un chofer esperando en el aeropuerto.',
      },
      {
        q: '¿Tienen sillas para niños?',
        a: 'Sí, y son gratis. Marque la casilla de silla para niños en el formulario y díganos las edades para llevar la correcta. La ley costarricense exige silla para menores de doce años.',
      },
      {
        q: '¿Cruzan a Nicaragua?',
        a: 'Lo llevamos hasta Peñas Blancas y un vehículo aliado lo recibe del otro lado. La frontera se cruza caminando con sus documentos, que es la única forma en que funciona legalmente. Le explicamos cada paso por WhatsApp antes.',
      },
    ],
  },

  closer: {
    title: 'Díganos dónde aterriza.',
    sub: 'Mándenos el vuelo y el hotel. Le respondemos con un precio y el nombre del chofer.',
    wa: 'Escríbanos por WhatsApp',
  },

  footer: {
    tag: 'Traslados privados y choferes. Guanacaste, Costa Rica.',
    whereTitle: 'Dónde manejamos',
    whereBody: 'Aeropuerto de Liberia, Tamarindo, Flamingo, Papagayo, Nosara, Sámara, Monteverde, Arenal y la frontera con Nicaragua.',
    reachTitle: 'Contáctenos',
    whatsapp: 'WhatsApp',
    hours: 'Respondemos de 6:00 a 22:00, todos los días.',
    legalTitle: 'Legal',
    entityPending: 'Falta la cédula jurídica',
    permitPending: 'Falta el permiso del ICT',
    insurance: 'Seguro de pasajeros vigente en cada unidad.',
  },

  float: 'Pida su precio por WhatsApp',

  // This is the version that actually reaches WhatsApp, in every case.
  message: {
    greeting: 'Hola MOBA, quisiera cotizar un traslado.',
    pickup: 'Recogida',
    dropoff: 'Destino',
    date: 'Fecha',
    time: 'Hora',
    passengers: 'Pasajeros',
    adult: 'adulto',
    adults: 'adultos',
    child: 'niño',
    children: 'niños',
    flight: 'Vuelo',
    seat: 'Silla para niños: sí, por favor',
    roundtrip: 'Viaje de regreso: sí, también lo necesito',
    notes: 'Notas',
    thanks: 'Gracias.',
    dateLocale: 'es-CR',
    am: 'a.m.',
    pm: 'p.m.',
  },
}
