import Service from "../models/Service.js";

export const createService = async (req, res) => {
  const { name, description, price, roleToValidate } = req.body;

  if (req.user.role !== roleToValidate) {
    return res.status(403).send("Forbidden");
  }

  try {
    const service = new Service({
      name,
      description,
      price,
      doctorId: req.user.id
    });

    await service.save();
    res.status(201).json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).send('Internal Server Error');
  }
};
