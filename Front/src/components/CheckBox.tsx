import React, { Dispatch, FC, MutableRefObject, SetStateAction, useState } from "react";
interface PropsCheckbox {
  name: string,
  id:number,
  checked: boolean,
  setChecked: Dispatch<SetStateAction<boolean>>
}
const CheckBox: FC<PropsCheckbox> = ({ name,id, checked, setChecked }) => {
  return (
    <>
      <input
        name={name}
        className="form-check-input"
        type="checkbox"
        checked={checked}
        id={`${name}_${id}`}
        onChange={() => { setChecked(!checked) }}
      />
      <label className="px-4 form-check-label" htmlFor={`${name}_${id}`}>{name}</label>
    </>
  );
}
interface GroupCheckbox {
  name1: string,
  name2: string,
  name3: string,
  id1:number,
  id2:number,
  id3:number,

}
const Group3CheckBoxes: FC<GroupCheckbox> = ({ name1, name2, name3,id1,id2,id3 }) => {
  const [checked_1, setCheckbox_1] = useState(false);
  const [checked_2, setCheckbox_2] = useState(false);
  const [checked_3, setCheckbox_3] = useState(false);
  return (
    <>
      <div className="form-check form-switch d-flex align-content-center">
        <CheckBox name={name1} id={1+id1} checked={checked_1} setChecked={setCheckbox_1} />
      </div>
      <div className="form-check form-switch d-flex align-content-center">
        <CheckBox name={name2} id={2+id2} checked={checked_2} setChecked={setCheckbox_2} />
      </div>
      <div className="form-check form-switch d-flex align-content-center">
        <CheckBox name={name3} id={3+id3} checked={checked_3} setChecked={setCheckbox_3} />
      </div>

    </>

  )
}

export default Group3CheckBoxes;