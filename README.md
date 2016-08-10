# DevCamp2016-Team3: "A-Team"
**Clichés** is a mobile application that offers exploration missions to photographers. On a map, they are invited to take pictures of various environment items to discover a new place in the world.

![Splash screen](medias/20160809_145214000_iOS.png)
![Ovifat Wellness](medias/20160809_145230000_iOS.png)

## Members
*	David Werbrouck, pixel organizer ([@david_werbrouck](https://twitter.com/david_werbrouck))
*	Sylvain Guerin, byte ruler ([@sguerin_](https://twitter.com/sguerin_))
*	Nicolas Van Eeckhout, business discoverer ([@vaneeckhout](https://twitter.com/vaneeckhout))
*	Fabian Vilers, byte cruncher ([@fvilers](https://twitter.com/fvilers))

## How to run ?
* Start MongoDB
* Start the Back-End server
* Start the Frond-End server
* Open you mobile browser at [http://localhost:3000](http://localhost:3000)

### Back-End
```
cd backend
npm install
npm start
```

### Front-End
```
cd frontend
npm install
git checkout -- app/app.settings.ts
npm start
```

## How to deploy on Heroku ?
```
git remote add heroku-backend https://git.heroku.com/cliches-backend.git
heroku-backend.bat

git remote add heroku-frontend https://git.heroku.com/cliches-frontend.git
heroku-frontend.bat
```
