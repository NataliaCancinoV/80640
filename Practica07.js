const formulario = document.getElementById("formulario")
    const miFieldSet = (legend, txt1, txt2) => {
        return `
        <fieldset>
            <legend>${legend} </legend>
            <label for=${txt1}">${txt1}:</label>
            <input type="text" id=${txt1}>
            <label for=${txt2}>${txt2}</label>
            <input type="text" id=${txt2}>
        </fieldset>
        `
    }
formulario.innerHTML = miFieldSet("Info Personal","Nombre","Correo")
formulario.innerHTML += miFieldSet("Info Direccion","Direccion","Ciudad")
