interface Repository<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T | undefined>;
  create(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: number): Promise<void>;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

class ProductRepository implements Repository<Product> {
  private products: Product[] = [];

  public async findAll(): Promise<Product[]> {
    return this.products;
  }

  public async findById(id: number): Promise<Product | undefined> {
    return this.products.find((product) => product.id === id);
  }

  public async create(product: Product): Promise<Product> {
    product.id = this.products.length + 1; // Assign a unique ID
    this.products.push(product);
    return product;
  }

  public async update(product: Product): Promise<Product> {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
      return product;
    } else {
      throw new Error("Product not found");
    }
  }

  public async delete(id: number): Promise<void> {
    this.products = this.products.filter((product) => product.id !== id);
  }
}

class ProductService {
  private readonly productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  public async getProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
