import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum MODE{
    ONLINE="ONLINE",
   CASH='CASH',
   CHEQUE='CHEQUE'

}
@Schema(
    {timestamps:true}
)
export class Transaction{
    @Prop()
    payment_mode:MODE
}
export const TransactionSchema=SchemaFactory.createForClass(Transaction)