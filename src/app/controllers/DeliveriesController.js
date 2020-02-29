import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';

class DeliveriesController {
  async index(req, res) {
    const checkDeliveryman = await Deliveryman.findOne({
      where: {
        id: req.params.deliverymanId,
      },
    });

    if (!checkDeliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const deliveries = await Order.findAll({
      where: {
        deliverymans_id: req.params.deliverymanId,
      },
      attributes: [
        'id',
        'recipient_id',
        'deliverymans_id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
      ],
    });

    return res.json(deliveries);
  }
}

export default new DeliveriesController();
