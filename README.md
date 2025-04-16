# my-portfolio

Tervetuloa portfoliooni! Tämä projekti on rakennettu Reactilla, ja sen avulla voit tutustua kehittäjän taustaan ja projekteihin, käyttämien teknologioiden tietoihin, kielitaitoon, käyttöjärjestelmiin ja harrastuksiin.

## Sisältö

- [Yleiskuvaus](#yleiskuvaus)
- [Teknologiat](#teknologiat)
- [Projektin rakenne](#projektin-rakenne)
- [Kielituki](#kielituki)
- [Asennus ja käyttö](#asennus-ja-käyttö)
- [Huomautukset ja lisätiedot](#huomautukset-ja-lisätiedot)

## Yleiskuvaus

Tämä projekti on yksinkertainen React-pohjainen portfolio, jossa esitellään kehittäjän osaamista ja kiinnostuksen kohteita. Sovelluksessa käytetään kielitukea, jonka avulla käyttäjät voivat valita haluamansa kielen (suomi ja englanti).

## Teknologiat

Tässä projektissa käytetyt teknologiat ovat:

- **React/Vite** – pääkehys käyttöliittymän rakentamiseen
- **React Router** – sivujen navigointiin
- **Context API** – kielitukeen
- **JSON** – käännöstiedostojen hallintaan
- **CSS** – tyylittelyyn (Reactin kanssa)

## Projektin rakenne

Projektin rakenne on seuraava:


### Tärkeimmät komponentit:

- **Home.jsx**: Etusivu, joka esittelee tervetulotekstin ja lyhyen esittelyn.
- **About.jsx**: Tietoja minusta -sivu, jossa on listattu käyttäjän teknologiat, kielet, käyttöjärjestelmät, harrastukset ja koulutus.
- **LanguageContext.js**: Context API, joka hallitsee valittua kieltä ja mahdollistaa käännösten vaihtamisen.
- **language.json**: JSON-tiedosto, jossa on käännökset eri kielille (suomi ja englanti).

## Kielituki

Kielituki on toteutettu käyttäen Reactin **Context API**:ta ja käännöstiedostoa (**language.json**). Käyttäjä voi valita kielen, ja sovellus päivittää käännökset automaattisesti.

### **language.json** rakenne:

```json
{
  "en": {
    "about": {
      "title": "About Me",
      "description": "I'm a passionate developer with a love for both front-end and back-end technologies...",
      ...
    }
  },
  "fi": {
    "about": {
      "title": "Tietoja minusta",
      "description": "Olen intohimoinen kehittäjä, jolla on rakkaus sekä etu- että taustakehitysteknologioihin...",
      ...
    }
  }
}
```

## Asennus ja käyttö

1. Kloonaa projekti:

```bash 
git clone https://github.com/iirovalimaa/my-portfolio.git
cd my-portfolio
```

2. Asenna riippuvuudet:

```bash 
npm install
```

3. Käynnistä sovellus:

```bash 
npm start
```

4. Avaa selaimessa http://localhost:5173 nähdäksesi sovelluksen.