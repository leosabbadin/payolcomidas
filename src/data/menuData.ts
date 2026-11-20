import { Category, MenuItem } from '../types';
import chapaPayolImg from '../assets/images/chapa-payol.jpg';
import bolinhoCarneSecaImg from '../assets/images/bolinho-carne-seca-mandioca.jpg';
import carneNaChapaImg from '../assets/images/Carne na chapa.jpeg';
import chapaImg from '../assets/images/Chapa.jpeg';
import picanhaChapaImg from '../assets/images/Picanha na chapa.jpeg';
import pancetaMandiocaImg from '../assets/images/Panceta com mandioca.jpeg';
import panelinha1Img from '../assets/images/Panelinha 1.jpeg';
import panelinha2Img from '../assets/images/Panelinha 2.jpeg';
import parmegianaFileImg from '../assets/images/Parmegiana de Filé.jpeg';
import parmegianaFrangoImg from '../assets/images/Parmegiana de Frango.jpeg';
import discoDeCarneImg from '../assets/images/Disco de carne.jpeg';
import brownieImg from '../assets/images/brownie com sorvete.jpg';

export const CATEGORIES: Category[] = [
  {
    id: 'mais-vendidos',
    name: 'Mais Vendidos',
    shortName: 'Destaques',
    icon: 'Flame',
    description: 'Os pratos e petiscos mais consagrados do Rancho Payol.'
  },
  {
    id: 'saladas-entradas',
    name: 'Saladas & Entradas',
    shortName: 'Entradas',
    icon: 'Salad',
    description: 'Para começar bem a experiência com frescor e tempero artesanal.'
  },
  {
    id: 'petiscos-rancho',
    name: 'Petiscos do Rancho',
    shortName: 'Petiscos',
    icon: 'Utensils',
    description: 'Porções fartas e crocantes perfeitas para compartilhar.'
  },
  {
    id: 'do-mar-pro-bar',
    name: 'Do Mar pro Bar',
    shortName: 'Frutos do Mar',
    icon: 'Fish',
    description: 'Tilápias selecionadas e camarões nobres preparados com maestria.'
  },
  {
    id: 'sertao-raiz',
    name: 'Do Sertão e Raiz',
    shortName: 'Sertão & Raiz',
    icon: 'Wheat',
    description: 'Tradição caipira e sabores autênticos que contam histórias.'
  },
  {
    id: 'chapas-rancho',
    name: 'Chapas do Rancho',
    shortName: 'Chapas Quentes',
    icon: 'Soup',
    description: 'Servidas borbulhantes na chapa de ferro com mandioca e queijo derretido.'
  },
  {
    id: 'carnes-brasa',
    name: 'Carnes na Brasa',
    shortName: 'Carnes na Brasa',
    icon: 'Beef',
    description: 'Cortes nobres assados no fogo a carvão com acompanhamentos completos.',
    sectionNotes: '🔥 Dica do Chef: Todos os pratos da brasa acompanham arroz soltinho, feijão tropeiro, mandioca, batata frita, vinagrete e farofa. Adicional de Aligot por R$ 19,00.'
  },
  {
    id: 'panelinhas-pratos',
    name: 'Panelinhas e Pratos',
    shortName: 'Panelinhas',
    icon: 'CookingPot',
    description: 'Clássicas panelinhas bem recheadas e pratos fartos.'
  },
  {
    id: 'guarnicoes',
    name: 'Guarnições',
    shortName: 'Guarnições',
    icon: 'Bowl',
    description: 'Porções extras para enriquecer ainda mais a sua refeição.'
  },
  {
    id: 'sobremesas',
    name: 'Sobremesas',
    shortName: 'Sobremesas',
    icon: 'IceCream',
    description: 'O toque doce final para fechar sua visita ao Rancho com chave de ouro.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // SALADAS & ENTRADAS
  {
    id: 'se-1',
    name: 'Salada de Repolho Payol',
    categoryId: 'saladas-entradas',
    categoryName: 'Saladas & Entradas',
    description: 'Repolho marinado no tempero exclusivo do chef, ovo de codorna e tomate cereja. Refrescante, levemente azedinha e cheia de sabor.',
    price: 26.90,
    badge: 'Refrescante'
  },
  {
    id: 'se-2',
    name: 'Salada de Jiló',
    categoryId: 'saladas-entradas',
    categoryName: 'Saladas & Entradas',
    description: 'Lâminas finas de jiló com cebola roxa, pimenta de cheiro, cheiro-verde e suco de limão. Amarga na medida, aromática e refrescante.',
    price: 23.90,
    badge: 'Receita Raiz'
  },
  {
    id: 'se-3',
    name: 'Tábua de Frios Payol',
    categoryId: 'saladas-entradas',
    categoryName: 'Saladas & Entradas',
    description: 'Salaminho, palmito, mussarela, queijo prato, queijo coalho, ovos de codorna, azeitona, tomate cereja e uva.',
    price: 88.90,
    badge: 'Ideal p/ Chopp'
  },
  {
    id: 'se-4',
    name: 'Ceviche Payol',
    categoryId: 'saladas-entradas',
    categoryName: 'Saladas & Entradas',
    description: 'Cubos de filé de tilápia marinados no suco de limão com cebola roxa, cheiro-verde, pimenta dedo-de-moça e maçã verde. Leve, cítrico e cheio de personalidade.',
    price: 54.90,
    badge: 'Toque Cítrico'
  },

  // PETISCOS DO RANCHO
  {
    id: 'pr-1',
    name: 'Batata Bruta',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Batata palito sequinha, crocante e democrática. Simples só no nome.',
    price: 32.90,
  },
  {
    id: 'pr-2',
    name: 'Batata Rústica',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Batata canoa rústica com cheddar cremoso e bacon em cubos.',
    price: 46.90,
    badge: 'Com Cheddar & Bacon'
  },
  {
    id: 'pr-8',
    name: 'Batata Sistemática',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Batata canoa rústica com carne de sol desfiada e cheddar. Essa aqui é sistemática mesmo: não sobra nada.',
    price: 48.90,
    badge: 'Sistemática'
  },
  {
    id: 'pr-3',
    name: 'Bolinho de Carne Seca com Mandioca',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Crocante por fora, recheio saboroso e cremoso por dentro com carne seca desfiada e tempero especial da casa.',
    price: 54.90,
    imageUrl: bolinhoCarneSecaImg,
    badge: 'Feito na Casa'
  },
  {
    id: 'pr-4',
    name: 'Panceta com Mandioca',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Panceta bem fritinha com mandioca cozida e limão. Clássico de boteco.',
    price: 44.90,
    imageUrl: pancetaMandiocaImg,
    badge: 'Crocante & Macia'
  },
  {
    id: 'pr-5',
    name: 'Disco de Carne',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Blend suculento de patinho com bacon, recheado com queijo.',
    price: 54.90,
    badge: 'Recheado com Queijo'
  },
  {
    id: 'pr-6',
    name: 'Mandioca com Carne de Sol',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Carne de sol desfiada na manteiga do sertão, com cebola, mandioca frita e queijo por cima.',
    price: 74.80,
    badge: 'Manteiga de Garrafa'
  },
  {
    id: 'pr-7',
    name: 'Torresmo à Pururuca',
    categoryId: 'petiscos-rancho',
    categoryName: 'Petiscos do Rancho',
    description: 'Torresmo crocante de verdade. Barulho na mordida garantido.',
    price: 29.90,
    badge: 'Super Crocante'
  },

  // DO MAR PRO BAR
  {
    id: 'mb-1',
    name: 'Tilápia Payol',
    categoryId: 'do-mar-pro-bar',
    categoryName: 'Do Mar pro Bar',
    description: 'Filé de tilápia recheado com queijo. Surpreendente.',
    price: 74.90,
    imageUrl: discoDeCarneImg,
    badge: 'Recheada c/ Queijo'
  },
  {
    id: 'mb-2',
    name: 'Camarão Alho e Óleo',
    categoryId: 'do-mar-pro-bar',
    categoryName: 'Do Mar pro Bar',
    description: 'Camarões graúdos no azeite e alho, com toque de shoyu e limão.',
    price: 89.90,
    badge: 'Camarões Graúdos'
  },
  {
    id: 'mb-3',
    name: 'Isca de Tilápia',
    categoryId: 'do-mar-pro-bar',
    categoryName: 'Do Mar pro Bar',
    description: 'Empanada e dourada na medida, com crocância perfeita.',
    price: 69.90,
    badge: 'Crocância Perfeita'
  },
  {
    id: 'mb-4',
    name: 'Camarão Empanado',
    categoryId: 'do-mar-pro-bar',
    categoryName: 'Do Mar pro Bar',
    description: 'Crosta crocante e interior suculento. Petisco fino.',
    price: 92.90,
    badge: 'Petisco Fino'
  },

  // DO SERTÃO E RAIZ
  {
    id: 'sr-1',
    name: 'Isca de Frango à Milanesa',
    categoryId: 'sertao-raiz',
    categoryName: 'Do Sertão e Raiz',
    description: 'Isca de frango coberta por creme quatro queijos e cubos de bacon. A crocância mais pedida da casa.',
    price: 54.90,
    badge: 'Mais Pedido',
  },
  {
    id: 'sr-2',
    name: 'Frango à Passarinho',
    categoryId: 'sertao-raiz',
    categoryName: 'Do Sertão e Raiz',
    description: 'Coxa e sobrecoxa marinadas no tempero da casa, com tomate, pimentão e cebola.',
    price: 49.90,
  },
  {
    id: 'sr-3',
    name: 'Calabêbada',
    categoryId: 'sertao-raiz',
    categoryName: 'Do Sertão e Raiz',
    description: 'Calabresa flambada na cachaça com cebola e especiarias.',
    price: 31.90,
    badge: 'Flambada na Cachaça'
  },
  {
    id: 'sr-4',
    name: 'Filomena (Fígado com Jiló)',
    categoryId: 'sertao-raiz',
    categoryName: 'Do Sertão e Raiz',
    description: 'Prato para quem tem personalidade no paladar. Raiz demais.',
    price: 39.90,
    badge: 'Tradição Pura'
  },
  {
    id: 'sr-5',
    name: 'Queijo Coalho Chapa',
    categoryId: 'sertao-raiz',
    categoryName: 'Do Sertão e Raiz',
    description: 'Queijo coalho finalizado com mel. O equilíbrio que dá água na boca.',
    price: 42.90,
    badge: 'Finalizado com Mel'
  },

  // CHAPAS DO RANCHO
  {
    id: 'ch-payol',
    name: 'Chapa Payol',
    categoryId: 'chapas-rancho',
    categoryName: 'Chapas do Rancho',
    description: 'Picanha suculenta na chapa, batata frita coberta com mussarela derretida e bacon, acompanhada de mandioca e um irresistível creme de quatro queijos. Uma combinação de dar água na boca!',
    price: 149.90,
    servings: 'Serve 2 a 3 pessoas',
    imageUrl: chapaPayolImg,
    badge: 'Carro-Chefe'
  },
  {
    id: 'ch-1',
    name: 'Chapa de Cupim',
    categoryId: 'chapas-rancho',
    categoryName: 'Chapas do Rancho',
    description: 'Tiras de cupim assado lentamente, com mandioca macia, cebola grelhada, mussarela derretida e tomate.',
    price: 144.90,
    servings: 'Serve 2 a 3 pessoas',
    badge: 'Assado Lentamente'
  },
  {
    id: 'ch-2',
    name: 'Contra Filé na Chapa',
    categoryId: 'chapas-rancho',
    categoryName: 'Chapas do Rancho',
    description: 'Tiras de contra filé grill no ponto certo, com mandioca cozida, cebola caramelizada, mussarela e tomate.',
    price: 124.90,
    servings: 'Serve 2 a 3 pessoas',
    badge: 'Destaque',
    imageUrl: carneNaChapaImg
  },
  {
    id: 'ch-3',
    name: 'Carne de Sol na Chapa',
    categoryId: 'chapas-rancho',
    categoryName: 'Chapas do Rancho',
    description: 'Carne de sol macia na manteiga do sertão, com mandioca amanteigada, cebola dourada, queijo derretido e tomate.',
    price: 128.90,
    servings: 'Serve 2 a 3 pessoas',
    badge: 'Manteiga do Sertão',
    imageUrl: chapaImg
  },
  {
    id: 'ch-4',
    name: 'Picanha na Chapa',
    categoryId: 'chapas-rancho',
    categoryName: 'Chapas do Rancho',
    description: 'Tiras nobres de picanha, servidas com mandioca cozida, cebola salteada, mussarela derretida e tomate fresco.',
    price: 149.90,
    servings: 'Serve 2 a 3 pessoas',
    badge: 'Corte Nobre'
  },

  // CARNES NA BRASA (Múltiplos Preços: 2 PESSOAS e 4 PESSOAS)
  {
    id: 'picanha-na-brasa',
    name: 'Picanha na Brasa',
    category: 'carnes-na-brasa',
    categoryId: 'carnes-brasa',
    categoryName: 'Carnes na Brasa',
    description: 'Picanha no ponto ideal, servida com arroz branco soltinho, feijão tropeiro saboroso, mandioca cozida na manteiga do sertão, batata frita crocante, vinagrete caseiro e farofa artesanal.',
    price: 162.00,
    prices: [
      { label: '2 Pessoas', value: 162.00, price: 162.00 },
      { label: '4 Pessoas', value: 289.00, price: 289.00 }
    ],
    notes: 'Acompanha arroz branco soltinho, feijão tropeiro, mandioca cozida na manteiga do sertão, batata frita crocante, vinagrete caseiro e farofa artesanal. Adicional de Aligot por R$ 19,00.',
    servings: '2 ou 4 pessoas',
    badge: 'Picanha Nobre',
    imageUrl: picanhaChapaImg,
    featured: false
  },
  {
    id: 'cupim-grill-na-brasa',
    name: 'Cupim Grill na Brasa',
    category: 'carnes-na-brasa',
    categoryId: 'carnes-brasa',
    categoryName: 'Carnes na Brasa',
    description: 'Cupim assado lentamente, suculento por dentro e dourado por fora. Acompanha arroz branco, feijão tropeiro, mandioca cozida, batata frita, vinagrete e farofa crocante.',
    price: 137.00,
    prices: [
      { label: '2 Pessoas', value: 137.00, price: 137.00 },
      { label: '4 Pessoas', value: 238.00, price: 238.00 }
    ],
    notes: 'Acompanha arroz branco, feijão tropeiro, mandioca cozida, batata frita, vinagrete e farofa crocante. Adicional de Aligot por R$ 19,00.',
    servings: '2 ou 4 pessoas',
    badge: 'Assado Lento',
    featured: false
  },
  {
    id: 'contra-file-na-brasa',
    name: 'Contra Filé na Brasa',
    category: 'carnes-na-brasa',
    categoryId: 'carnes-brasa',
    categoryName: 'Carnes na Brasa',
    description: 'Um dos pratos mais escolhidos pelo churrasco goiano. Contra filé grill grelhado na brasa, com arroz soltinho, feijão tropeiro, mandioca cozida, batata frita, vinagrete fresco e farofa especial.',
    price: 128.00,
    prices: [
      { label: '2 Pessoas', value: 128.00, price: 128.00 },
      { label: '4 Pessoas', value: 227.00, price: 227.00 }
    ],
    notes: 'Acompanha arroz branco, feijão tropeiro, mandioca cozida, batata frita, vinagrete e farofa especial. Adicional de Aligot por R$ 19,00.',
    servings: '2 ou 4 pessoas',
    badge: 'Churrasco Goiano',
    featured: false
  },
  {
    id: 'carne-de-sol-na-brasa',
    name: 'Carne de Sol na Brasa',
    category: 'carnes-na-brasa',
    categoryId: 'carnes-brasa',
    categoryName: 'Carnes na Brasa',
    description: 'Clássica e cheia de personalidade. Carne de sol na manteiga do sertão, acompanhada de arroz branco, feijão tropeiro, mandioca cozida, batata frita, vinagrete e farofa rústica.',
    price: 128.00,
    prices: [
      { label: '2 Pessoas', value: 128.00, price: 128.00 },
      { label: '4 Pessoas', value: 227.00, price: 227.00 }
    ],
    notes: 'Acompanha arroz branco, feijão tropeiro, mandioca cozida, batata frita, vinagrete e farofa rústica. Adicional de Aligot por R$ 19,00.',
    servings: '2 ou 4 pessoas',
    badge: 'Manteiga do Sertão',
    featured: false
  },

  // PANELINHAS E PRATOS
  {
    id: 'pp-1',
    name: 'Panelinha Payol',
    categoryId: 'panelinhas-pratos',
    categoryName: 'Panelinhas e Pratos',
    description: 'Arroz, carne desfiada, frango, bacon, calabresa, azeitona, tomate, palmito, cebola e queijo.',
    price: 99.90,
    servings: 'Serve 2 a 3 pessoas',
    imageUrl: panelinha1Img,
    badge: 'Clássico da Casa'
  },
  {
    id: 'pp-2',
    name: 'Panelinha Caipira',
    categoryId: 'panelinhas-pratos',
    categoryName: 'Panelinhas e Pratos',
    description: 'Arroz, frango com pequi, bacon, azeitona, tomate, cebola e queijo.',
    price: 96.90,
    servings: 'Serve 2 a 3 pessoas',
    imageUrl: panelinha2Img,
    badge: 'Com Pequi'
  },
  {
    id: 'pp-4',
    name: 'Parmegiana de Filé',
    categoryId: 'panelinhas-pratos',
    categoryName: 'Panelinhas e Pratos',
    description: 'Filé à milanesa coberto com molho sugo, mussarela, arroz branco e batata frita.',
    price: 88.90,
    servings: 'Serve 2 pessoas',
    imageUrl: parmegianaFileImg
  },
  {
    id: 'pp-5',
    name: 'Parmegiana de Frango',
    categoryId: 'panelinhas-pratos',
    categoryName: 'Panelinhas e Pratos',
    description: 'Filé de frango à milanesa com molho sugo, queijo derretido, arroz e fritas.',
    price: 78.00,
    servings: 'Serve 2 pessoas',
    imageUrl: parmegianaFrangoImg
  },

  // GUARNIÇÕES
  {
    id: 'gn-1',
    name: 'Arroz Branco',
    categoryId: 'guarnicoes',
    categoryName: 'Guarnições',
    description: 'Arroz branco tradicional cozido soltinho no alho e azeite.',
    price: 20.90,
  },
  {
    id: 'gn-2',
    name: 'Feijão Tropeiro',
    categoryId: 'guarnicoes',
    categoryName: 'Guarnições',
    description: 'Feijão tropeiro autêntico com farinha de milho, couve fininha, ovo, bacon e linguiça.',
    price: 20.90,
    badge: 'Tropeiro Raiz'
  },
  {
    id: 'gn-3',
    name: 'Mandioca Cozida',
    categoryId: 'guarnicoes',
    categoryName: 'Guarnições',
    description: 'Mandioca amarela derretendo de macia, finalizada com manteiga de garrafa.',
    price: 18.90,
  },
  {
    id: 'gn-4',
    name: 'Vinagrete',
    categoryId: 'guarnicoes',
    categoryName: 'Guarnições',
    description: 'Vinagrete fresco picado com tomates maduros, cebola branca, cheiro verde e azeite extravirgem.',
    price: 14.90,
  },
  {
    id: 'gn-5',
    name: 'Farofa',
    categoryId: 'guarnicoes',
    categoryName: 'Guarnições',
    description: 'Farofa crocante dourada na manteiga com cebola e toques de tempero caseiro.',
    price: 9.90,
  },
  {
    id: 'gn-6',
    name: 'Ovo Frito',
    categoryId: 'guarnicoes',
    categoryName: 'Guarnições',
    description: 'Ovo caipira frito na hora com gema mole ou ao ponto de sua preferência.',
    price: 3.00,
  },

  // SOBREMESAS
  {
    id: 'sb-1',
    name: 'Torta Holandesa',
    categoryId: 'sobremesas',
    categoryName: 'Sobremesas',
    description: 'Clássica, cremosa e irresistível. Feita artesanalmente com creme suave e cobertura intensa de chocolate.',
    price: 24.90,
    badge: 'Artesanal'
  },
  {
    id: 'sb-2',
    name: 'Petit Gâteau de Chocolate',
    categoryId: 'sobremesas',
    categoryName: 'Sobremesas',
    description: 'Bolinho quente e macio com recheio cremoso de chocolate, servido com sorvete de creme e calda quente.',
    price: 22.90,
    badge: 'Com Sorvete'
  },
  {
    id: 'sb-3',
    name: 'Brownie com Sorvete',
    categoryId: 'sobremesas',
    categoryName: 'Sobremesas',
    description: 'Brownie denso, molhadinho e chocolatudo, servido com sorvete de creme e calda de chocolate artesanal.',
    price: 23.90,
    imageUrl: brownieImg,
    badge: 'Chocolatudo'
  }
];

/**
 * Retorna os pratos em destaque: inclui automaticamente qualquer item do cardápio
 * que possua foto ou vídeo cadastrado pelo usuário. Utiliza o mesmo cadastro
 * do produto (mesmo ID, nome, preço e descrição), evitando duplicidades.
 */
export const getFeaturedItems = (items: MenuItem[] = MENU_ITEMS): MenuItem[] => {
  const featured = items.filter((item) => Boolean(item.imageUrl || item.videoUrl));

  // Trailing items (últimos lugares do destaque)
  const trailingIds = new Set(['pr-3', 'pr-4']);
  const tail = featured.filter((item) => trailingIds.has(item.id));

  // Itens restantes (excluindo os trailing e a Tilápia Payol para fixar no 4º lugar)
  const tilapia = featured.find((item) => item.id === 'mb-1');
  const mainItems = featured.filter((item) => !trailingIds.has(item.id) && item.id !== 'mb-1');

  // Insere a Tilápia Payol no 4º lugar (índice 3)
  if (tilapia) {
    mainItems.splice(3, 0, tilapia);
  }

  return [...mainItems, ...tail];
};

// Destaques gerados automaticamente a partir de MENU_ITEMS
export const FEATURED_ITEMS: MenuItem[] = getFeaturedItems(MENU_ITEMS);

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
