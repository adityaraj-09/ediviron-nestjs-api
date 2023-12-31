import { Module } from '@nestjs/common';

import {ConfigModule} from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose'

import { EDModule } from './edviron/edviron.module';




@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    
    
    MongooseModule.forRoot(process.env.DB_URI),
    
    EDModule
    
    
  ],
 
  
})
export class AppModule {}
