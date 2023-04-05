const http = require('http');
const server = http.createServer(
    // (Requeste, Response)=>{
     console.log("Server  created successfully.")
     if((Requeste.url ==='/' || Requeste.url === '/Home') && Requeste.method === 'GET'){
         console.log('vous êtes sur la home page');
     }
    else if(requeste.url === '/profil' && requeste.method === 'GET'){
        console.log('vous êtes sur la page profil');
    }
    else if(Requeste.url === '/contact' && Requeste.method === 'GET'){
        Console.log('vous êtes sur la page contact');
    }
    else{
        console.log('404 page non valide');
    }
    // else{
    //     console.log('vous êtes sur une page qui n\'existe pas');
    // }
        
    // console.log(Requeste.method);
    // console.log(Request.url);
    }

);
server.listen(8080, "localhost",()=>{
    console.log("Server listening on port 8080");
})
