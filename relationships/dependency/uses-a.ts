class Logger {
  public log(message: string): void {
    // Logger implementation
  }
}

class ProductService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public getProductDetails(productId: number): void {
    // Fetch product details
    this.logger.log(`Product details fetched for ID ${productId}`);
  }
}

// Dependency example
const logger = new Logger();
const productService = new ProductService(logger);
productService.getProductDetails(123);

// In the Dependency example, ProductService depends on the Logger class,
// but there is no ownership relationship between them.
