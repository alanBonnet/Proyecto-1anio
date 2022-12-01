import React from "react"
const existError = (error:any, comparer?:string):JSX.Element => {
    if(error){
        return (<div className="row">
        {(typeof error== "string") && <p className="alert alert-danger my-1 mx-1 text-center p-1 col text-white">
                    {`${error}`}
                </p>}
        {(typeof error == "object")&&error?.map((errors:any, index:number) => {
            if (errors.param == comparer) {
                return <p className="alert alert-danger my-1 mx-1 text-center p-1 col text-white" key={errors.value + index}>
                    {`${errors.msg}`}
                </p>
            }
        })}
        
    </div>)
    }
    return (<></>)
    
    
}

export default existError 