import { ErrorMessage } from 'formik'

export function ValidationError ({ name }) {
  return <ErrorMessage style={{ color: 'red' }} component='div' name={name} />
}