import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/module/user/schema/user.schema';

@Schema({ collection: 'todo' })
export class Todo extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Boolean })
  complete: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  author: User;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
