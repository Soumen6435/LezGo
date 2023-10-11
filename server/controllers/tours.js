import express from 'express';
import mongoose from 'mongoose';
import TourMessage from '../models/tourMessage.js';

const router = express.Router();

export const getTours = async (req, res) => {
    try {
        const tourMessages = await TourMessage.find();

        res.status(200).json(tourMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTour = async (req, res) => {
    const {creator,number,title,location,selectedFile,howtoreach,timetovisit,thingstodo} = req.body;

    const newTour = new TourMessage({creator,number,title,location,selectedFile,howtoreach,timetovisit,thingstodo});

    try {
        await newTour.save();

        res.status(201).json(newTour);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getToursBySearch = async (req, res) => {
    const  searchQuery  = req.query

    try {
        const title = new RegExp(searchQuery, "i");

        const tours = await TourMessage.find( title );

        res.json({ data: tours });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}