import App from './App.svelte'
import './router-setup'

const app = new App({
  target: document.getElementById('app') as Element
})

export default app
