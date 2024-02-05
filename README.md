# Demo

### [Mobile Demo](https://dmifsud.github.io/pf-app/dist) link.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn storybook`

To visualize and test individually built components

### `yarn build`

Builds the app for production to the `build` folder.\

## Summary

Since this was a timeboxed, prototype like approach to translate and show mocked up designs from Figma to a live demo, certain decisions were taken to speed up the process whilst keeping the project scalable for possible future development.

1. `create-react-app` was used to easily build a boilerplate project (TypeScript was added to easily identify any issues that crop up during development)
2. Storybook was added to easily develop and visually test some of the components built prior putting things together.
3. Scss was used for a quick setup and be able to have certain variables set up such as the color palette
4. Since for the purposes of this demo, only one page could be attempted in the appriate time, no routing was added and the main App component was kept quite simple, only rendering a component that shows `ExploreGalleries`
5. Layers were created despite the small scope of the project.
    - Api layer was added to handle api calls and return the appropriate response, including the Type
    - DTOs were added for better use and maintenance of the project
    - An app component layer was added for components that are specific to the project and business scope. The purpose of these components are to gather the required data (in this case fetch from the api layer), and pass it on to the basic UI components (storybook components).

### Issues encountered

Aside from some minor hickups during initial setup of the project, two main issues still remain untackled unfortunately.

-   An issue was noticed later on that when a horizontal scroll is applied to some of the gallery images, the drop shadow of the images was "hidden" due to the overflow applied. An issue like this would need to be discussed to find the most cost effective way of handling it from a project/business/technical and design point of view.
-   A fallback for demonstration purposes was added for the API calls due to CORS.

## Future improvements

If the project were to proceed, these are some of the things that would be needed to improve quality and scalability

1. State management (e.g. Redux)
2. Routing for pages
3. Unit tests for components and services
4. Stricter linting
