  var email = document.getElementById("correo_docente").value;
    var formato = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var v_email = formato.test(email);
    if (v_email != true || email == "") {
      $("#correo_docente").focus();
      alertify.set("notifier", "position", "top-right");
      alertify.error("Correo electronico");
      return false;
    }

    return true;
