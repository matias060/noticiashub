import { News, Category, TrendingTopic, AmazonProduct } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Política', slug: 'politica' },
  { id: '2', name: 'Economía', slug: 'economia' },
  { id: '3', name: 'Deportes', slug: 'deportes' },
  { id: '4', name: 'Tecnología', slug: 'tecnologia' },
  { id: '5', name: 'Cultura', slug: 'cultura' },
  { id: '6', name: 'Internacional', slug: 'internacional' },
  { id: '7', name: 'Sociedad', slug: 'sociedad' },
  { id: '8', name: 'Crypto', slug: 'crypto' },
  { id: '9', name: 'Trading', slug: 'trading' },
];

export const rssSources = [
  {
    name: 'La Nación',
    url: 'https://www.lanacion.com.ar/arc/outboundfeeds/rss/?outputType=xml',
  },
  {
    name: 'Clarín',
    url: 'https://www.clarin.com/rss/lo-ultimo/',
  },
  {
    name: 'Infobae',
    url: 'https://www.infobae.com/feeds/rss/',
  },
  {
    name: 'Ámbito',
    url: 'https://www.ambito.com/rss/home.xml',
  },
  {
    name: 'Página/12',
    url: 'https://www.pagina12.com.ar/rss/portada',
  },
  {
    name: 'TN',
    url: 'https://tn.com.ar/feed/',
  },
];

export const amazonProducts: AmazonProduct[] = [
  {
    id: '1',
    title: 'Echo Dot (5ta generación)',
    description: 'Parlante inteligente con Alexa',
    price: 49.99,
    imageUrl: 'https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg',
    affiliateLink: 'https://amzn.to/echo-dot-5',
    category: 'Tecnología',
  },
  {
    id: '2',
    title: 'Kindle Paperwhite',
    description: 'E-reader resistente al agua',
    price: 139.99,
    imageUrl: 'https://images.pexels.com/photos/7129527/pexels-photo-7129527.jpeg',
    affiliateLink: 'https://amzn.to/kindle-paperwhite',
    category: 'Tecnología',
  },
  {
    id: '3',
    title: 'Fire TV Stick 4K',
    description: 'Streaming en 4K Ultra HD',
    price: 49.99,
    imageUrl: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg',
    affiliateLink: 'https://amzn.to/fire-tv-4k',
    category: 'Tecnología',
  },
];

export const trendingTopics: TrendingTopic[] = [
  { id: '1', name: 'Bitcoin', count: 156 },
  { id: '2', name: 'Dólar', count: 142 },
  { id: '3', name: 'Trading', count: 98 },
  { id: '4', name: 'Ethereum', count: 87 },
  { id: '5', name: 'Elecciones', count: 76 },
  { id: '6', name: 'Reforma laboral', count: 65 },
  { id: '7', name: 'Crisis energética', count: 52 },
  { id: '8', name: 'Criptomonedas', count: 48 },
];

