import { Controller, Get } from "@nestjs/common";
import { EdService } from "./edviron.service";

@Controller()
export class EDController{
    constructor(
        private edService:EdService,
       
    ){}

    @Get("percentage-of-modes")
    async getpModes(){
        return this.edService.getPercentage()
    }

    @Get('total-fine')
  async getTotalFineSum(): Promise<{ totalSum: number }> {
    const totalSum = await this.edService.getTotalFineSum();
    return { totalSum };
  }
  @Get('total-students')
  async getTotalStudents():Promise<{no_of_students:number}>{
    const no_of_students=await this.edService.totalStudents()
    return {no_of_students}
  }
}