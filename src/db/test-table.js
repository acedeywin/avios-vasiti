import pool from "./db-config"

const createTables = `
 CREATE TABLE IF NOT EXISTS product_variant (
    pv_id BIGSERIAL NOT NULL PRIMARY KEY,
    pv_uuid VARCHAR(250) UNIQUE NOT NULL,
    size INT NOT NULL,
    color VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    images VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    date_uploaded TIMESTAMP NOT NULL DEFAULT now(), 
    date_edited TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS product (
    p_id BIGSERIAL NOT NULL PRIMARY KEY,
    p_uuid VARCHAR(250) UNIQUE NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(250) NOT NULL,
    product_varieties VARCHAR(50) NOT NULL,
    variant_id VARCHAR(250) REFERENCES product_variant (pv_uuid),
    date_uploaded TIMESTAMP NOT NULL DEFAULT now(), 
    date_edited TIMESTAMP NOT NULL DEFAULT now()
);

`

export const createDatabaseTables = async () => {
  await pool.query(createTables).then(() => {
    console.log("Tables created successfully")
  })
}
