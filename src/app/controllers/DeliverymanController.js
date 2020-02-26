import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    return res.json({ message: 'Lista os entregadores' });
  }

  async store(req, res) {
    return res.json({});
  }

  async update(req, res) {
    return res.json({ message: 'Edita os entregadores' });
  }
}

export default new DeliverymanController();
