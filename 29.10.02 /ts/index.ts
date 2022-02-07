import express from 'express';
import { Schema, model, connect } from 'mongoose';
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Timezones by location application is running on port ${port}.`));

