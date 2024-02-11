import { Server, createServer } from 'http';
import ICustomServer from 'src/types/interfaces/ICustomServer';

export default class CustomServer implements ICustomServer {
  private readonly port: number;
  private readonly server: Server;

  constructor(port: number) {
    this.port = port;
    this.server = this.initServer();
  }

  public launch = (): Server =>
    this.server.listen(this.port, (): void =>
      console.log(`Server start at port ${this.port}`)
    );

  public off = (): Server => this.server.close();

  private initServer = (): Server => {
    return createServer((req, res) => {
      console.log(req, res);
    });
  };
}
