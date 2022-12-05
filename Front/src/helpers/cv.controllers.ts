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
const convertirPDF2TEXT = async (archivoRecibido: Blob | any | MutableRefObject<undefined>,modificarTexto: Dispatch<SetStateAction<String>>) => {
    try {
        const formData = new FormData();
        formData.append("pdfFile", archivoRecibido);
        const respuesta = await fetch("http://localhost:3000/extract-text", {
            method: "post",
            body: formData
        })
        const respuestaText = await respuesta.json();
        let resultTexting = respuestaText.text.trim();
        let pruebaJSON = JSON.stringify(((resultTexting).split("\n").join()))
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