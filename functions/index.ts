import * as functions from 'firebase-functions'
import * as next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: './next' } })
const handle = app.getRequestHandler()

export const nextApp = functions.https.onRequest(
  (req, res): Promise<void> => {
    console.log('File: ' + req.originalUrl)
    return app.prepare().then((): Promise<void> => handle(req, res))
  }
)
