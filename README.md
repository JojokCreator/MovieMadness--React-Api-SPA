# React-athon

Movie Madness - a one day React app built in our week 8 hackathon at school of code. We chose the OMDB movie API to fetch from in our React.JS app. 

## Styled with Tailwind

Check out a live [version here](https://react-moviemadness.netlify.app/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Requirements
You need to create an .env file and add an API key from the OMDB site under the name REACT_APP_APIKEY

## Features
<ul>
<li>React.JS front end that fetches data from a movie api</li>
<li>Most likely result is displayed with additional attributes</li>
<li>New ten best search results are displayed below in smaller cards</li>
</ul>

Once loaded just type in a movie, series or video game.

## What I learned
- **Conditional Rendering**
We had a major blocker which was the fetch request took a few seconds to get the data inside the useEffect. This resulted in the data being undefined initially and the react app wasn't able to render it and threw and error. We solved this by using `movie &&` before mapping the data which caused the function to only happen once the data had been loaded.

- **Tailwind CSS**
As this was our first time using Tailwind we struggled initially but soon started to enjoy using it. We realised that the Tailwind intellisense is a great help and like the way you could add in your own variables values using [20px] for example. I also liked using the @apply directive to move bigger components into the index.css file.


