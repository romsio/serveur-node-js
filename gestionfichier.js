const fs = require('fs');
if(fs.existsSync('./monDossier')){
    fs.rmdir('./monDossier',()=>{
    console.log('le dossier existe déjà')
    }else{
        fs.mkdir('./monDossier',(error=>{
          if(error){
            console.error(Error);
          }else{
            console.log('dossier supprimer');
          } 
        }))
    }
    console.log('dossier créer');
})