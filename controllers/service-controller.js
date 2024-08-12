import Service from "../models/Service.js";

export const createService = async (req, res) => {
  const { name, description, price } = req.body;

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

export const getService = async (req, res) => {
  const services = await Service.find({});
  res.status(200).send(services);
}