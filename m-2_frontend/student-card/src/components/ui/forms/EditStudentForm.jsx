import {TextField} from "../../common/formFields/TextField"
import {useValidateForm} from "../../../hooks/validateFormHook"
import {editStudentValidatorConfig} from "../../../utils/validator/validatorConfigs"
import PropTypes from "prop-types"
import {NavLink} from "react-router-dom"

export const EditStudentForm = ({mode}) => {
  const {fields, setFields, errors, isValid} = useValidateForm(editStudentValidatorConfig, {
    name: '', lastName: '', birth: '', portfolioUrl: ''
  })

  const handleChange = (target) => {
    setFields(prev => ({...prev, [target.name]: target.value}))
  }

  const handleCreate = () => {

  }

  const handleEdit = () => {

  }

  return (
    <div>
      <TextField
        name="name"
        onChange={handleChange}
        value={fields.name}
        error={errors.name}
        label="Имя"
      />
      <TextField
        name="lastName"
        onChange={handleChange}
        value={fields.lastName}
        error={errors.lastName}
        label="Фамилия"
      />
      <TextField
        name="birth"
        type="number"
        onChange={handleChange}
        value={fields.birth}
        error={errors.birth}
        label="Год рождения"
      />
      <TextField
        name="portfolioUrl"
        onChange={handleChange}
        value={fields.portfolioUrl}
        error={errors.portfolioUrl}
        label="Портфолио"
      />

      {
        mode === 'create' ?
          <button className="btn btn-primary" disabled={!isValid} onClick={handleCreate}>
            Создать
          </button>
          :
          <div>
            <NavLink to="/">
              <button className="btn btn-dark me-2">
                Назад
              </button>
            </NavLink>
            <button className="btn btn-primary" disabled={!isValid} onClick={handleEdit}>
              Обновить
            </button>
          </div>
      }
    </div>

  )
}

EditStudentForm.propTypes = {
  mode: PropTypes.string.isRequired
}
