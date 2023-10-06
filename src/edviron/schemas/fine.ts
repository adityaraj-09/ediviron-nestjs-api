import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()

export class Fine{
    @Prop()
    fine_amount:string

    @Prop()
    paid:boolean
}

export const FineSchema=SchemaFactory.createForClass(Fine)