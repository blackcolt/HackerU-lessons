We gonna build a scrapping app.

The site we gonna scrape.
https://www.amazon.com
https://www.ebay.com

- The app is going to scrape a sites, and add its title to the DB.
  create a model called site

Site

- siteName
- siteUrl


We gonna add to each one of them model, controller, route.

- Build a express server that gets a request in "/site/scrape"
  You gonna pass to this route the site id, and you will add the scrapping logic in the contoller.

you gonna have a diffrent logic to each site, so you will need to add an if in the contoller, check which site it is and react accoudnly.

add a route to get the title and headline for a site (pass a site id and return the headline and title.)


Bonus:
add the scrapper selecor to the DB (in the site) and use it insted of the code.


Good luck.