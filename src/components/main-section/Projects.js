import React from 'react';

import Project from './Project';

export default function Projects() {
  const projects = [
    {
      name: 'World Legal Summit',
      image: 'worldLegalSummit',
      liveLink: 'https://worldlegalsummit.org',
      githubLink: 'none',
      info:
        'A site built for the World Legal Summit. Check them out and get involved!',
      devIcons: ['wordpress', 'css'],
    },
    {
      name: 'Movie Database',
      image: 'movieDatabase',
      liveLink: 'https://www.chris-movie-database.herokuapp.com',
      githubLink:
        'https://www.github.com/chrisstanarsenault/ChrisReactMovieDatabase',
      info: `A movie listing app built in React pulling top movies using the Movie Database's API, along with each movie's poster and synopsis.
      `,
      devIcons: ['react', 'css', 'node'],
      isDesktopOnly: true,
    },
    {
      name: 'Catch of the Day',
      image: 'catchOfTheDay',
      liveLink: 'https://chris-catch-of-the-day.herokuapp.com',
      githubLink: 'https://www.github.com/chrisstanarsenault/catch-of-the-day',
      info: `A mock restaurant inventory/menu built with React. Change names/images/quantity orders (will throw a banner on an item saying 'Sold Out' if quantity is 0 or below).`,
      devIcons: ['react', 'css', 'node'],
      isDesktopOnly: true,
    },
    {
      name: 'Chatty App',
      image: 'chattyApp',
      liveLink: 'none',
      githubLink: 'https://www.github.com/chrisstanarsenault/chatty-app',
      info: `A simple single page real-time chat app built with React and Websockets.`,
      devIcons: ['react', 'css', 'node'],
    },
    {
      name: 'Hookeai Poke',
      image: 'hookeaiPoke',
      liveLink: 'none',
      githubLink: 'https://www.github.com/chrisstanarsenault/hookeai-poke',
      info: `Hungry clients of Hookeai Poke can visit this website, select one or more dishes and place an order for pick-up based around the idea of the app Ritual.`,
      devIcons: ['javascript', 'css', 'node', 'postgresql'],
    },
    {
      name: 'Tweeter',
      image: 'tweeter',
      liveLink: 'https://tweeter-project-v3.herokuapp.com',
      githubLink: 'https://www.github.com/chrisstanarsenault/tweeterv3',
      info: `A simple, single-page, not as attractive Twitter clone made up to build up and practice my front-end skills with HTML, CSS, JS, jQuery and AJAX, as well as my backend-skills using Node and Express.`,
      devIcons: ['javascript', 'css', 'node'],
    },
    {
      name: 'Go Shorty',
      image: 'goShorty',
      liveLink: 'https://go-shorty-app.herokuapp.com',
      githubLink: 'https://www.github.com/chrisstanarsenault/GoShorty',
      info: `A simple, single-page, not as attractive Twitter clone made up to build up and practice my front-end skills with HTML, CSS, JS, jQuery and AJAX, as well as my backend-skills using Node and Express.`,
      devIcons: ['javascript', 'css', 'node'],
    },
  ];

  return (
    <div id="projects">
      <h2> Projects </h2>{' '}
      <p> Take a look through some of the projects I have done </p>{' '}
      <Project projects={projects} />{' '}
    </div>
  );
}
