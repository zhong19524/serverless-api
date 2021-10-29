declare const MY_KV: KVNamespace

const Post = async request => {

  const postId = request.params.id
  const body = JSON.stringify(await MY_KV.get(postId))
  const headers = { 
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json' }
  return new Response(body, { headers })

}
export default Post