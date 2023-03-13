const helloVariable = "Hello World";
const nodeFullVersion = process.versions.node;
const nodeMajorVersion = nodeFullVersion.slice(0, nodeFullVersion.indexOf("."));
const nodeDocumentationUrl = `https://nodejs.org/docs/latest-v${nodeMajorVersion}.x/api/`

console.log(helloVariable);
console.log("NodeJS version is : ", nodeFullVersion);
console.log("NodeJS major version is : ", nodeMajorVersion);
console.log("NodeJS API documentation is : ", nodeDocumentationUrl);