interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MailDTO {
  to: IMailTo;
  message: IMailMessage;
}

class EmailService {
  sendMail({ to, message }: MailDTO) {
    console.log(`Email Enviado enviado para ${to.name}: ${message.body}`);
  }
}

export default EmailService;