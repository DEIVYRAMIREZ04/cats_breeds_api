import { webcrypto } from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config({path :"./.env"});

if (!globalThis.crypto) {
  // @ts-ignore
  globalThis.crypto = webcrypto;
}
