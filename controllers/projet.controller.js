import Projet from "../models/projets.js"

export const getProjets= async(req, res) => {
    try{
        const projets = await Projet.find().sort({ _id: -1 })
        res.json(projets); 
    }catch(err){
        res.status(400).json({err})
    }
}