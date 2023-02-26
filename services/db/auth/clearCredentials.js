import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export function ClearCredentials() {
  const db = SQLite.openDatabase(dbName);

  let res;
  db.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM credentials",
      null,
      (txObj, resultSet) => (res = resultSet.rows._array)
    );
  });
}
