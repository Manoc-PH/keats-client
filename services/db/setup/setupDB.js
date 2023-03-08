import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export default async function SetupDB() {
  const db = SQLite.openDatabase(dbName);

  const myPromise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `
      CREATE TABLE IF NOT EXISTS credentials(
        id uuid primary key,
        username varchar unique NOT NULL,
        name_first varchar,
        name_last varchar,
        phone_number varchar,
        date_updated timestamp,
        date_created timestamp,
        account_type_id uuid NOT NULL,
        account_vitals_id uuid NOT NULL,
        account_profile_id uuid NOT NULL,
        measure_unit_id uuid NOT NULL,
        token varchar NOT NULL)
      `,
        null,
        () => resolve(true)
      );
    });
  });
  const res = await myPromise.then((res) => res).catch((err) => err);
  return res;
}
