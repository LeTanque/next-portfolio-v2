const bcrypt = require("bcrypt");

// const UserSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   passwordHash: { type: String, required: true }
// });

// UserSchema.plugin(uniqueValidator);

// UserSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.passwordHash);
// };

// UserSchema.virtual("password").set(function(value) {
//   this.passwordHash = bcrypt.hashSync(value, 12);
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

const bcryptService = () => {
    const password = (user) => {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(user.password, salt);
    
        return hash;
    };
   
    const comparePassword = (pw, hash) => (
        bcrypt.compareSync(pw, hash)
    );
   
    return {
        password,
        comparePassword,
    };
}




module.exports = bcryptService;