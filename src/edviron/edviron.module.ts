import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { EDController } from "./edviron.controller";
import { EdService } from "./edviron.service";
import { FineSchema } from "./schemas/fine";
import { StudentSchema } from "./schemas/student";
import { Transaction, TransactionSchema } from "./schemas/transaction";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema },{name:'Student',schema:StudentSchema},{name:"Fine",schema:FineSchema}]),
        
      ],
    controllers:[EDController],
    providers:[EdService]
})

export class EDModule{}