export default defineEventHandler(async (event) => {
  // eslint-disable-next-line no-console
  console.log('Hello World called', event.node.req);
  return {
    statusCode: 200,
    body: {
      message: 'Hello World',
    },
  };
});
