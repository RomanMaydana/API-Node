import Usuario from "../model/Usuario";
import { Op, DATE } from "sequelize";

export async function getUsuarios(req, res) {
  try {
    const { fields, nombre, order, offset, limit } = req.headers;
    const usuarios = await Usuario.findAll(
      fields
        ? {
            attributes: fields.split(","),
          }
        : nombre
        ? {
            where: {
              nombre: {
                [Op.like]: `%${nombre}%`,
              },
            },
          }
        : order
        ? {
            order: [[order, "DESC"]],
          }
        : offset && limit
        ? {
            offset,
            limit,
          }
        : {}
    );

    res.json({
      api_name: process.argv[3],
      data: usuarios,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      api_name: process.argv[3],
      message: "No se pudo obtener datos",
    });
  }
}

export async function creaUsuarios(req, res) {
  try {
    const {
      rol,
      usuario,
      password,
      email,
      ap_paterno,
      ap_materno,
      nombre,
      fecha_nac,
    } = req.body;
    const date = new Date();
    const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    const newUsuario = await Usuario.create(
      {
        rol,
        usuario,
        password,
        email,
        ap_paterno,
        ap_materno,
        nombre,
        fecha_nac,
        created_at: dateString,
        updated_at: dateString,
      },
      {
        fields: [
          "rol",
          "usuario",
          "password",
          "email",
          "ap_paterno",
          "ap_materno",
          "nombre",
          "fecha_nac",
          "created_at",
          "updated_at",
        ],
      }
    );

    res.json({
      api_name: process.argv[3],
      message: "Nuevo usuario creado",
      data: newUsuario,
    });
  } catch (error) {
    res.status(500).json({
      api_name: process.argv[3],
      message: "No se pudo crear Usuario",
    });
  }
}

export async function updateUsuario(req, res) {
  const {
    rol,
    usuario,
    password,
    email,
    ap_paterno,
    ap_materno,
    nombre,
    fecha_nac,
  } = req.body;
  try {
    const { id } = req.params;

    const [rowUpdate, [updateUsuario]] = await Usuario.update(
      {
        rol,
        usuario,
        password,
        email,
        ap_paterno,
        ap_materno,
        nombre,
        fecha_nac,
      },
      {
        returning: true,
        where: {
          id,
        },
      }
    );
    if (updateUsuario) {
      res.json({
        api_name: process.argv[3],
        message: `Usuario ${id} actualizado`,
        updateUsuario,
      });
    } else
      res.json({ api_name: process.argv[3], message: `El usuario no existe` });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      api_name: process.argv[3],
      message: `Ocurrio un error al actualizar`,
    });
  }
}

export async function deleteUsuario(req, res) {
  try {
    const { id } = req.params;
    const deleteUsuario = await Usuario.destroy({
      where: {
        id,
      },
    });
    if (deleteUsuario > 0) {
      res.json({
        api_name: process.argv[3],
        message: `Usuario ${id} eliminado `,
      });
    } else {
      res.json({
        api_name: process.argv[3],
        message: `Usuario no existe `,
      });
    }
  } catch (error) {
    res.status(500).json({
      api_name: process.argv[3],
      message: `Ocurrio un problema al eliminar `,
    });
  }
}
