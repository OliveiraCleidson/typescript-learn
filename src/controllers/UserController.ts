import { Request, Response } from 'express';
import EmailService from '../services/EmailServices';

const users = [
  { name: 'Oliv', email: 'gk.cleidson@yahoo.com.br' }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Oliv', email: 'gk.cleidson@yahoo.com.br' },
      message: { subject: 'Bem vindo ao sistema', body: 'Seja bem vindo' }
    });
    res.send();
  }
}