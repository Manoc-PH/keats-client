import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export function ReadCredentials() {
  const db = SQLite.openDatabase(dbName);

  let res;
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM credentials`,
      null,
      (txObj, resultSet) => (res = resultSet.rows._array),
      (txObj, error) => console.log("Error", error)
    );
  });
}
