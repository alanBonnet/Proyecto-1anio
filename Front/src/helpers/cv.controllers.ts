import { Dispatch, MutableRefObject, SetStateAction } from "react";
const guardarArchivo = (archivoRecibido: Blob | any | MutableRefObject<undefined>, contador: number, modificadorContador: Dispatch<SetStateAction<number>>, modificadorLinkSubida: Dispatch<SetStateAction<any>>) => {
    var file = archivoRecibido //the file
    var reader = new FileReader() //this for convert to Base64 
    reader.readAsDataURL(archivoRecibido) //start conversion...
    reader.onload = function (e) { //.. once finished..

        var rawLog = (typeof reader.result === "string") ? reader.result.split(',')[1] : ""; //extract only thee file data part
        var dataSend = { dataReq: { data: rawLog, name: `(${contador}) ${file.name}`, type: file.type }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
        fetch('https://script.google.com/macros/s/AKfycbzmwwR46dBfcVLjDRPbLTxk7vNyfZUiKTs2YiGENDR4y6xVZX6whYmp97wQCk_svX_cxw/exec', //your AppsScript URL
            { method: "POST", body: JSON.stringify(dataSend) }) //send to Api
            .then(res => res.json()).then((a) => {
                modificadorLinkSubida(a)
                // console.log(a) //See response
            }).catch(e => console.log(e)) // Or Error in console
    }
    modificadorContador(contador + 1)
}
const convertirPDF2TEXT = async (archivoRecibido: Blob | any | MutableRefObject<undefined>,modificarTexto: Dispatch<SetStateAction<String>>):Promise<any> => {
    try {
        const formData = new FormData();
        formData.append("pdfFile", archivoRecibido);
        const respuesta = await fetch("http://localhost:3000/extract-text", {
            method: "post",
            body: formData
        })
        const respuestaText = await respuesta.json();
        let resultTexting = respuestaText.text.trim();
        // ETAPAS DE FILTRADO
        let pruebaJSON = JSON.stringify(((resultTexting).split("\n").join()))
        pruebaJSON = await pruebaJSON.replace(/\,/,(e)=>" ")
        pruebaJSON = await pruebaJSON.replace(/\,,/g, e => ", ")
        pruebaJSON = await pruebaJSON.replace(/\, , ,/g, e => "")
        pruebaJSON = await pruebaJSON.replace(/\,PERFIL,/, " ")
        pruebaJSON = await pruebaJSON.replace(/\,EXPERIENCIA,/, "\",\"")
        pruebaJSON = await pruebaJSON.replace(/\,EDUCACIÓN,/, "\",\"")
        pruebaJSON = await pruebaJSON.replace(/\,CONTACTO,/, "\",\"")
        pruebaJSON = await pruebaJSON.replace(/\,HABILIDADES,/, "\",\"")
        pruebaJSON = await pruebaJSON.replace(/\LENGUAJES,/, "\",\"")
        pruebaJSON = await pruebaJSON.replace(/\Tel:/,"")
        pruebaJSON = await pruebaJSON.replace(/\Mail:/,"\",\"")
        pruebaJSON = await pruebaJSON.replace(/\Dirección:/,"\",\"")
        pruebaJSON = await pruebaJSON.replace(/\,/, "\",\"")
        pruebaJSON = await pruebaJSON.replace(/\, ,/g, e => "")
        // SALIDA LUEGO DE LA FILTRACIÓN
        modificarTexto(pruebaJSON)
        console.log(pruebaJSON)
        return pruebaJSON
    } catch (error) {
        return error
    }
}

const diccionarioCV = {
    "guardar archivo": guardarArchivo, //
    "convertir PDF a Texto": convertirPDF2TEXT
}
export default diccionarioCV