// User class focused on managing user data
var User = /** @class */ (function () {
    function User(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    User.prototype.getGreeting = function () {
        return "Hello, ".concat(this.name, "!");
    };
    return User;
}());
// Separate AuthService for authentication logic
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (email, password) {
        // ... authentication logic
    };
    AuthService.prototype.signup = function (name, email, password) {
        //
        return new User("UNIQUE_ID", name, email, password);
    };
    return AuthService;
}());
var authService = new AuthService();
var user = authService.signup("giorgi", "giorgi@gmail.com", "password");
console.log(user.getGreeting()); // "Hello, giorgi!"
