import { News } from '../types';
import { mockNews, categories } from '../utils/mockData';

// Palabras para generar títulos aleatorios de noticias
const newsWords = {
  inicio: [
    'Última hora:', 'Urgente:', 'Actualización:', 'Breaking:', 'Ahora:', 
    'En desarrollo:', 'Exclusivo:', 'Confirmado:', 'Atención:', 'Flash:'
  ],
  sujetos: [
    'El Gobierno', 'El Banco Central', 'La oposición', 'El Congreso', 'La Bolsa',
    'El mercado', 'La Casa Rosada', 'El Ministerio de Economía', 'El Presidente',
    'La Justicia', 'El Senado', 'La Cámara de Diputados', 'El sector privado',
    'Los inversores', 'Los analistas', 'Los empresarios'
  ],
  verbos: [
    'anuncia', 'presenta', 'aprueba', 'debate', 'analiza', 'implementa',
    'confirma', 'rechaza', 'evalúa', 'modifica', 'propone', 'establece',
    'define', 'revisa', 'actualiza', 'anticipa'
  ],
  objetos: [
    'nuevas medidas', 'un nuevo proyecto', 'cambios importantes', 
    'una nueva regulación', 'reformas significativas', 'un plan estratégico',
    'modificaciones en el sistema', 'actualizaciones importantes',
    'un paquete de medidas', 'cambios en la normativa', 'nuevos controles',
    'ajustes en las políticas'
  ],
  areas: [
    'económicas', 'políticas', 'sociales', 'financieras', 'tributarias',
    'monetarias', 'cambiarias', 'laborales', 'impositivas', 'bancarias',
    'del mercado', 'de comercio exterior', 'de inversiones'
  ],
  complementos: [
    'para impulsar la economía',
    'para controlar la inflación',
    'para estabilizar el mercado',
    'ante la situación actual',
    'en respuesta a la crisis',
    'para mejorar la situación',
    'con impacto inmediato',
    'que entrarán en vigor hoy',
    'con alcance nacional',
    'de carácter urgente'
  ]
};

// Función para generar resúmenes aleatorios
const generateRandomSummary = (title: string) => {
  const summaries = [
    `Se conocieron detalles sobre ${title.toLowerCase()}. Las medidas buscan dar respuesta a la situación actual del país.`,
    `Fuentes oficiales confirmaron ${title.toLowerCase()}. Los cambios se implementarán en las próximas horas.`,
    `En una conferencia de prensa se anunció ${title.toLowerCase()}. El impacto se verá reflejado en los próximos días.`,
    `Tras una extensa reunión, se definió ${title.toLowerCase()}. Los especialistas analizan el alcance de esta decisión.`,
    `Se dio a conocer ${title.toLowerCase()}. El mercado reacciona a las nuevas disposiciones.`
  ];
  return summaries[Math.floor(Math.random() * summaries.length)];
};

// Función para generar un título aleatorio
const generateRandomTitle = () => {
  const inicio = newsWords.inicio[Math.floor(Math.random() * newsWords.inicio.length)];
  const sujeto = newsWords.sujetos[Math.floor(Math.random() * newsWords.sujetos.length)];
  const verbo = newsWords.verbos[Math.floor(Math.random() * newsWords.verbos.length)];
  const objeto = newsWords.objetos[Math.floor(Math.random() * newsWords.objetos.length)];
  const area = newsWords.areas[Math.floor(Math.random() * newsWords.areas.length)];
  const complemento = Math.random() > 0.5 ? ` ${newsWords.complementos[Math.floor(Math.random() * newsWords.complementos.length)]}` : '';
  
  return `${inicio} ${sujeto} ${verbo} ${objeto} ${area}${complemento}`;
};

// Función para generar una fecha realista
const generateRealisticDate = () => {
  const now = new Date();
  const maxMinutesAgo = 60; // Máximo 1 hora atrás
  const minMinutesAgo = 1; // Mínimo 1 minuto atrás
  const minutesAgo = Math.floor(Math.random() * (maxMinutesAgo - minMinutesAgo) + minMinutesAgo);
  return new Date(now.getTime() - minutesAgo * 60000);
};

// Función para formatear la fecha en español
const formatNewsDate = (date: Date) => {
  return date.toLocaleString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });
};

