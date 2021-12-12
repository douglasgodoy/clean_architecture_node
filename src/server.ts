import { mongoConnect } from '@main/config/database'
import env from './main/config/env'

mongoConnect(env.uriDatabase).then(async () => {
    
    console.log('connected database')
    const {startApp} = await import('@main/config/app')
    const app = await startApp()
    app.listen(env.port, () => console.log(`Server running at port ${env.port}`))

}).catch(err => console.error(`ERROR CONNECTION: ${err}`));