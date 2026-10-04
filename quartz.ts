import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

ExternalPlugin.Explorer({
    filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["Bag Cards", "Clothes cards", "Hat Cards", "Shoe cards"])

        // can also use node.slug or by anything on node.data
        // note that node.data is only present for files that exist on disk
        // (e.g. implicit folder nodes that have no associated index.md)
        return !omit.has(node.displayName.toLowerCase())
    },
})

