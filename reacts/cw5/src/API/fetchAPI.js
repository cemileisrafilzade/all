const domain = 'http://localhost:3000';

function fetchFabric (endpoint,method,getParams='',postParams={}) {
    return async(getParams = '',postParams='') => {

const options = {
    headers:{
        'Content-Type':'application/json'
    }
}
if(method!=='GET'){
    options.body = JSON.stringify(postParams)
}
const res= await fetch(`${domain}${endpoint}${getParams}`,options)
return res.json();  

}
}
export const postsFetch = fetchFabric('/posts','GET');