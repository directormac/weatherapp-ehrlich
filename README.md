# React Weather App

[Preview Link](https://weatherapp-ehrlich.mkra.app/)

## Requirements

- [x] a. Anonymous users i.e. users who are not authenticated can view a
      “Hello, World!” landing page with a welcome message and a login
      button.
- [x] b. User cannot access the other pages/screen without first logging in.
- [x] c. User logs in using his or her GitHub credentials.
  - [x] c.1 Integrate Auth0 to facilitate this OAuth2 / OIDC authentication
  - [x] c.2 Auth0 offers a free tier that can be used to support this feature
  - [x] c.3 https://auth0.com/docs/libraries/auth0-react
- [x] d. User views the default Home Screen as defined below
  - [x] d.1. User's name is displayed
  - [x] d.2. User's github page URL is displayed
  - [x] d.3. User has a text field to enter their current city and can click a
        button that causes the weather page/screen to open
- [x] e. The user views the weather in the specified location
  - [x] e.1 City name can be entered and is used to display weather
  - [x] e.2 Choose an existing weather API to use
    - [ ] Weather.com
    - [x] OpenaWeatherApi
          The provided [16 day / daily forecast data](https://openweathermap.org/forecast16)
          isn't available for free tier users,
          used [this](https://openweathermap.org/forecast5) as alternative.
- [ ] f. User can navigate between three pages/screens
  - [x] Landing Screen
  - [x] Home Screen
  - [x] Weather Screen
- [x] g. Navigation can either be side or top bar.
- [x] h. Home and Weather screen are only accessible when logged in. When
      the user logs out again the Landing Screen with the login button is displayed again.

## Development

- Clone the repository

```sh
git clone https://github.com/directormac/weatherapp-ehrlich.git
```

- Go into the directory

```sh
cd weatherapp-ehrlich
```

- Install dependencies

```sh
pnpm install
```

- Auth0 Credentials and openweather API are required

`.env` setup copy the example using the following commands

```
cp .env.example .env
```

- Run the development server

```sh
pnpm dev
```
