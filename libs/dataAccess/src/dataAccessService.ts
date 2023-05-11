import {Injectable} from "@nestjs/common";
import {PrismaClient} from "@prisma/client";

@Injectable()
export class DataAccessService {
  private prismaClient: PrismaClient
  public async getClient(): Promise<PrismaClient> {
    if (this.prismaClient) return this.prismaClient;

    const prismaClient = new PrismaClient();
    await prismaClient.$connect()

    this.prismaClient = prismaClient
    return this.prismaClient;
  }
}
