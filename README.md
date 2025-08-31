# Fullstack 2 - Movie Assignment
## App Name - MediaQuest

This media app allows users to search a variety of different movies and tv shows. They can add them to their favourites, see upcoming and top rated releases and even leave reviews.

### Implemented Features

The movie features were implemented as part of my earlier college learning, so I will not be going into detail on those in this ReadMe. I will be focusing on the new features I implemented to enhance this app experience.

### TV Show Discovery
  - **List View for TV Shows:** A dedicated page for browsing TV shows. Showcases series as a card which shows a promotional image of the series, date it was first aired, and average rating. They also have an interactive favourites icon and a button that directs to a more info page about the series. Uses TMDB's TV api information and details in order to generate the contents of the page.
  - **Detail View for TV Shows:** This is where the 'More Info' button directs the user when selected from the show card. It contains more detailed information about the show, including an overview of the show, its genres, number of seasons and episodes, and if it is a completed or returning show. 
  - **Top Rated View for TV Shows:** This functions similarly to the list view of shows. It showcases the same kind of show card used in the basic list view, the main difference is that it uses a different api url which ensures that the order the shows appear is based on their rating, rather than the generic order in the main view.

### Pagination
Pagination has been added to all views (ie movies & tv shows). This allows the user to see multiple pages of information, therefore allowing them to scroll through more options. For more information on pagination, please check out [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries?from=reactQueryV3). 

I also included an auto-reset to page 1 when filters are used. Currently, this only works for the discover movies view, as I have not implemented filters in additional views. Pagination has been added to the following views:
  - TV Discovery Page
  - Top Rated TV Shows Page
  - Upcoming Movies Page
  - Movies Home Page

### Favourites
Add and Remove Favourites has been added to TV Show views. This functions in an identical manner to movies - when users select an option as their favourite it appears as a red heart icon on the top of the card. Their favourites are also stored in a seperate page where they can look at all their TV favourites in one place. In the favourites page, users can remove favourites, so it will no longer show on that page. I created seperate pages for Move and TV Show favourites for easier navigation.

### Navigation
I also updated the menu to include sub-menus for movies and tv shows. This is just to ensure easy navigation for users and that there is a clear disctiction between the movie pages versus the tv pages.

### Deployment
This app is also currently deployed using [Vercel](https://vercel.com). You can checkout this app here - [MediaQuest App](https://fullstack2-movie-assignment.vercel.app/) 

## Getting Started
If you would like to play around with this app, please feel free to clone this repository and test it out. Just remember that the access the full details, when testing out this app you will need an API Key for [TMDB](https://www.themoviedb.org/). When you sign up for an API key here you will be able to add additional views such as showcasing Actors or Networks.

### Basic Start Up
1. Clone the repository
   `git clone https://github.com/OpinionatedHeron/Fullstack2-MovieAssignment.git`
2. Install dependencies
   `npm install`
3. Start development server (will create a local server)
   `npm run dev`


---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
