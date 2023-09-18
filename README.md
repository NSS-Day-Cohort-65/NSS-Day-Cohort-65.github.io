# Class Website V2

## Steps for making changes to colors or fonts
_Please do not make other changes_
* All work should be branched off of the `develop` branch, **DO NOT** change the main branch 
* To update the colors: open the `src/index.scss` file and update the color variables on lines 1-9
* Add the google font link in the `public/index.html` on line 14
* Back in the `src/index.scss` file, update the `$family-secondary` and `$family-primary` variables. Primary is for titles, buttons, and links. Secondary is for blocks of text.
* Once you've added and committed those changes, merge your branch into the `develop` branch
* To deploy changes: run `npm run deploy`
