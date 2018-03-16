# Readme
## The Name of the Game is Lightbox
The Name of the Game is Lightbox is a static site
built with vanilla JS and some newer CSS display properties
like `grid` and `flex`.

When it loads, the site pulls a random page of 16 images from Flickr's API
and displays them as thumbnails. Clicking an image opens it in a lightbox
that's navigable by clicks or keypresses.

The project uses ES6 and SCSS. Webpack bundles it all.
A live version of the site is available
[here](https://whyderrick.github.io/the-name-of-the-game-is-lightbox/).

## Setup
The Name of the Game is Lightbox is a [live
site](https://whyderrick.github.io/the-name-of-the-game-is-lightbox/).
If you wanted to play around and try to break it,
you'd need to run `npm install` or `yarn install`. After you make your changes,
run the build script with `npm build` or `yarn build`
to have Webpack repackage your changes.

## Decisions
This app doesn't have tests. I wanted to build it quickly
and I intentionally kept the Javascript simple.
The Lightbox exists as its own class/module,
because all of its logic can be encapsulated separately. It's
interface is fairly simple and consistent.
I stopped shy making it a full plugin that inserts its own HTML, for scope.
(The world really does need a [unifying lightbox
standard](https://xkcd.com/927/) though.)

p.s. The project name is an homage to [J.
Dilla](https://www.youtube.com/watch?v=tMj0sDr_rJE).
