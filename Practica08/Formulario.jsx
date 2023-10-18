//import MiFieldSet from "./src/MiFIeldSet"
import DatosPersonales from "./DatosPersonales"
import DatosEscolares from "./src/DatosEscolares"

function Formulario() {
    return(
        <>
            <form action="">
                {/*<MiFieldSet titulo="Datos Personales" txt1="Nombre" txt2=" Password" />
                <MiFieldSet titulo="Datos Escolares" txt1="Carrera" txt2=" Semestre" />
                */}
                <DatosPersonales></DatosPersonales>
                <DatosEscolares></DatosEscolares>
                <input type="submit" value="Enviar Datos" />
            </form>
        </>
    )
}
export default Formulario