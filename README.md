<h1 align="center">My Web Showcase</h1>

<h3 align="center">
  <a href="https://web-showcase-three.vercel.app/">Visit the live app</a>

</h3>

![App screenshot](/public/screenshots/landing.png)
![App screenshot](/public/screenshots/mock_ui_web_light.png)
![App screenshot](/public/screenshots/mock_ui_web_dark.png)

## Features

- Responsive
- Light/Dark Mode
- Dynamic & Data-driven UI. Changeing values will automatically change the UI !
- Written in modern React, only functional components with hooks
- All custom Ui elements
- Simple local React state management, without redux, mobx, or similar

## Setting up development environment 🛠

- Install [nodeJs](https://nodejs.org/en/) if you don't have it already.
- Clone this repository
- `npm run install-dependencies`
- `npm run dev` to start a quick development server
- App should now be running on `http://localhost:8080/`

## What's missing?

There are features missing from this showcase product which should exist in a real product:

### Drawer Nav bar in mobile♿

A lot of care has been taken to make the pages responsive, but the navbar menu currently dissapears in mobile device, which is the expected behaviour. And the next step would be to add a hamburger type buttonon the top right that opens up the nav menu

### Accessibility ♿

Not all components have properly defined [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), visual focus indicators etc. Most early stage companies tend to ignore this aspect of their product but in many cases they shouldn't, especially once their userbase starts growing.

### Unit/Integration tests 🧪

Both Client and API are currently tested through [end-to-end Cypress tests](https://github.com/oldboyxx/jira_clone/tree/master/client/cypress/integration). That's good enough for a relatively simple application such as this, even if it was a real product. However, as the app grows in complexity, it might be wise to start writing additional unit/integration tests.

## License

[MIT](https://opensource.org/licenses/MIT)

<hr>

<h3 align="center">
  <a href="https://web-showcase-three.vercel.app/">Visit the live app</a> |
</h3>
