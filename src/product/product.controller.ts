import { Controller,Post,Put,Delete ,Get, Res, HttpStatus, Body,Param,NotFoundException,Query } from '@nestjs/common';
import { CreateProducDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private producService:ProductService){}
        // Add Product: /product/create
    @Post("/create")
    async createPost(@Res()res, @Body() createProduct:CreateProducDTO){
       const product= await this.producService.createProduct(createProduct);
       return res.status(HttpStatus.OK).json({
            message:"recibido",
            product,
    });
}
    @Get("/")
    async getProducts(@Res() res){
        const producto=await this.producService.getProducts();
        return res.status(HttpStatus.OK).json({
            producto
        })   
    }
       // GET single product: /product/5c9d46100e2e5c44c444b2d1
       @Get('/:productID')
       async getProduct(@Res() res, @Param('productID') productID) {
           const product = await this.producService.getProduct(productID);
           if (!product) throw new NotFoundException('Product does not exist!');
           return res.status(HttpStatus.OK).json(product);
       }
   

       @Delete('/delete')
       async deleteProduct(@Res() res, @Query('productID') productID) {
           const productDeleted = await this.producService.deleteProduct(productID);
           if (!productDeleted) throw new NotFoundException('Product does not exist!');
           return res.status(HttpStatus.OK).json({
               message: 'Product Deleted Successfully',
               productDeleted
           });
       }
   
       // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
       @Put('/update')
       async updateProduct(@Res() res, @Body() createProductDTO: CreateProducDTO, @Query('productID') productID) {
           const updatedProduct = await this.producService.updateProduct(productID, createProductDTO);
           if (!updatedProduct) throw new NotFoundException('Product does not exist!');
           return res.status(HttpStatus.OK).json({
               message: 'Product Updated Successfully',
               updatedProduct 
           });
       }
    
}
