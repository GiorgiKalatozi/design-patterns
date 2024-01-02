// User class focused on managing user data
class User {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly password: string
  ) {}

  public getGreeting(): string {
    return `Hello, ${this.name}!`;
  }
}

// AuthService handling authentication logic
class AuthService {
  public login(email: string, password: string) {}

  public signup(name: string, email: string, password: string): User {
    return new User("UNIQUE_ID", name, email, password);
  }

  public async changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<void> {}
}

// EmailService handling email related actions
class EmailService {
  async sendPasswordResetEmail(user: User) {}
}

const authService = new AuthService();

const user = authService.signup("giorgi", "giorgi@gmail.com", "password");

console.log(user.getGreeting()); // "Hello, giorgi!"
