import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionGetOneItem, actionSaveItem } from './store/actions'
import { Formik, Form, Field, useFormikContext } from 'formik'
import * as Yup from 'yup';
import { ValidationError } from '../../components/ValidationError'
import { useNavigate, useParams } from 'react-router-dom'
import { Page } from '../../components/Page'

const validationSchema = Yup.object({
  firstName: Yup.string().min(3).required(),
  phone: Yup.string()
    .matches(/^[0-9-]*$/, 'Phone number can only contain digits and dashes')
    .matches(/^(?:[0-9]{3}-[0-9]{3}-[0-9]{2}|[0-9]{5}[0-9]{3})$/, 'Invalid phone format. Use xxxxxхxx or xxxxxхxxxxx')
    .required('Phone number is required'),
});

export function EditForm () {
  let { waiterId, userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const editingWaiter = useSelector((state) => state.waiter.editingWaiter)

  console.log(userId)










  useEffect(() => {
    if (waiterId) {
      dispatch(actionGetOneItem(waiterId))
    }
  }, [waiterId, dispatch])

  const onSubmit = (values, { resetForm }) => {
    const formWaiter = {
      ...editingWaiter,
      ...values,
    }

    dispatch(actionSaveItem(formWaiter))
    resetForm()
    navigate('/waiter')
  }

  return (
    <Page title='Edit Form'>
      <Formik
        enableReinitialize
        initialValues={editingWaiter}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ValidationError name="firstName" />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <Field type="text" name="phone" />
            <ValidationError name="done" />
          </div>

          <SaveButton />
        </Form>
      </Formik>
      </Page>
  )
}

function SaveButton () {
  const { isValid } = useFormikContext()

  return <button disabled={!isValid} type="submit">Save</button>
}



    
  