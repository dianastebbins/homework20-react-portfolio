# homework20-react-portfolio

## Project Description
```
Move Portfolio project to React!
```

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Badges](#badges)
6. [Contributing](#contributing)
7. [Tests](#tests)
8. [Notes](#notes)

## Installation
```
url to deployed app:
```
https://whispering-savannah-42577.herokuapp.com/

## Usage
```
Click on the link provided in the Installation section, above.
```
* Navbar navigation pages
    * About/Bio
    * Portfolio
    * Contact
* Meet Diana Page
    * Bio area
    * Technical Skills
    * Professional Skills
* Contact Page
    * Form exists, but nodemailer not applied.
* Portfolio Page
    * Featured Projects
    * Little Widgets
    * Includes links to deployed applications as well as their github repositories
* Footer with links
    * LinkedIn
    * GitHub
    * Resume

## Credits
*Requirements copied from provided Homework files of Full Stack Coding Bootcamp.
*[Bootstrap](https://getbootstrap.com/docs/4.0/components/)
*Icons from [font awesome](https://fontawesome.com)

## License
```
```

## Badges
```
```

## Contributing
```
```

## Tests
```
```

## Notes
#### General Notes
* Navbar obtained from bootstrap site and has working links to other pages. Chose to use justify-content-end to right-align the links but that causes problems with centering the links on a small screen.
* Tried for the sticky footer but could not get it to stick to the bottom of the page. Left it active on Contact page, but commented it out on About Me and Portfolio pages as it was distracting.

#### Page specific: About Me 
* ContentSection uses a float on the image to get the following paragraph to wrap around the side and bottom of the image (when enough text exists)

#### Page specific: Contact
* Form obtained from bootstrap site.

#### Page specific: Portfolio
* Card obtained from bootstrap site. Tried to make the h5/card-title overlay object stretch across the image and show at the bottom but was not successful.