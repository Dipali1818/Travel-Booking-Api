import Destination from "../models/Destination.js";

export const addDestination = async (req, res) => {
  const destination = await Destination.create(req.body);
  res.json(destination);
};

export const getDestinations = async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
};
