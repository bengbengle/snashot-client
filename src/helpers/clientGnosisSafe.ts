import Client from '@snapshot-labs/snapshot.js/src/client';


// @ts-ignore
const relayerUrl: string = import.meta.env.VITE_RELAYER_URL || 'http://47.57.243.177:3003';
const client = new Client(relayerUrl);

export default client;
