const express = require('express')

const ContactSchema = require('../model/contact')

exports.getAll=async(req,res)=>{

    const contacts = await ContactSchema.find()
res.status(200).json({msg:'voici la liste des users ', contacts})



try{
}catch(err){
    console.log(err)}
}

exports.ajout=async(req,res)=>{
    try{
        const newcontact = new ContactSchema(req.boby)

        await newcontact.save()
        res.status(200).json({msg:"contact dans votre db", newcontact})       
    }catch(err){
        console.log(err)
    }
}

exports.update=async(req,res)=>{
    try{
        const updatecontact = await ContactSchema.findByIdAnUpdate(id,{$set:{...req.body}})
        res.status(200).json({msg:"Updated user",})       
    }catch(err){
        console.log(err)
    }
}

exports.remove=async(req,res)=>{
    try{
        const {id}=req.params
        const removecontact = await ContactSchema.findByIdAnDelete(id)
        res.status(200).json({msg:"Remove user",})       
    }catch(err){
        console.log(err)
    }
}










