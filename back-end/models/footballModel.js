import mongoose from "mongoose";

const teamSchema = mongoose.Schema({
    teamName:{
        type:String,
        required:true
    },
    nextFixture:{
        type:String,
        required:false
    },
    currentScore:{
        type:String,
    },
    imgURL:{
        type: String,
        required:true
    }
})
const playerSchema = mongoose.Schema({
    playerName:{
        type:String,
        required:true
    },
    nextFixture:{
        type:String,
        required:true
    },
    currentScore:{
        type:String,
    },
})
const leagueSchema = mongoose.Schema({
    league:{
        type:String,
        required:true
    },
    nextFixture:{
        type:String,
        required:true
    },
    currentScore:{
        type:String,
    },
})
const team = mongoose.model("Team",teamSchema);
const player = mongoose.model("Player",playerSchema);
const league = mongoose.model("Leagues",leagueSchema);

export {team,player,league};