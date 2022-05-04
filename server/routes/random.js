import express  from 'express';//express import
var router = express.Router();

import fs from 'fs';//file 입출력을 위한 모듈 fs import

    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

    router.get('/api/get_random_loc', async(req, res) => {
        try {
            const id = req.query.id
      
            const idJsonFile = "./assets" + id + ".json"
          
            fs.readFile(idJsonFile, 'utf-8', function(err, data){
              res.send({
                "name": idJsonFile[0],
                "explanation": idJsonFile[0],
                "location": idJsonFile[0]
              })
            })
            console.log(idJsonFile[0])
        } catch(err) {
            console.log(err);
            res.send({
                error: 'Can"t read api data'
            });
        }
    });
export default router;