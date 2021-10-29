import re from "./README.md"
import * as fs from 'fs'
const ReadMe = async request =>{

    //const txt = fs.readFileSync('README.md')
    return new Response(re,
            {headers: {
                    'Access-Control-Allow-Origin': '*', 
                    "Content-Type": "text/plain" }})
}

export default ReadMe