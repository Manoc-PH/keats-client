import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export default async function ReadCredentials() {
  const db = SQLite.openDatabase(dbName);

  const myPromise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM credentials`,
        null,
        (txObj, resultSet) => resolve(resultSet.rows._array),
        (txObj, error) => reject(error)
      );
    });
  });

  const res = await myPromise
    .then((res) => res)
    .catch((err) => console.log(err));
  return res;
}
