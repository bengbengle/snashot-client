import Client from '@snapshot-labs/snapshot.js/src/sign';

// @ts-ignore
const hubUrl: string = import.meta.env.VITE_HUB_URL || 'http://47.57.243.177:3002';
const client = new Client(hubUrl);

export default client;
