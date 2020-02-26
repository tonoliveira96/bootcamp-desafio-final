import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';

class OrderController {
  async index(req, res) {
    res.json();
  }

  async store(req, res) {
    // const checkDeliveryman = Deliveryman.findOne({
    //   where: {
    //     id: req.body.deliverymans_id,
    //   },
    // });

    // if (!checkDeliveryman) {
    //   return res.status(400).json({ error: 'Deliveryman not found' });
    // }

    res.json();
  }

  async update(req, res) {
    res.json();
  }
}

export default new OrderController();
