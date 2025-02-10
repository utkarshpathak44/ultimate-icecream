const http=require('http')

const server=http.createServer((req,res)=>{
    res.statusCode(200)
    res.end('this is a random data')
})

server.listen(3999,()=>{
    console.log('server is listening')
})