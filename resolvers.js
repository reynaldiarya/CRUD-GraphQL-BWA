import BookModel from "./models/Book.js";

const resolvers = {
  Query: {
    getAllBooks: async (_, args) => await BookModel.find({}),
    getBook: async (_, args) => await BookModel.findById(args._id),
  },

  Mutation: {
    createBook: async (_, args) => {
      const book = new BookModel(args);
      await book.save();
      return book;
    },

    updateBook: async (_, args) => {
      const book = await BookModel.findByIdAndUpdate(args._id, args, {
        new: true,
      });
      return book;
    },

    deleteBook: async (_, args) => {
      const book = await BookModel.findByIdAndDelete(args._id);
      if (book) return true;
      return false;
    },
  },
};

export default resolvers;
