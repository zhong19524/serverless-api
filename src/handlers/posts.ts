// async function posts(){
//     var data = []
//     var value = await MY_KV.list()
//     //iterate throught key-values and get all posts
//     for (i = 0; i <value.keys.length;i++){
//       data[i] = await MY_KV.get(value.keys[i].name)
//     }
//     //var data = await MY_KV.get("post1")
//     //console.log("test")
//     //console.log(value.keys[0].name)
//     return new Response(data, {
//         headers: { 
//             'Access-Control-Allow-Origin': '*',
//             "Content-Type": "application/json;charset=UTF-8" },
//       });
//   }



declare const MY_KV: KVNamespace

const Posts = async () => {
    // const posts = new Store()
    // const body = JSON.stringify(await posts.all())
    // const headers = {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-type':'application/json'}
    // return new Response(body,{ headers })
    var posts :string []= []
    var value = await MY_KV.list() 
    for(let i= 0; i < value.keys.length;i++){
        posts[i] = JSON.parse(await MY_KV.get(value.keys[i].name) || '{}')
    }
    const body = JSON.stringify(posts)
    const headers = { 
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json' }

    return new Response(body, { headers })
}

export default Posts