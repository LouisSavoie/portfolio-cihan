# React Portfolio Template - Cihan

Cihan is an easily customizable portfolio website template.

__Tech__:

- React
- react-router
- react-bootstrap
- SASS
- jest
- @testing-library/react
- ESLint

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

__Pages__:

- Info(Home): personal info, profiles/contact/resume links
- Projects: project info and demo/repo links
- Blog: displays last 10 medium blog posts as blurbs and links

## Customize

1. Replace placeholder images in public/img

2. Replace placeholder info in public/info.json, noting image names for projects from step 1

3. Replace placeholder info sections in head of public/index.html: SEO, Open Graph, Twitter Card

4. Replace placeholder info in public/manifest.json: short_name, name

5. Customize color and font variables at the top of src/App.scss

6. Add domain name to public/CNAME file

Test by running `npm run lint`, then `npm run test` then press 'q', if everything was green run `npm start` to see how it looks, and if it looks good run `npm run build` then deploy the generated files in the build folder.
