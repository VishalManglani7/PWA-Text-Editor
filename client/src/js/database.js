import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
//create connenction to db
const jateDb = await openDB('jate', 1);
//creates a new tx which is read/write
const tx = jateDb.transaction('jate', 'readwrite');
//open objectstore
const store = tx.objectStore('jate');
//get all data from db
const request = store.put({ id: 1, value: content });
//confirm request
const result = await request;
console.log (result.value)};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // console.error('getDb not implemented');
const jateDb = await openDB('jate', 1);
const tx = jateDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const request = store.getAll();
const result = await request;
console.log(result);
return result?.value;
};
initdb();
