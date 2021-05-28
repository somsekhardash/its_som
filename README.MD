# Personal Website With a small CMS

[Check out the live working version!](https://somsekhardash.netlify.app/)

This is an app to collect and edit information in run time.

## Development

1. Checkout the repo.
1. `npm install` to install node dependencies.
1. Create some JSON BIN based on your session:
   1. Create `.env` file.
   1. Add all the URL in the `.env` file and with the `SECRET_KEY`.
1. Update the same in the config file

### Create Admin

There is no server side validation is there for the admin.
You can set the username and password in the .env file itself.
The default one is `admin`.

### Create Schmas

In this application we are creating some JSON SCHEMA.
Based on the Schma the FORM will be created.
Schema should follow `ISchema`and examples available in schemas folder.

## Roadmap

### Milestone 1 (Scaffolding)

- [x] [Scaffold React with Webpack] (webpack.common.js/webpack.dev.js/webpack.prod.js)
- [x] [Enable TypeScript] (tsconfig.json)
- [x] Add SCSS support
- [x] Add Basic Route for admin page and webside page

### Milestone 2 (Schema)

- [x] [Create interface for schemas] (src\components\schemas\interfaces.ts)
- [x] [Create schema for different sections] (src\components\schemas\HeaderSchema.tsx)
- [x] [Create HTTP Hook to make ajax call] (src\components\share\UseHttp.tsx)
- [x] [Make call to send and receive section data] (src\components\schemas\HeaderSchema.tsx)

### Milestone 3 (Admin page)

- [x] Create Builder components like input, select, upload compoents
- [x] Create FormBuilder to Set and Update the Form Value
- [x] Create Utility function to update the Form Value (src\components\share\useBuilder.ts)
- [x] Create a DataInjector to translate the Fome data before and after storing it in DB (src\components\share\dataInjector.ts)

### Milestone 4 (Webpage Hardcode)

- [x] Find one good template for the Webpage
- [x] Created Different Sections
- [x] Added Font Icon file to Update the logo icons
- [x] Added MapBox to display current location
- [x] Created dummy login page
- [x] Make description field take in Markdown and render as markdown

### Milestone 5 (Website Dynamic)

- [x] Make API call and render all the Sections
- [x] Create and add NOT FOUND Page
- [x] Add Font and icon packages
- [x] Add Resume Download Function
- [ ] Create Dynamic Login Flow
- [ ] Remove Sensitive information from GIT
- [ ] Make Skills Page Dynamic

### PWA

- [x] Add Workbox setup in webpack
- [x] Add Helmet to set site header
- [x] Create Manifest JSON
- [x] Webworker file support added

### Improvements

- [x] Add `dotenv-webpack` support to provide `.env` support/ remove data from config file
- [x] Add Tooltip function on Icons
