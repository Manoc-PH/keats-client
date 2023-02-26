import { dbName } from "@app/common/constants/db";
import * as SQLite from "expo-sqlite";

export function SetupDB() {
  const db = SQLite.openDatabase(dbName);

  db.transaction((tx) => {
    tx.executeSql(`
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
		`);
  });
  // db.transaction((tx) => {
  //   tx.executeSql(
  //     `INSERT INTO credentials (
  // 			id,
  // 			username,
  // 			account_type_id,
  // 			account_vitals_id,
  // 			account_profile_id,
  // 			measure_unit_id,
  // 			token) values (?, ?, ?, ?, ?, ?, ?)`,
  //     [
  //       "49c8310d-fa81-4252-a913-9265b1d86747",
  //       "labadcloyd",
  //       "49c8310d-fa81-4252-a913-9265b1d86747",
  //       "49c8310d-fa81-4252-a913-9265b1d86747",
  //       "49c8310d-fa81-4252-a913-9265b1d86747",
  //       "49c8310d-fa81-4252-a913-9265b1d86747",
  //       "49c8310d-fa81-4252-a913-9265b1d86747",
  //     ],
  //     (txObj, resultSet) => console.log(resultSet),
  //     (txObj, error) => console.log("Error", error)
  //   );
  // });
}
