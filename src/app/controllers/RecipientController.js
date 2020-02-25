import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    return res.json({ message: 'chegou aqui' });
  }

  async store(req, res) {
    const recipi = await Recipient.create(req.body);

    return res.json(recipi);
  }
}

export default new RecipientController();
