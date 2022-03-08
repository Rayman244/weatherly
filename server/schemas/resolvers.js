const { User,  } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("recipes");
    },
    user: async (parent, { id }) => {
      return await User.findById(id).populate("recipes");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("recipes");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      const token = signToken(user);
      return { token, user };
    },
    saveLocation: async (parent, { city }, context) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },

          { $push: { savedLocations: city } },
          { new: true, runValidators: true }
        );

        return updatedUser;
      } catch (err) {
        console.log(err);
      }
    },
    removeLocation: async (parent, { locationId }, context) => {
      if(context.user) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedLocations: { _id: locationId } } },            { new: true }
        );

        return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
  },

};
module.exports = resolvers;
