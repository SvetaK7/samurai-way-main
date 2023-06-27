import React from "react";

import {Field, reduxForm} from "redux-form";
import {FormControl, Input} from "components/common/FormsControls/FormsControls";

const ProfileDataForm = () => {
  return <form>
    <button>Save</button>
    <div>
      <b>Full Name</b> : {
      <Field
        component={FormControl}
        elementType={'textarea'}
        name={'fullName'}
        placeholder={'Full name'}
        validate={[]}/>}
    </div>
  </form>
}

export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)