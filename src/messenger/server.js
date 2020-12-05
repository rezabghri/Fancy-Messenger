
const server=require('express');

const app=server();

let chats=[];
chats={keyword:'hello'}

app.get('/chats',(req,res)=>{
   res.send(JSON.stringify(chats));
})


app.listen(3001)