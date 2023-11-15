# Context API Example

This repo contains a simple example of Context API usage

## Set up

- Fork and clone this repo
- Run `npm ci` to install dependencies
- `npm run dev` to run the app

## Instructions
The `main` branch shows the completed Context-based approach.

Checkout the `start` branch which begins with the prop-drilling based approach, and work from there.

### Part 1
- Replace prop drilling with Context API
- Do this for all components

### Part 2
- Implement local storage in CreatePost so that WIP posts are not lost on page refresh
  - On first load, check if local storage has any data to initialise the state value
  - On input/textarea change, `setPost` AND set/update local storage
  - On form submit, `setPosts` AND clear local storage
