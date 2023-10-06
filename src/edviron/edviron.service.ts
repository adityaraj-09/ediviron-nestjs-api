import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Fine } from "./schemas/fine";
import { Student } from "./schemas/student";
import { Transaction } from "./schemas/transaction";

@Injectable()
export class EdService{
    constructor(
        @InjectModel(Transaction.name)
        private transactionModel:mongoose.Model<Transaction>,
        @InjectModel(Fine.name)
        private fineModel:mongoose.Model<Fine>,
        @InjectModel(Student.name)
        private studentModel:mongoose.Model<Student>,

       

      )  {}
      
    async getPercentage():Promise<any>{
        const pipeline = [
            {
              $group: {
                _id: '$payment_mode',
                count: { $sum: 1 },
              },
            },
            {
              $project: {
                _id: 0,
                payment_mode: '$_id',
                count: 1,
              },
            },
          ];
        const paymentModeCounts = await this.transactionModel.aggregate(pipeline);

        const totalTransactions = paymentModeCounts.reduce((total, mode) => total + mode.count, 0);
    
        const percentageData = paymentModeCounts.map((mode) => ({
            payment_mode: mode.payment_mode,
            count: mode.count,
            percentage: parseFloat(((mode.count / totalTransactions) * 100).toFixed(2)),
            
        }));
    
        return percentageData;
    }

   
    async getTotalFineSum(): Promise<number> {
        const fines = await this.fineModel.find();
    
        let totalFineSum = 0;
        fines.forEach((fine) => {
  
          const fineAmount = parseFloat(fine["fine_amount"]);
          if (!isNaN(fineAmount) && fine["paid"]) {
            totalFineSum += fineAmount;
          }
        });
    
        return totalFineSum;
        
    
        
      }

      async totalStudents():Promise<number>{
        const students=await this.studentModel.find()
        return students.length
      }
}