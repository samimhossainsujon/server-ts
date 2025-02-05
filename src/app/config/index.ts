import dontenv from 'dotenv';
import path from 'path';

dontenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT || 5000,
  databaseURL: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS
};
