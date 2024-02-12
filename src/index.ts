import 'dotenv/config';
import createCustomServer from './models/serverModel';

const port: string = process.env.PORT || '3000';

const server = createCustomServer();

server.listen(port, (): void => console.log(`Server started at port ${port}`));
