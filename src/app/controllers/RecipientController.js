import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    return res.json({ message: 'chegou aqui' });
  }

  async store(req, res) {
    const recipi = await Recipient.create(req.body);

    return res.json(recipi);
  }

  async update(req, res) {
    const recipi = await Recipient.findByPk(req.params.id);

    if (!recipi) {
      return res.status(400).json({ error: 'User not found' });
    }

    const {
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await recipi.update(req.body);
    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }
}

export default new RecipientController();
