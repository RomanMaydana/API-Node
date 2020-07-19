import Sequelize from "sequelize";

export const sequelize = new Sequelize("consultorio", "roman", "roman28745", {
  host: "192.168.43.16",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 3000,
    idle: 10000,
  },
  logging: false,
});

const sync_db = process.env.SYNC_DB || false;

if (sync_db) {
  sequelize.sync({ force: true });
}
