import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findAll({
      where: {
        status: true,
      },
      attribute: ['id', 'name', 'email'],
    });

    return res.json(deliveryman);
  }

  async store(req, res) {
    const deliverymanExists = Deliveryman.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists' });
    }

    const { name, email } = await Deliveryman.create(req.body);

    return res.json({ name, email });
  }

  async update(req, res) {
    return res.json({ message: 'Edita os entregadores' });
  }
}

export default new DeliverymanController();
