import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Usuario = sequelize.define(
  "usuario",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    rol: {
      type: Sequelize.TEXT,
    },
    usuario: {
      type: Sequelize.TEXT,
    },
    password: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
    },
    ap_paterno: {
      type: Sequelize.TEXT,
    },
    ap_materno: {
      type: Sequelize.TEXT,
    },
    nombre: {
      type: Sequelize.TEXT,
    },
    fecha_nac: {
      type: Sequelize.DATE,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default Usuario;
