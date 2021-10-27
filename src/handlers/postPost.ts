declare const MY_KV:KVNamespace

const Postpost= async request => {
    try{
        const content = await request.json()
        if (content.hasOwnProperty('title') && content.hasOwnProperty('username')&& content.hasOwnProperty('content')){
            const id = (await MY_KV.list()).keys.length
            const result = await MY_KV.put(String(id),JSON.stringify(content))
            if (result == null) {
                return new Response('successed!',
                    {headers: 
                        {'Access-Control-Allow-Origin': '*', 
                        "Content-Type": "text/plain" }})
            }
            else{
            return new Response('Internal Error', {status:500})
            }
        }
        else{
            return new Response('Invalid Post format, example{"title":"xx", ,"username":"xx","content":"x")}',{status:206})
        // const id = (await MY_KV.list()).keys.length
        // const result = await MY_KV.put(String(id),JSON.stringify(content))
        // if (result == null) {
        //     return new Response('successed!',
        //         {headers: 
        //             {'Access-Control-Allow-Origin': '*', 
        //             "Content-Type": "text/plain" }})
        // }
        // else{
        //     return new Response('Internal Error', {status:500})
        }

    }catch(exception){
        return new Response('Invalid Json Input',{status:400})
    }
    
}

export default Postpost