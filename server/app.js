const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const homeRoutes = require('./routes/home');
const articlesRoutes = require('./routes/articles');
const cardsRoutes = require('./routes/cards');
const slidesRoutes = require('./routes/slides');
const addRoutes = require('./routes/add');


const app = express();

const PORT = process.env.PORT || 8080;

dotenv.config();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('view options', {
	layout: 'main'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', homeRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/cards', cardsRoutes);
app.use('/api/slides', slidesRoutes);
app.use('/api/add', addRoutes);

async function init() {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		app.listen(PORT, () => {
			console.log('Server has been started');
		});
	} catch(e) {
		console.log(e);
	}
}

init();