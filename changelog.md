create package.json in main folder using npm init

create server.js
    - install dependencies
        - express dotenv nodemon
            - require express and dotenv
            - link dotenv.config({ path: './config/config.env' });
            - initialize express() app;  const app = express()
            - PORT variable; const PORT = process.env.PORT || 5000;
            - call listen; app.listen(PORT, console.log(listening on PORT))

create config folder
    - create config.env file

execute app
    - npm run dev ( for development mode )
    - npm start ( production mode )
