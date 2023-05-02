import { productImage } from "../interfaces/product"

// 
const pinatas = [
  {
    'id': 'mariposa',
    'url': 'https://i.ibb.co/HD3yLxK/pinatas-3-mariposa.jpg'
  },
  {
    'id': 'chancla',
    'url': 'https://i.ibb.co/HtJdLpw/pinata-chancla.jpg'
  },
  {
    'id': 'numero 3',
    'url': 'https://i.ibb.co/X5HJCg2/pinata-3.jpg'
  },
  {
    'id': 'batman',
    'url': 'https://i.ibb.co/WWgXYvH/pinata-batman.png'
  },
  {
    'id': 'bts',
    'url': 'https://i.ibb.co/vdqkCnF/pinata-bts.png'
  },
  {
    'id': 'mario',
    'url': 'https://i.ibb.co/92zpZsq/Pi-ata-de-Mario-Bros-n-mero-8.jpg'
  }
]

const gelatinas = [
  {
    'id': 'azul',
    'url': 'https://i.ibb.co/6NFXrb2/gelatina-azul.jpg'
  },
  {
    'id': 'colores',
    'url': 'https://i.ibb.co/VtT5r1L/gelatina-colores.jpg'
  },
  {
    'id': 'cajeta',
    'url': 'https://i.ibb.co/qWGK8GL/gelapaleta.jpg'
  },
  {
    'id': 'stitch',
    'url': 'https://i.ibb.co/qkcMcLY/gelatina-stitch.jpg'
  },
  {
    'id': 'bely beto',
    'url': 'https://i.ibb.co/6ZbnLjz/gelatina-beto.jpg'
  },
  {
    'id': 'bella',
    'url': 'https://i.ibb.co/WG1DBVV/bella.jpg'
  }
]

const reposteria = [
  {
    'id': 'pays',
    'url': 'https://i.ibb.co/dmbRZSc/pays-pinas.jpg'
  },
  {
    'id': 'cupcakes',
    'url': 'https://i.ibb.co/Y749DNj/Imagen-de-Whats-App-2023-04-10-a-las-22-58-32.jpg'
  },
  {
    'id': 'cupcakes 2',
    'url': 'https://i.ibb.co/2qpFj5s/cupcakes.jpg'
  },
  {
    'id': 'bautizo',
    'url': 'https://i.ibb.co/S0jMNBR/bautizo.jpg'
  },
  {
    'id': 'unicornio',
    'url': 'https://i.ibb.co/t4z1wr5/image.jpg'
  },
  {
    'id': 'pastel rosa',
    'url': 'https://i.ibb.co/HVJwBxk/pastel-rosa.jpg'
  }
]

const aleatorios = [
  {
    'id': 'gelatina',
    'url': 'https://i.ibb.co/2ZTdM8n/My-project-1-2.png'
  },
  {
    'id': 'pastel',
    'url': 'https://i.ibb.co/t4z1wr5/image.jpg'
  },
  {
    'id': 'cupcakes',
    'url': 'https://i.ibb.co/2qpFj5s/cupcakes.jpg'
  },
  {
    'id': 'gelapaletas',
    'url': 'https://i.ibb.co/qWGK8GL/gelapaleta.jpg'
  },
  {
    'id': 'mariposa',
    'url': 'https://i.ibb.co/HD3yLxK/pinatas-3-mariposa.jpg'
  },
  {
    'id': 'bautizo',
    'url': 'https://i.ibb.co/S0jMNBR/bautizo.jpg'
  }
]

export const productUrls = (option: number) => {
  switch(option){

    case 1:
      return pinatas
    case 2:
      return gelatinas
    case 3:
      return reposteria

    default:
      return aleatorios

  }
}