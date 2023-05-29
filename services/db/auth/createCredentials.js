import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export default async function CreateCredentials({
  id,
  username,
  account_type_id,
  token,
}) {
  const db = SQLite.openDatabase(dbName);

  const myPromise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO credentials (
  			id,
  			username, 
  			account_type_id, 
  			token) values (?, ?, ?, ?)`,
        [id, username, account_type_id, token],
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
