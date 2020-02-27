import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findAll({
      where: {
        status: true,
      },
      attributes: ['id', 'name', 'email', 'status'],
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.json(deliveryman);
  }

  async store(req, res) {
    // validation with Yup
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    // checks if deliveryman email exists
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
    // validation with Yup
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const { email } = req.body;

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({
        where: {
          email,
        },
      });
      if (deliverymanExists) {
        return res
          .status(400)
          .json({ error: 'This email is being used by another deliveryman' });
      }
    }

    const { id, name, status } = await deliveryman.update(req.body);

    return res.json({
      id,
      name,
      email,
      status,
    });
  }
}

export default new DeliverymanController();
