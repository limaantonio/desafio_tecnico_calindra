<h1 align="center">
  API GEOCODING
</h1>

# Indice

- [Sobre](#-Sobre)
- [Tecnologias Utilizadas](#-tecnologias-Utilizadas)
- [Como baixar o projeto](#-como-baixar-o-projeto)
- [Rotas](#-Rotas)
- [Documentação da API](#-Documentação-da-API)

## 🗒 Sobre

O **API GEOCODING** é uma aplicação back-end que obtém a distância entre endereços
e retorna a menor e maior distância entre esses endereços. A aplicação utiliza
o serviços de geocoding da API Geoapify. Essa aplicação foi desenvolvida para o desafio técnico da **CALINDA**.

---

## 🚀 Tecnologias utilizadas

- [NodeJS](https://nodejs.org/en/')
- [TypeScript](https://www.typescriptlang.org/')
- [Jest](https://jestjs.io/')
- [Express](https://expressjs.com/pt-br/')
- [Geoapify](https://www.geoapify.com/')

## 📦 Como baixar o projeto

- NodeJS v16.14.0

```bash

  #Clonar o repositório
  $git clone https://github.com/limaantonio/desafio_tecnico_calindra

  # Entrar no repositório
  $ cd desafio_tecnico_calindra

  # Instalar as dependencias
  $ yarn ou npm install

  # Inciar o projeto
  $ yarn dev ou npm run dev

    # Executar testes
  $ yarn test ou npm run test

```

## Rotas

```
  Todas as requisições do POST para está API devem ter o cabeçalho Content-Type: application/json.A API contém as seguintes rotas:

  Rotas Address:

  * GET /: info
  * POST /address: recebe uma lista de endereços e retona a distância entre endereços
e retorna a menor e maior distância entre esses endereços.

```

## Exemplo

```
[
    {
        "place_name": "A",
        "street": "Av. Rio Branco",
        "housenumber": 1,
        "postcode": "20090003",
        "city": "Rio de Janeiro",
        "neighborhood": "Centro",
        "state": "RJ",
        "country": "Brasil"
    },
    {
        "place_name": "B",
        "street": "Rua Horacio Fontenele Magalhaes",
        "housenumber": 329,
        "postcode": "62300-000",
        "city": "Viçosa do Ceará",
        "neighborhood": "Northeast",
        "state": "CE",
        "country": "Brasil"
    },
    {
        "place_name": "C",
        "street": "Rua Horacio Fontenele Magalhaes",
        "housenumber": "SN",
        "postcode": "62300-000",
        "city": "Viçosa do Ceará",
        "neighborhood": "Northeast",
        "state": "CE",
        "country": "Brasil"
    },
    {
        "place_name": "D",
        "street": "Rua Horacio Fontenele Magalhaes",
        "housenumber": "SN",
        "postcode": "62300-000",
        "city": "Viçosa do Ceará",
        "neighborhood": "Northeast",
        "state": "CE",
        "country": "Brasil"
    }
]

```

## Retorno

```
{
    "listDistance": [
        {
            "origin": {
                "place_name": "A",
                "street": "Av. Rio Branco",
                "housenumber": 1,
                "postcode": "20090003",
                "city": "Rio de Janeiro",
                "neighborhood": "Centro",
                "state": "RJ",
                "country": "Brasil",
                "lat": -22.89750765,
                "lon": -43.18020490826943
            },
            "destiny": {
                "place_name": "B",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": 329,
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561473,
                "lon": -41.091586
            },
            "distance": 2763.882
        },
        {
            "origin": {
                "place_name": "A",
                "street": "Av. Rio Branco",
                "housenumber": 1,
                "postcode": "20090003",
                "city": "Rio de Janeiro",
                "neighborhood": "Centro",
                "state": "RJ",
                "country": "Brasil",
                "lat": -22.89750765,
                "lon": -43.18020490826943
            },
            "destiny": {
                "place_name": "C",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": "SN",
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561013,
                "lon": -41.090133
            },
            "distance": 2764.052
        },
        {
            "origin": {
                "place_name": "A",
                "street": "Av. Rio Branco",
                "housenumber": 1,
                "postcode": "20090003",
                "city": "Rio de Janeiro",
                "neighborhood": "Centro",
                "state": "RJ",
                "country": "Brasil",
                "lat": -22.89750765,
                "lon": -43.18020490826943
            },
            "destiny": {
                "place_name": "D",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": "SN",
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561013,
                "lon": -41.090133
            },
            "distance": 2764.052
        },
        {
            "origin": {
                "place_name": "B",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": 329,
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561473,
                "lon": -41.091586
            },
            "destiny": {
                "place_name": "C",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": "SN",
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561013,
                "lon": -41.090133
            },
            "distance": 0.169
        },
        {
            "origin": {
                "place_name": "B",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": 329,
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561473,
                "lon": -41.091586
            },
            "destiny": {
                "place_name": "D",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": "SN",
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561013,
                "lon": -41.090133
            },
            "distance": 0.169
        },
        {
            "origin": {
                "place_name": "C",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": "SN",
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561013,
                "lon": -41.090133
            },
            "destiny": {
                "place_name": "D",
                "street": "Rua Horacio Fontenele Magalhaes",
                "housenumber": "SN",
                "postcode": "62300-000",
                "city": "Viçosa do Ceará",
                "neighborhood": "Northeast",
                "state": "CE",
                "country": "Brasil",
                "lat": -3.561013,
                "lon": -41.090133
            },
            "distance": 0
        }
    ],
    "smallerDistance": 0,
    "greaterDistance": 2763.882
}

```

Desenvolvido por Antonio Carlos
