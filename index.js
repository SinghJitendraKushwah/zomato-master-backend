//env variable
require("dotenv").config();

// const express = require("express");
import express from "express";
import cors from "cors";
import helmet from "helmet";

//Database connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/", (req, res) => res.json({message: "SetUp Success!!"}));

zomato.listen(4000, ()=>
ConnectDB().then(()=>console.log("Server is up and running"))
.catch(()=>console.log("DB connection failed")));