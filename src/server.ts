import env from './main/config/env'

import('./main/config/app').then(async ({startApp}) => {
    const app = await startApp()
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
})