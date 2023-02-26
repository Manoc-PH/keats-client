import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export function InsertCredentials({
  id,
  username,
  name_first,
  name_last,
  phone_number,
  account_type_id,
  account_vitals_id,
  account_profile_id,
  measure_unit_id,
  token,
}) {
  const db = SQLite.openDatabase(dbName);

  let res;
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO credentials (
  			id,
  			username,
        name_first,
        name_last,
        phone_number,
  			account_type_id,
  			account_vitals_id,
  			account_profile_id,
  			measure_unit_id,
  			token) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        username,
        name_first || "",
        name_last || "",
        phone_number || "",
        account_type_id,
        account_vitals_id,
        account_profile_id,
        measure_unit_id,
        token,
      ],
      (txObj, resultSet) => (res = resultSet.rows._array),
      (txObj, error) => console.log("Error", error)
    );
  });
}
