# Genbook test appliacation

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests (@TODO implement tests.)

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


# GENBOOK FRONT-END TEST

Build the UI as represented in the mockups included in the “screenshots” folder.
Included are a ’mobile' view and a 'desktop' view, so please think about responsive design in your solution
as well as cross-browser compatibility for the latest versions of major browsers (Chrome, Firefox and IE).

——

## Feature Requirements:

### Interaction Requirements:
1. In the “Welcome back!” component:
  a. Clicking yes will bring up a form to enter information about the book (Title, Author, etc)
  b. Clicking no will close the component
2. When the form from 1a is submitted, populate a new component for that book, and render it on the page.
  a. Do some simple validation on the content to prevent duplicate entries.

### Optional:
1. Add the ability to add reviews and create a star indicator based on those reviews (1 to 5 scale);
2. Add sorting based on different attributes of the data (e.g., book title)

## Technical Requirements:

1. Create JSON representations of the content.
2. Use JavaScript to create the templates which will provide the markup and populate the content on the page.
3. Identify and use a commonly used breakpoint for your responsive styles.

### Optional:
1. Make your code accessible.

——

## Design notes:
- The 'mobile' view has a menu icon, which when clicked, opens the menu and reveals the 3 menu items.
- The 'desktop' view shows the 3 menu items inline, and the menu icon is not needed.

We've attached the icons in the navigation bar for you to save you time, so do whatever you wish with them.

Font used: http://www.google.com/fonts#UsePlace:use/Collection:Roboto

——

## Implementation guide:
We want to see how you structure and write your code, specifically at how you can
create re-usable components. We're not as interested in seeing a pixel-perfect test
visually, so don't stress over having every pixel in the png's line up (We're not
expecting you to dissect the exact drop-shadows used by eye for example, a similar
one will suffice).

Don’t worry about persistence of data entered from the form above.

Any framework or library is allowed, but consider site speed implications when doing so.

Please comment your code, specifically around design decisions you’ve made during the course of implementing
your solution.

——


