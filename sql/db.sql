CREATE TABLE IF NOT EXISTS usuarios(
  id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  rol text NOT NULL CHECK (rol == 'admin' OR rol == 'operador' OR rol == 'cliente'),
  usuario text NOT NULL,
  password text NOT NULL,
  email text NOT NULL,
  ap_paterno text NOT NULL,
  ap_materno text NOT NULL,
  nombre text NOT NULL,
  fecha_nac date NOT NULL,
  created_at date NOT NULL,
  updated_at date NOT NULL
);

INSERT INTO usuarios (rol,usuario,password,email,ap_paterno,ap_materno,nombre,fecha_nac,created_at,updated_at)
  VALUES ('admin','roman','roman28745','maydana','callisaya','1995-03-09','2020-07-17','2020-07-17');