// User class focused on managing user data
class User {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly password: string
  ) {}

  getGreeting(): string {
    return `Hello, ${this.name}!`;
  }
}

// Separate AuthService for authentication logic
class AuthService {
  login(email: string, password: string) {
    // ... authentication logic
  }

  signup(name: string, email: string, password: string): User {
    //
    return new User("UNIQUE_ID", name, email, password);
  }
}

const authService = new AuthService();

const user = authService.signup("giorgi", "giorgi@gmail.com", "password");

console.log(user.getGreeting()); // "Hello, giorgi!"
