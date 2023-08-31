import { CONFIG } from './config'

export type ConfigValue = string | number | boolean

class Config<T extends { [key: string]: ConfigValue }> {
  configValues: T

  constructor(configValues: T) {
    this.configValues = configValues
    this.validate()
  }

  validate() {
    Object.keys(this.configValues).forEach((key) => {
      if (this.configValues[key] === undefined) {
        throw new Error(
          `Undefined config value "${key}", ensure it exists in src/config/config.ts`
        )
      }
    })
  }

  get<K extends keyof T>(key: K): T[K] {
    return this.configValues[key]
  }
}

const configObj = new Config(CONFIG)
const config = configObj.get.bind(configObj)

export default config
