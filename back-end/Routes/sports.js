import express from "express"
import mongoose, { get } from "mongoose";
import {team,league,player} from "../models/footballModel.js"

const router = express.Router();

router.get('/',(req,res)=>{
    // res.json({yomama:"beech"});
})

router.post('/Football',async (req,res)=>{
    const {TeamName,Url} = req.body;
    
    try{
        const newTeam = await team.create({teamName:[TeamName],imgURL:[Url]})
        res.json(newTeam);
    }catch(err){
        res.json({err:err.message})
    }
})
router.post('/Football/delete',async(req,res)=>{
    const itemToDelete = req.body.teamName;
    try{
        const deleteItem = await team.deleteOne({name:itemToDelete})
    }catch(err){
        res.json({err:err.message})
    }
})  





export default router;