import type { Prisma, PrismaClient } from "@prisma/client";
import client from "prisma/client";

class User {
  cli: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
  ;

  constructor() {
    this.cli = client;
  }

  async getOne(email: string | null) {
    return await this.cli.user.findFirst({
      where: {
        email: email ?? "",
      }
    });
  }

  async create(data: any) {
    return await this.cli.user.create({
      data: data,
    });
  }
}

export const user = new User();