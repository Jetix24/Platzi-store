import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('new')
  newEndopoint() {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Products limit: ${limit}, offset: ${offset} , brand: ${brand}`;
  }

  @Get('/products/filter')
  getProductFilter() {
    return `Product Filter`;
  }

  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }

  @Get('/categories/:categoriesId/products/:productId')
  getCategories(
    @Param('categoriesId') categoriesId: string,
    @Param('productId') productId: string,
  ) {
    return `Product ${productId} and Category ${categoriesId}`;
  }
}
