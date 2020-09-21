import { config } from "dotenv";
config();

import hello_world from "./bot/hello_world";

// imagine using require() in 2020
const { Client } = require('discord.js');

const client = new Client();

hello_world(client);

client.login(process.env.BOT_TOKEN);