// Función para actualizar el contenido de una noticia
const updateNewsContent = (news: News): News => {
  const shouldUpdateTitle = Math.random() > 0.5; // 50% de probabilidad de actualizar el título
  const newTitle = shouldUpdateTitle ? generateRandomTitle() : news.title;
  const newDate = generateRealisticDate();
  
  return {
    ...news,
    title: newTitle,
    summary: shouldUpdateTitle ? generateRandomSummary(newTitle) : news.summary,
    publishedAt: newDate.toISOString(),
    content: shouldUpdateTitle ? `${generateRandomSummary(newTitle)}\n\nEsta es una noticia en desarrollo. Se actualizará con más información.` : news.content,
    author: news.author,
    source: news.source,
    tags: [...news.tags, 'actualizado']
  };
};

// Función para generar una imagen aleatoria de noticias
const getRandomImage = () => {
  const images = [
    'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
    'https://images.pexels.com/photos/4790255/pexels-photo-4790255.jpeg',
    'https://images.pexels.com/photos/7129527/pexels-photo-7129527.jpeg',
    'https://images.pexels.com/photos/3912364/pexels-photo-3912364.jpeg'
  ];
  return images[Math.floor(Math.random() * images.length)];
};

// Función para generar un autor aleatorio
const getRandomAuthor = () => {
  const authors = [
    'María López',
    'Carlos Rodríguez',
    'Ana García',
    'Juan Martínez',
    'Laura González',
    'Diego Fernández',
    'Sofía Benítez',
    'Pablo Sánchez'
  ];
  return authors[Math.floor(Math.random() * authors.length)];
};

// Función para generar una fuente aleatoria
const getRandomSource = () => {
  const sources = [
    'Clarín',
    'La Nación',
    'Infobae',
    'Página/12',
    'Ámbito Financiero',
    'El Cronista',
    'Télam',
    'Reuters Argentina'
  ];
  return sources[Math.floor(Math.random() * sources.length)];
};

// Función para generar tags relevantes
const generateTags = (title: string, category: string) => {
  const commonTags = ['actualidad', 'argentina', 'noticias'];
  const specificTags = title
    .toLowerCase()
    .split(' ')
    .filter(word => word.length > 4)
    .slice(0, 3);
  
  return [...new Set([...commonTags, ...specificTags, category])];
};

// Función para generar una noticia completamente nueva
const generateNewNews = (id: string, category: string): News => {
  const title = generateRandomTitle();
  const summary = generateRandomSummary(title);
  const date = generateRealisticDate();
  
  return {
    id,
    title,
    summary,
    content: `${summary}\n\nEsta es una noticia en desarrollo que acaba de ser publicada. Se actualizará con más información en los próximos minutos.\n\nLos detalles iniciales indican que esta situación podría tener importantes repercusiones en el ámbito ${category}. Expertos y analistas ya están evaluando el impacto de estas novedades.\n\nSe esperan más detalles y reacciones de los principales actores involucrados.`,
    imageUrl: getRandomImage(),
    source: getRandomSource(),
    author: getRandomAuthor(),
    publishedAt: date.toISOString(),
    category,
    tags: generateTags(title, category),
    url: `/noticia/${id}`
  };
};

// Función para obtener noticias actualizadas incluyendo nuevas
export const getUpdatedNews = (): News[] => {
  // Actualizar noticias existentes
  const updatedExistingNews = mockNews.map(news => updateNewsContent(news));
  
  // Generar nuevas noticias (1 a 3 noticias nuevas por actualización)
  const numberOfNewNews = Math.floor(Math.random() * 3) + 1;
  const newNews: News[] = [];
  
  for (let i = 0; i < numberOfNewNews; i++) {
    const id = `new-${Date.now()}-${i}`;
    const randomCategory = categories[Math.floor(Math.random() * categories.length)].slug;
    newNews.push(generateNewNews(id, randomCategory));
  }
  
  // Combinar noticias existentes y nuevas
  const allNews = [...updatedExistingNews, ...newNews];
  
  // Ordenar por fecha más reciente
  return allNews.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

// Función para obtener noticias destacadas actualizadas
export const getUpdatedFeaturedNews = (): News[] => {
  return getUpdatedNews().slice(0, 3);
};

// Función para obtener noticias por categoría
export const getUpdatedNewsByCategory = (category: string): News[] => {
  return getUpdatedNews().filter(news => news.category === category);
}; 