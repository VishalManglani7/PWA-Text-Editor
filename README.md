# PWA-Text-Editor

## Description

This Text Editor was built to display an understanding of building a single-page app that meets PWA criteria. It has a number of features including data persistence and functioning on and offline.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## Visuals
<img width="1296" alt="Screenshot 2024-01-15 at 11 16 19 PM" src="https://github.com/VishalManglani7/PWA-Text-Editor/assets/139521683/e0117716-3e42-4c4e-9af6-8759c3a13d40">

## License

MIT

## Project Status

This project has been completed and there are no plans to revisit, as of now

https://pwaedit-a43346ec1ec0.herokuapp.com/

https://github.com/VishalManglani7/PWA-Text-Editor
