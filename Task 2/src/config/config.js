import {config as envConfig} from 'dotenv'

const path = process.env.NODE_ENV === 'test' ? '.env.test' : '.env'

const {error, parsed} = envConfig({path})

if (error) {
  throw error
}

// sending the parsed env variables to the app
// we need to check the .env files and data before returning
export default parsed