export const mockNews: News[] = [
  {
    id: '1',
    title: 'El Gobierno anuncia nuevas medidas económicas para controlar la inflación',
    summary: 'El Ministerio de Economía presentó un paquete de medidas para combatir la inflación creciente que afecta a la economía argentina.',
    content: 'El Gobierno nacional anunció hoy un nuevo paquete de medidas económicas destinadas a controlar la creciente inflación que afecta al país. Entre las principales medidas se encuentran el congelamiento de tarifas de servicios públicos por 90 días, un acuerdo de precios con las principales cadenas de supermercados y una reducción temporal de impuestos a productos de la canasta básica.\n\nEl ministro de Economía destacó que estas medidas forman parte de un plan integral para estabilizar la economía y recuperar el poder adquisitivo de los salarios. "Estamos trabajando en un enfoque múltiple que ataque las causas estructurales de la inflación, mientras protegemos a los sectores más vulnerables", afirmó durante la conferencia de prensa.\n\nEconomistas consultados tienen opiniones divididas sobre la efectividad de estas medidas. Algunos consideran que son necesarias como paliativo de corto plazo, mientras otros advierten que sin una reforma fiscal profunda y un plan monetario consistente, los efectos serán limitados.\n\nLas medidas entrarán en vigencia a partir del próximo lunes y se extenderán, en principio, por un período de 90 días, con posibilidad de prórroga según la evolución de los indicadores económicos.',
    imageUrl: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
    source: 'El Cronista',
    author: 'María López',
    publishedAt: '2025-05-10T14:30:00Z',
    category: 'economia',
    tags: ['inflación', 'economía', 'gobierno', 'medidas económicas'],
    url: '/noticia/1',
  },
  {
    id: '2',
    title: 'Argentina se prepara para la Copa América con nuevas convocatorias',
    summary: 'El seleccionador nacional anunció la lista de convocados para los próximos amistosos previos a la Copa América.',
    content: 'La selección argentina de fútbol comienza su preparación para la próxima Copa América con una serie de amistosos internacionales. El director técnico dio a conocer hoy la lista de 26 jugadores convocados, con algunas sorpresas y regresos esperados.\n\nEntre las novedades se destaca la vuelta de dos jugadores que se encontraban lesionados y la convocatoria de un joven delantero que está teniendo una temporada excepcional en la liga española. "Hemos conformado un grupo que combina experiencia y juventud, manteniendo la base del equipo campeón del mundo pero incorporando nuevos valores que le darán frescura al equipo", explicó el entrenador.\n\nLos próximos partidos amistosos serán fundamentales para definir el equipo titular que disputará el torneo continental. Argentina debutará contra Chile en la fase de grupos y luego enfrentará a Perú y Canadá.\n\nLos expertos consideran a la selección argentina como una de las grandes favoritas para alzarse con el título, junto a Brasil y Uruguay. El plantel comenzará los entrenamientos la próxima semana en el predio de Ezeiza.',
    imageUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    source: 'Olé',
    author: 'Carlos Martínez',
    publishedAt: '2025-05-09T18:15:00Z',
    category: 'deportes',
    tags: ['fútbol', 'selección argentina', 'Copa América', 'Messi'],
    url: '/noticia/2',
  },
  {
    id: '3',
    title: 'Nueva tecnología argentina para detección temprana de enfermedades es premiada internacionalmente',
    summary: 'Científicos argentinos desarrollaron un sistema de diagnóstico basado en inteligencia artificial que fue reconocido en un congreso internacional.',
    content: 'Un equipo de investigadores argentinos recibió un importante reconocimiento internacional por el desarrollo de una tecnología innovadora para la detección temprana de enfermedades. El sistema, basado en inteligencia artificial y procesamiento de imágenes médicas, permite identificar patrones anómalos con mayor precisión y en etapas más tempranas que los métodos convencionales.\n\nEl proyecto, desarrollado en colaboración entre el CONICET, la Universidad de Buenos Aires y una empresa de tecnología médica, fue premiado en el Congreso Internacional de Innovación Médica celebrado en Berlín. "Este reconocimiento es el resultado de años de investigación y desarrollo, y demuestra el potencial de la ciencia argentina cuando se articula adecuadamente con el sector productivo", señaló la directora del equipo.\n\nLa tecnología ya ha comenzado a implementarse en hospitales públicos de varias provincias argentinas, con resultados prometedores. Los estudios preliminares muestran una mejora del 40% en la detección temprana de ciertas patologías, lo que podría traducirse en tratamientos más efectivos y menores costos para el sistema de salud.\n\nEl equipo de investigación adelantó que están trabajando en nuevas aplicaciones de la tecnología y en la posibilidad de exportarla a otros países de la región.',
    imageUrl: 'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg',
    source: 'La Nación',
    author: 'Javier Rodríguez',
    publishedAt: '2025-05-08T09:45:00Z',
    category: 'tecnologia',
    tags: ['tecnología', 'salud', 'innovación', 'inteligencia artificial'],
    url: '/noticia/3',
  },
  {
    id: '4',
    title: 'Debate en el Congreso por la nueva ley de educación digital',
    summary: 'Diputados de diferentes bloques discuten el proyecto de ley que busca modernizar el sistema educativo con nuevas tecnologías.',
    content: 'La Cámara de Diputados comenzó hoy el debate del proyecto de ley de Educación Digital, una iniciativa que busca modernizar el sistema educativo argentino incorporando nuevas tecnologías y contenidos adaptados a las demandas del siglo XXI.\n\nEl proyecto, que cuenta con apoyo de diversos bloques políticos, propone la implementación gradual de infraestructura digital en todas las escuelas del país, la capacitación docente en nuevas tecnologías y la incorporación de programación y pensamiento computacional como contenidos obligatorios desde el nivel primario.\n\n"Esta ley representa una oportunidad histórica para actualizar nuestro sistema educativo y preparar a las nuevas generaciones para los desafíos del futuro", expresó la presidenta de la Comisión de Educación durante la apertura del debate.\n\nSin embargo, algunos legisladores plantearon preocupaciones sobre la brecha digital existente entre diferentes regiones del país y solicitaron mayores precisiones sobre el financiamiento necesario para implementar la ley.\n\nDe aprobarse en Diputados, el proyecto pasará al Senado, donde se espera que sea tratado antes del receso de invierno.',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    source: 'Clarín',
    author: 'Laura Gómez',
    publishedAt: '2025-05-08T16:20:00Z',
    category: 'politica',
    tags: ['educación', 'tecnología', 'congreso', 'ley'],
    url: '/noticia/4',
  },
  {
    id: '5',
    title: 'Artista argentina expone su obra en el MoMA de Nueva York',
    summary: 'La reconocida artista visual presentará una instalación multimedia que explora la identidad latinoamericana en el prestigioso museo neoyorquino.',
    content: 'La artista visual argentina Lucía Méndez inaugurará el próximo mes una exposición individual en el Museo de Arte Moderno de Nueva York (MoMA), convirtiéndose en una de las pocas artistas latinoamericanas en conseguir este reconocimiento en los últimos años.\n\nLa muestra, titulada "Fronteras invisibles", consiste en una instalación multimedia que combina videoarte, fotografía y escultura para explorar temas de identidad, migración y memoria en el contexto latinoamericano. La obra es el resultado de tres años de investigación y trabajo de campo en diferentes comunidades de Argentina y otros países de la región.\n\n"Es un honor enorme poder presentar mi trabajo en un espacio tan significativo para el arte contemporáneo. Esta exposición busca generar un diálogo sobre nuestras identidades compartidas y nuestras historias particulares como latinoamericanos", expresó Méndez en comunicación con la prensa.\n\nLa curadora del MoMA destacó la originalidad de la propuesta y su capacidad para "establecer puentes entre lo local y lo universal, invitando a reflexionar sobre las complejidades de la identidad en un mundo globalizado".\n\nLa exposición permanecerá abierta al público durante tres meses y luego iniciará una gira por diferentes museos de Estados Unidos y Europa.',
    imageUrl: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
    source: 'Página/12',
    author: 'Sofía Benítez',
    publishedAt: '2025-05-07T11:30:00Z',
    category: 'cultura',
    tags: ['arte', 'cultura', 'exposición', 'MoMA'],
    url: '/noticia/5',
  },
  {
    id: '6',
    title: 'El dólar blue alcanza nuevo récord histórico',
    summary: 'La divisa en el mercado paralelo superó ayer su máximo histórico en medio de incertidumbre económica.',
    content: 'El dólar blue marcó ayer un nuevo récord histórico al cerrar en 1250 pesos, superando su máxima cotización anterior y ampliando la brecha con el tipo de cambio oficial que se mantiene en 925 pesos.\n\nEste nuevo salto en la cotización paralela se produce en un contexto de creciente incertidumbre económica, alimentada por los recientes datos de inflación y las dudas sobre el rumbo de la política monetaria. Analistas del mercado señalan que la demanda de divisas se ha incrementado como refugio de valor frente a la persistente pérdida de poder adquisitivo del peso.\n\n"Estamos viendo una combinación de factores que presionan sobre el mercado cambiario: restricciones a la operatoria oficial, expectativas de inflación al alza y un contexto internacional menos favorable para mercados emergentes", explicó un economista consultado.\n\nDesde el Banco Central aseguraron que cuentan con herramientas para mantener la estabilidad cambiaria y que el valor del dólar oficial seguirá ajustándose gradualmente según lo planificado en el programa económico.\n\nLa evolución del mercado cambiario será clave para las próximas decisiones de política monetaria, que se anunciarán en la reunión del directorio del Banco Central prevista para la próxima semana.',
    imageUrl: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    source: 'Ámbito Financiero',
    author: 'Roberto Sánchez',
    publishedAt: '2025-05-07T14:45:00Z',
    category: 'economia',
    tags: ['dólar', 'economía', 'finanzas', 'inflación'],
    url: '/noticia/6',
  },
  {
    id: '7',
    title: 'Descubren nueva especie de flora autóctona en la Patagonia argentina',
    summary: 'Científicos identificaron una especie de planta hasta ahora desconocida en una remota región de la Patagonia.',
    content: 'Un equipo de botánicos del CONICET anunció el descubrimiento de una nueva especie de planta autóctona en una zona remota de la Patagonia argentina. La especie, bautizada como "Nassauvia patagonica", es una pequeña planta con flores que crece en condiciones extremas y presenta características únicas que la distinguen de otras especies del género.\n\nEl hallazgo es resultado de una expedición científica realizada el año pasado en zonas poco exploradas de la provincia de Santa Cruz. "Este descubrimiento nos recuerda que todavía hay mucho por conocer sobre nuestra biodiversidad, incluso en regiones que creíamos bien estudiadas", comentó la directora del proyecto de investigación.\n\nLos científicos destacaron que la planta posee compuestos químicos con potencial aplicación medicinal, particularmente como antiinflamatorio natural. Actualmente se están realizando estudios más detallados sobre sus propiedades y su distribución geográfica.\n\nEl descubrimiento ha sido publicado en una prestigiosa revista internacional de botánica y pone de relieve la importancia de la conservación de los ecosistemas patagónicos, que albergan especies únicas adaptadas a condiciones climáticas extremas.\n\nEl equipo de investigadores continuará explorando la región en busca de otras especies desconocidas que puedan ampliar el conocimiento sobre la flora autóctona argentina.',
    imageUrl: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
    source: 'Télam',
    author: 'Alejandra Peralta',
    publishedAt: '2025-05-06T10:15:00Z',
    category: 'sociedad',
    tags: ['ciencia', 'botánica', 'Patagonia', 'biodiversidad'],
    url: '/noticia/7',
  },
  {
    id: '8',
    title: 'Tensión diplomática entre Argentina y Venezuela tras declaraciones cruzadas',
    summary: 'El gobierno argentino convocó al embajador venezolano tras declaraciones del presidente de ese país sobre la política exterior argentina.',
    content: 'La Cancillería argentina convocó hoy al embajador de Venezuela para expresar su "enérgico rechazo" a las recientes declaraciones del presidente venezolano, quien criticó duramente la política exterior del gobierno argentino y su posición respecto a conflictos regionales.\n\nEn un discurso televisado ayer, el mandatario venezolano acusó a Argentina de "subordinar su política exterior a intereses extranjeros" y de "abandonar los principios de no intervención y autodeterminación de los pueblos". Estas declaraciones generaron un inmediato malestar en el gobierno argentino.\n\nTras la reunión con el embajador, el canciller argentino emitió un comunicado donde calificó las expresiones como "inaceptables e impropias del trato respetuoso que debe existir entre naciones hermanas" y reafirmó la posición argentina de "defensa irrestricta de los valores democráticos y los derechos humanos en la región".\n\nAnalistas internacionales consideran que este episodio marca un nuevo capítulo en las complejas relaciones entre ambos países, que en los últimos años han oscilado entre períodos de acercamiento y distanciamiento según los cambios políticos en sus respectivos gobiernos.\n\nPor el momento, Argentina no ha anunciado medidas adicionales más allá del llamado a consultas, aunque no se descarta que el incidente pueda escalar si no hay una rectificación por parte del gobierno venezolano.',
    imageUrl: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg',
    source: 'Infobae',
    author: 'Diego Fernández',
    publishedAt: '2025-05-06T17:30:00Z',
    category: 'internacional',
    tags: ['diplomacia', 'Venezuela', 'política exterior', 'Latinoamérica'],
    url: '/noticia/8',
  },
];

