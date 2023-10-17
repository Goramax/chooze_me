import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type MessageProperties = Required<Message>;

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  public id?: number;
  @Column()
  public content?: string;
  @Column()
  public senderId?: number;
  @Column()
  public receiverId?: number;
  @Column()
  public date?: Date = new Date();

  public static fromProperties(value: MessageProperties): Message {
    const message = new Message();
    message.id = value.id;
    message.content = value.content;
    message.senderId = value.senderId;
    message.receiverId = value.receiverId;
    message.date = value.date;
    return message;
  }
}
