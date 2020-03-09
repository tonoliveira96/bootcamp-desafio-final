import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';

class OrderController {
  async index(req, res) {
    const order = await Order.findAll({
      attributes: [
        'id',
        'deliverymans_id',
        'recipient_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
    });

    return res.json(order);
  }

  async store(req, res) {
    const checkDeliveryman = await Deliveryman.findOne({
      where: {
        id: req.body.deliverymans_id,
      },
    });

    if (!checkDeliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const order = await Order.create(req.body);

    return res.json(order);
  }

  async update(req, res) {
    res.json();
  }
}

export default new OrderController();
