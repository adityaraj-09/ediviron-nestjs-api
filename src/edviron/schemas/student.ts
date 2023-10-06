import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Student{
    @Prop()
    edviron_id:number
}

export const StudentSchema=SchemaFactory.createForClass(Student)