/* eslint-disable @typescript-eslint/no-explicit-any */
import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
    try {
        await mongoose.connect(config.databaseURL as string);
        app.listen(config.port, () => {
            console.log(`Example app listening on http://localhost:${config.port}`);
        });
    } catch (error: any) {
        console.log(error);
    }
}

main();
