import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const file = path.resolve(__dirname, '../../data/users.json');
const adapter = new JSONFile(file);
const db = new Low(adapter, { users: [] });

export const loadDB = async () => {
    await db.read();
};

export const getDB = () => db;
