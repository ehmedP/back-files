module.exports = ({ env }) => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: env("NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN"),
            sites: [
                {
                    name: 'saytin adi',
                    id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                    buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
                    branch: 'main' 
                }
            ]
        },
    },
});