import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export default async function ClearCredentials() {
  const db = SQLite.openDatabase(dbName);

  const myPromise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM credentials", null, () => resolve(true));
    });
  });
  const res = await myPromise
    .then((res) => res)
    .catch((err) => console.log(err));
  return res;
}
