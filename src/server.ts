import { app } from './app'

const port = 3333

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port:${port}`)
})
