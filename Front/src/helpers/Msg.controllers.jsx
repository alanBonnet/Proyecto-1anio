const existError = (error, comparer) => {
    if(error){
        return (<div className="row">
        {error?.map((errors, index) => {
            if (errors.param == comparer) {
                return <p className="alert alert-danger my-1 mx-1 text-center p-1 col" key={errors.value + index}>
                    {`${errors.msg}`}
                </p>
            }
        })}
    </div>)
    }
    return ""
    
    
}

export default existError 