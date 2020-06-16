export default {
  NAVIGATION: {
    LOGIN: 'login',
    CONFIGURATION: 'configuracion',
    USERS: {
      ROOT: 'usuarios',
      NEW: 'nuevo',
      EDIT: 'editar',
      LOG_OUT: 'cerrarSesion'
    },
    BACK_TO: 'volver al',
    FORGOTTEN_PASSWORD: {
      USERNAME: 'recuperarContraseñaNombreUsuario',
      SENT_MAIL: 'recuperarContraseñaEmailEnviado',
      NEW_PASSWORD: 'nuevaContraseña',
      SUCCESS: 'cambioDeContraseñaExitoso'
    }
  },
  LOGIN: {
    PASSWORD: "contraseña",
    USERNAME: "usuario",
    FORGOT_PASSWORD: "¿Has olvidado tu contraseña?",
    LOGIN: "ingresar",
  },
  RECOVER_PASSWORD: {
    STEP_01_TITLE: "recuperar contraseña",
    STEP_01_HINT:
      "ingrese su usuario y le enviaremos por correo las instrucciones para recuperar su contraseña.",
    SETP_01_INPUT: "ingrese su",
    STEP_02_BOLD_HINT:
      "¡Se ha enviado un correo a su casilla con las instrucciones para recuperar su contraseña!",
    STEP_02_HINT:
      "Si desea cambiar su e-mail, por favor comuníquese  con su administrador.",
    STEP_03_HINT:
      "para reestablecer su contraseña, ingrese una nueva y vuelva a repetir la misma.",
    STEP_03_PASSWORD_HINT:
      "la contraseña debe contener, al menos 8 cáracteres,  un número y una letra mayúscula.",
    SUCCESSFULL_CHANGE: "¡Su contraseña se ha cambiado correctamente!",
  },
  ERRORS: {
    DEFAULT_ERROR: "hubo un problema",
    LOGIN_NO_USERNAME: "usuario requerido",
    LOGIN_NO_PASSWORD: "contraseña requerida",
    LOGIN_NO_FIELDS: "complete los campos",
    LOGIN_NOT_POSSIBLE: "no fue posible iniciar sesión",
    NO_FIELD: "complete el campo",
    NO_USER: "el usuario no existe o esta deshabilitado.",
    CONTACT_ADMIN: "por favor, comuníquese con su administrador.",
    TRY_AGAIN: "por favor, vuelva a intentarlo.",
    PASSWORD_DOESNT_MATCH: "¡Las contraseñas son incorrectas!",
    PASSWORD_DOESNT_MATCH_REQUIREMENTS:
      "¡Las contraseñas no cumplen requisitos!",
    ERROR_FILTER_DOWNLOAD: "no se pudo efectuar la descarga",
  },
};
