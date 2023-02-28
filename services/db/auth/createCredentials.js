import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export default async function CreateCredentials({
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

  const myPromise = new Promise((resolve, reject) => {
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
