import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:secret@localhost:27017/?authMechanism=SCRAM-SHA-1', { dbName: 'tienda-electronica' }),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
