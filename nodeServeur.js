const http = require('http');
const server = http.createServer(
     (Requeste, Response)=>{
    //  console.log("Server  created successfully.")
     Response.setHeader('content-type','text/html;charset=utf8')
    //  Response.setHeader('content-type','text/plain')
     if((Requeste.url ==='/' || Requeste.url === '/Home') && Requeste.method === 'GET'){
        //  console.log('vous êtes sur la home page');
         Response.write('vous êtes sur la home page');
     }
    else if(requeste.url === '/profil' && requeste.method === 'GET'){
        // console.log('vous êtes sur la page profil');
        Response.write('vous êtes sur la page profil');
    }
    else if(Requeste.url === '/contact' && Requeste.method === 'GET'){
        // Console.log('vous êtes sur la page contact');
        Response.write('vous êtes sur la page contact');
    }
    else{
        // console.log('404 page non valide');
         Response.write('<p>404 page non valide</p>');
    }
    
        
     console.log(Requeste.method);
     console.log(Requeste.url);
    }

);
server.listen(8080, "localhost",()=>{
    console.log("Server listening on port 8080");
})
// Une fois que nous avons fini l’exercice et tester nos url dans la barre d’adresse, nous pouvons constater que cela fonctionne très bien, mais nous aimerions en faire plus. En effet nous voudrions afficher directement sur la page la réponse car l’utilisateur ne navigue pas en regardant la console mais bien en affichant des pages. Voyons cela ensemble :
// Tout d’abord il faut savoir que lorsque nous envoyons une requête à un serveur il est possible de lui passer des informations sur cette requête dans ce que nous appelons le header. Il en va bien sûr de même pour la réponse, ce qui nous permettra de définir le genre de réponse que le serveur renverra. Par exemple le format de la réponse (text, html, json, etc…) ou encore quel port à le droit d’effectuer la requête c’est ce que l’on appel le CORS (cross-origin resource sharing) qui par défaut ne permet qu'aux requêtes qui proviennent du même serveur et utilisent le même port de s'exécuter.
// Bien définissons ensemble l’en-tête de la réponse par exemple “text/plain”. Pour ça on utilisera la méthode “setHeader” sur l'objet Response, qui prend en paramètre la clé (“content-type”) et la valeur de l’en-tête. Puis dans les conditions au lieu du “console.log” nous utiliserons “Response.write” pour écrire sur le document. Enfin nous finirons par un Response.end() pour dire au serveur d'arrêter l'exécution de la réponse une fois qu’il a fini ses vérifications.
