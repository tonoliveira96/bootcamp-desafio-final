import DeliveryProblems from '../models/DeliveryProblems';
import Order from '../models/Order';

class ProblemsController {
  async index(req, res) {
    return res.json();
  }

  async store(req, res) {
    // const order = await Order.findByPk(req.params.orderId);

    // if (order.end_date !== null) {
    //   return res.status(400).json({ error: 'This order was delivered' });
    // }

    const delivery = DeliveryProblems.create(req.body);

    return res.json(delivery);
  }
}

export default new ProblemsController();
