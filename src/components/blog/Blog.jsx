import { Helmet } from "react-helmet";


const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>KIDS Super Car|Blog</title>

            </Helmet>
            <div className='container mx-auto p-5'>
                <h1 className='font-bold'>
                    Q: What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p>
                    A:Access Token: <br />
                    An access token is a credential that represents the authorization granted to a client such as a user or an application to access specific resources or perform certain actions. It typically has a limited lifespan and is used to authenticate the client with an API or server for a short period of time, usually ranging from minutes to hours. The access token contains information like the client's identity and permissions. <br />
                    Refresh Token: <br />
                    A refresh token is a credential that is used to obtain a new access token after the original one expires. It is typically long-lived and has a longer expiration time compared to the access token. When the access token expires, the client can send the refresh token to a token endpoint, along with some additional information, to obtain a fresh access token without requiring the user to reauthenticate.
                </p>
                <h1 className='font-bold'>
                    Q: Compare SQL and NoSQL databases?
                </h1>
                <p>
                    A:SQL Databases: <br />
                    SQL databases are based on a structured, tabular model with predefined schemas. They use a rigid data structure, often organized in tables with rows and columns.
                    Schema: SQL databases have a fixed schema, meaning the structure of the data needs to be defined before data insertion.
                    Data Integrity: SQL databases enforce ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and reliability. <br />
                    NoSQL Databases: <br />
                    NoSQL databases are based on various data models, such as key-value pairs, documents, graphs, or wide-column stores. They offer flexibility in handling unstructured or semi-structured data.
                    Schema: NoSQL databases are schema-less or have a flexible schema, allowing for dynamic and evolving data structures.
                    Data Integrity: NoSQL databases may relax some ACID properties to achieve higher scalability and performance. They often prioritize availability and partition tolerance (AP) over strict consistency.

                </p>
                <h1 className='font-bold'>
                    Q:What is express js? What is Nest JS ?
                </h1>
                <p>
                    A:Express.js: <br />
                    Express.js is a popular and widely used web application framework for Node.js. It provides a minimalist and flexible approach to building web applications and APIs. Express.js allows developers to create server-side applications and handle HTTP requests and responses easily. It simplifies common tasks such as routing, handling middleware, and managing server-side rendering. Express.js provides a simple and intuitive API that allows developers to quickly build robust web applications. <br />
                    Nest.js: <br />
                    Nest.js is a progressive and opinionated Node.js framework for building efficient, scalable, and maintainable server-side applications. It takes inspiration from Angular's architecture and uses TypeScript as its primary language. Nest.js aims to provide a robust framework with a modular architecture that is suitable for both small and large-scale applications.

                </p>
                <h1 className='font-bold'>
                    Q:What is MongoDB aggregate and how does it work?
                </h1>
                <p>
                    A:
                    In MongoDB, the aggregate function is used to perform advanced data aggregation operations on collections. It allows you to process and transform data, perform calculations, and retrieve aggregated results based on specified criteria. The aggregate function in MongoDB uses a pipeline approach, where you can chain multiple stages to define the desired data transformation and aggregation steps.The MongoDB aggregate function provides a powerful and flexible way to perform complex data transformations and aggregations on collections, allowing you to derive meaningful insights from your data.
                </p>
            </div>
        </div>
    );
};

export default Blog;