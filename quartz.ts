import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig({
    // override any configuration field here
})
export default config
export const layout = await loadQuartzLayout()
