import { gql, ApolloServer } from 'apollo-server';
import axios from 'axios';

const typeDefinitions = gql`
    type gifProps {
        url: String!
        size: Int!
    }
    
    type Media {
        gif: gifProps!
    }
    
    type Gif {
        id: Int!
        title: String!
        media: [Media!]
    }

    type Query {
        allGifs: [Gif]
        media: [Media]
    }
`;

const url = 'https://g.tenor.com/v1/search?q=excited&key=MW6GANI76H2I&limit=8';

const resolvers = {
    Query: {
        allGifs: async () => {
            const data = await axios.post('https://g.tenor.com/v1/search?q=soccer&key=MW6GANI76H2I&limit=8');
            // const id = data.results;
            return data.data.results;
        }
    }
}

const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

// import axios from 'axios';


// const test = async () => {
//     const data = await axios.post('https://g.tenor.com/v1/search?q=excited&key=MW6GANI76H2I&limit=8');
//     // const data2 = await data.json()
//     console.log(data.data.results[0].id)
// }

// test()