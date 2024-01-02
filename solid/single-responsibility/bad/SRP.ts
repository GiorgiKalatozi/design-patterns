// User class with mixed responsibilities
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

  public login(email: string, password: string) {
    // ... mixed responsibilities (authentication logic inside User class)
  }

  public async changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<void> {
    // ... password change logic (should be in AuthService)
  }

  async sendPasswordResetEmail(): Promise<void> {
    // ... logic for sending password reset email (should be in EmailService)
  }
}

const user = new User("UNIQUE_ID", "giorgi", "giorgi@gmail.com", "password");

console.log(user.getGreeting()); // "Hello, giorgi!"

// Attempting to log in with mixed responsibilities
const loggedInUser = user.login("giorgi@gmail.com", "password");

// User class handles responsibilities beyond managing user data
// - Authentication (login)
// - Password management (changePassword)
// - Email sending (sendPasswordResetEmail)
