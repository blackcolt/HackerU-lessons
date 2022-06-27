- In the record-tower DB on the sales collection add

* 20 objects with dates (randm dates from 2000 - 2020)
* Find all the sales that happend between 2010-2015
* Find all the sales that happend between 2012-2013
* Find all the sales that happend in the last year, suupose to be relevent no metter when you run it (a year back whenever you run it).

- Clients

* Add to all the clients birthdate (random birthdates) (update the data you have)
* Get all the clients that have birthday today (get today date and then find the clients with this date) (hard - break your head, search google, ask grandma).

<!-- ONE -->

rndDate = 1000 _ 1060 _ 3560 _ 90;var randomDate = function () { return new Date(Date.now() - (Math.floor(Math.random() _ rndDate)))}
for(var i=0;i<20;i++){ db.Sales.insert({date:randomDate()})}

<!-- Two -->

db.Sales.find({ date:{ $gt:ISODate('2010-03-15T21:07:48.000Z'), $lt:ISODate('2015-03-15T21:50:48.000Z') }})

<!-- Three -->

db.Sales.find({ date:{ $gt:ISODate('2012-03-15T21:07:48.000Z'), $lt:ISODate('2013-03-15T21:50:48.000Z') }})

<!-- four -->

db.Sales.find({ date:{ $gt:ISODate('2019-03-15T21:07:48.000Z'), $lt:ISODate('2020-03-15T21:50:48.000Z') }})

<!-- five -->
