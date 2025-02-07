import { MyGQLContext } from "./context-graphql";
import { Montadora } from "./montadora.entity";


export const resolvers = {
  Query: {
    // montadoras: () => Montadora.find()
    montadoras: (_parent: any, _args: any, context: MyGQLContext, _info: any) => {
      console.log(`User: ${context.user}`)
      return Montadora.find()
    },
    montadora: async (_parent: any, args: { id: number }) => {
      const montadora = await Montadora.findOne({ where: { id: args.id } });
      if (!montadora) {
        throw new Error("Montadora não encontrada!");
      }
      return montadora;
    }
  },

  Mutation: {
    createMontadora: (_: any, args: { input: any }, context: MyGQLContext) => {
      return Montadora.create({ ...args.input, user: context.user }).save();
    },
    deleteMontadora: (_: any, args: { input: number }) => {
      if (Montadora.findOne({ where: { id: args.input } }) == null) {
        return false
      };
      Montadora.delete(args.input);
      return true
    }
  },
};