export const getNewsByCategory = (category: string) => {
  return mockNews.filter(news => news.category === category);
};

export const getNewsById = (id: string) => {
  return mockNews.find(news => news.id === id);
};

export const getFeaturedNews = () => {
  return mockNews.slice(0, 3);
};

export const getLatestNews = () => {
  return [...mockNews].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 6);
};

export const getRelatedNews = (id: string, category: string) => {
  return mockNews
    .filter(news => news.id !== id && news.category === category)
    .slice(0, 3);
};

export const rssFeeds = [
  {
    id: '1',
    name: 'Clarín',
    url: 'https://www.clarin.com/rss/latest/',
    icon: 'https://www.clarin.com/favicon.ico',
    category: 'general'
  },
  {
    id: '2',
    name: 'La Nación',
    url: 'https://www.lanacion.com.ar/arc/outboundfeeds/rss/',
    icon: 'https://www.lanacion.com.ar/favicon.ico',
    category: 'general'
  },
  {
    id: '3',
    name: 'Infobae',
    url: 'https://www.infobae.com/feeds/rss/',
    icon: 'https://www.infobae.com/favicon.ico',
    category: 'general'
  },
  {
    id: '4',
    name: 'Página/12',
    url: 'https://www.pagina12.com.ar/rss',
    icon: 'https://www.pagina12.com.ar/favicon.ico',
    category: 'general'
  },
  {
    id: '5',
    name: 'Ámbito Financiero',
    url: 'https://www.ambito.com/rss/home.xml',
    icon: 'https://www.ambito.com/favicon.ico',
    category: 'economia'
  },
  {
    id: '6',
    name: 'El Cronista',
    url: 'https://www.cronista.com/rss',
    icon: 'https://www.cronista.com/favicon.ico',
    category: 'economia'
  },
  {
    id: '7',
    name: 'Olé',
    url: 'https://www.ole.com.ar/rss/latest',
    icon: 'https://www.ole.com.ar/favicon.ico',
    category: 'deportes'
  },
  {
    id: '8',
    name: 'TyC Sports',
    url: 'https://www.tycsports.com/rss.xml',
    icon: 'https://www.tycsports.com/favicon.ico',
    category: 'deportes'
  },
  {
    id: '9',
    name: 'Télam',
    url: 'https://www.telam.com.ar/rss2/',
    icon: 'https://www.telam.com.ar/favicon.ico',
    category: 'general'
  },
  {
    id: '10',
    name: 'CriptoNoticias Argentina',
    url: 'https://www.criptonoticias.com/feed/',
    icon: 'https://www.criptonoticias.com/favicon.ico',
    category: 'crypto'
  },
  {
    id: '11',
    name: 'DiarioBitcoin Argentina',
    url: 'https://www.diariobitcoin.com/feed/',
    icon: 'https://www.diariobitcoin.com/favicon.ico',
    category: 'crypto'
  },
  {
    id: '12',
    name: 'Infobae Crypto',
    url: 'https://www.infobae.com/economia/criptomonedas/feed/',
    icon: 'https://www.infobae.com/favicon.ico',
    category: 'crypto'
  },
  {
    id: '13',
    name: 'iProfesional Crypto',
    url: 'https://www.iprofesional.com/tecnologia/criptomonedas/feed',
    icon: 'https://www.iprofesional.com/favicon.ico',
    category: 'crypto'
  },
  {
    id: '14',
    name: 'Ámbito Trading',
    url: 'https://www.ambito.com/contenidos/mercados.xml',
    icon: 'https://www.ambito.com/favicon.ico',
    category: 'trading'
  },
  {
    id: '15',
    name: 'Cronista Trading',
    url: 'https://www.cronista.com/tema/trading/feed/',
    icon: 'https://www.cronista.com/favicon.ico',
    category: 'trading'
  },
  {
    id: '16',
    name: 'iProfesional Trading',
    url: 'https://www.iprofesional.com/finanzas/trading/feed',
    icon: 'https://www.iprofesional.com/favicon.ico',
    category: 'trading'
  },
  {
    id: '17',
    name: 'Investing.com Argentina',
    url: 'https://ar.investing.com/rss/news.rss',
    icon: 'https://ar.investing.com/favicon.ico',
    category: 'trading'
  }
];