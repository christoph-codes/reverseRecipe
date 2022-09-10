const { printSchemaWithDirectives } = require('@graphql-tools/utils');
const { stripIgnoredCharacters } = require('graphql');

const printSchema = (schema) => {
    return `
    /* eslint-disable */
    export const typeDefs = /* GraphQL */\`${schema}\`;
    `;
};

module.exports = {
    plugin: (schema, documents, config) => {
        return printSchema(stripIgnoredCharacters(printSchemaWithDirectives(schema))); 
    }
};