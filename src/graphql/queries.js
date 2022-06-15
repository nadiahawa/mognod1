const { GraphQLList, GraphQLID, GraphQlString } = require('../db');
const { UserType, PostType } = require('../graphql/types');
const { User, Post } = require('../models');
const { resolveInclude } = require('ejs');

// const users = {
//     type: new GraphQLList(UserType),
//     description: 'Query all users in our db',
//     resolve(parent, args){
//         return User.find()
//     }
// }

const user = {
    type: UserType,
    description: 'Query a specific user by ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args){
        return User.findById(args.id)
    }
};

const post = {
    type: PostType,
    description: 'Query a specific post by ID',

};

module.export = { user, post }

// const quizBySlug = {
//     type: QuizType,
//     description: 'Quert a specific quiz by slug',
//     args: {
//         slug: { type: GraphQLString }
//     },
//     resolve(parent, args){
//         return Quiz.findOne({ slug: args.slug })
//     }
// }

// const submissionById = {
//     type: SubmissionType,
//     description: 'Query a specific submission by Id',
//     args: {
//         id: {type: GraphQLString }
//     },
//     resollve(parent, args){
//         return 
//     }

// }
