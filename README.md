`Couldfalre KV Namespace based Serverless API Worker Project`

## Note: must use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) 1.17 for preview and test


### 🧪 Testing

This Project is build based on the Cloudflare Worker KV Namespace. For self testing, please visit (https://developers.cloudflare.com/workers/cli-wrangler/workers/) for more details


### 👀 Previewing and Publishing

Proper configuration in (***wrangler.toml***) is required for previewing and publishing.

ex. Account id and kv_namespace

Register an account at Cloudflare and create a kv_namespace at(https://workers.cloudflare.com/)

for preview your project, run this command 
(***kv_namespace must include preview_id***):

<code>wrangler dev</code>

for publish your project on your Cloudflare Worker, run this command 
(***kv_namespace must include id***):

<code>wrangler publish<code>

