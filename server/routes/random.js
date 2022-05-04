import express  from 'express';//express import
var router = express.Router();

import fs from 'fs';//file 입출력을 위한 모듈 fs import

    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

    router.get('/api/get_random_loc', async(req, res) => {
        try {
            const id = req.query.id
            var index = Math.floor(Math.random()*45+1)
            // const idJsonFile = "./assets" + id + ".json"
            const idJsonFile = "../../assets/meal_list.json"
            fs.readFile(idJsonFile, 'utf-8', function(err, data){
              var jsonData = JSON.parse(data)

              res.send({
                // "name": obj.name,
                // "explanation": obj.explanation,
                // "location": obj.location,
              })
              
                console.log(jsonData)
            })
        } catch(err) {
            console.log(err);
            res.send({
                error: 'Can"t read api data'
            });
        }
    });
export default router;