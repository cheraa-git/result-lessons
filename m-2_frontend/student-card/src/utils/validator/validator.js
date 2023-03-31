import {validateRules} from "./validateRules"

export const validator = (data, configs) => {
  const errors = {}
  Object.entries(data).forEach(([dataKey, dataValue]) => {
    Object.entries(configs[dataKey]).forEach(([configKey, configData]) => {
      const rule = validateRules[configKey]
      if (rule && !rule(dataValue) && !errors[dataKey]) {
        errors[dataKey] = configData.message
      }
    })
  })
  return errors
}
