import React, { Dispatch, FC, MutableRefObject, SetStateAction } from "react";
interface Props {
  name:string,
  checked:boolean,
  setChecked:Dispatch<SetStateAction<Boolean>>,
  refCheckbox:MutableRefObject<any>
}
 const CheckBox:FC<Props> = ({ name, checked, setChecked, refCheckbox}) => {
  return (
    <>
      <input
        name={name}
        className="form-check-input"
        type="checkbox"
        checked={checked}
        id={name}
        onChange={()=>{setChecked(!checked)}}
      />
      <label className="px-4 form-check-label" htmlFor={name}>{name}</label>
    </>
  );
}
export default CheckBox;