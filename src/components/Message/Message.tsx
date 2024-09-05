import { MessageType } from '../../constants/messages';
import css from './Message.module.css';

interface IMessageProps {
  type?: MessageType;
  text: string;
}

const Message = ({ type = MessageType.INFO, text }: IMessageProps) => {
  const classNames: string = [css.message, css[type]].join(' ');

  return <p className={classNames}>{text}</p>;
};

export default Message;
