// Exercice2
const fs = require('fs');
if(fs.existsSync('./monDossier')){
        fs.rmdir('./monDossier',()=>{
        if(error){
            console.error(Error);
        }
        else{
            console.log('dossier supprimer').
        }  
    })
}else{
    fs.mkdir('./monDossier',(Error)=>{
        if(error){
            console.error(Error);
        }else{
            console.log('dossier créer');
        }  
    })
}    
                
//        
        

// Exercice1
const fs = require('fs');
if(fs.existsSync('./monDossier')){
    fs.rmdir('./monDossier',()=>{
    console.log('le dossier existe déjà')
}else{
//
//
    console.log('le dossier existe déjà')
    console.log('dossier supprimer').
}))
console.log('dossier créer');
})