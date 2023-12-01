const { MongoClient } = require('mongodb');
import { client } from '../lib/mongo';
import { Repair } from '../lib/typeDefinitions';

export class Repairs {
  DB_NAME: string = 'repairDb';
  client: typeof MongoClient = client;

  #getCollection = async () => {
    await this.client.connect();
    const db = this.client.db(this.DB_NAME);
    const repairs = db.collection('repairs');
    return repairs;
  };

  getAllRepairs = async ():Promise<Repair[]> => {
    const repairs = await this.#getCollection();
    let res = await repairs.find({}).toArray();
    const r:Repair[] = res.map((rep:any)=>{
      const {_id,...rest}=rep;
      return rest;
    })
    return r;
  };

  insertRepair = async(repair:Repair)=>{
    const repairs = await this.#getCollection();
    let res = await repairs.insertOne(repair);
  }
}
