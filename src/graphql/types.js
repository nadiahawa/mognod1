const { GraphQLObjectType, GraphQLInputObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean, GraphQLFloat} = require('graphql');
const { User, Post} = require('../models');

const UserType = new GraphQLObjectType({
        name: 'User',
        description: 'User GraphQL type',
        fields: () => ({
                id: { type: GraphQLID },
                email: { type:GraphQLString },
                posts: {
                    type: GraphQLList(UserType),
                    resolve(parent, args){
                        return Post.find({ userId: parent.id })
                    }}
                }
                )
            }
);

const PostType = new GraphQLObjectType(
    {
        name: 'Post',
        description: 'Post GraphQL type',
        fields: () => ({
            title: { type: GraphQLString },
            content: { type: GraphQLString },
        })
    }
);

