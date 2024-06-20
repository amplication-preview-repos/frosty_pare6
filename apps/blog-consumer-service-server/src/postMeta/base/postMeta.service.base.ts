/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PostMeta as PrismaPostMeta } from "@prisma/client";

export class PostMetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PostMetaCountArgs, "select">): Promise<number> {
    return this.prisma.postMeta.count(args);
  }

  async postMetas(
    args: Prisma.PostMetaFindManyArgs
  ): Promise<PrismaPostMeta[]> {
    return this.prisma.postMeta.findMany(args);
  }
  async postMeta(
    args: Prisma.PostMetaFindUniqueArgs
  ): Promise<PrismaPostMeta | null> {
    return this.prisma.postMeta.findUnique(args);
  }
  async createPostMeta(
    args: Prisma.PostMetaCreateArgs
  ): Promise<PrismaPostMeta> {
    return this.prisma.postMeta.create(args);
  }
  async updatePostMeta(
    args: Prisma.PostMetaUpdateArgs
  ): Promise<PrismaPostMeta> {
    return this.prisma.postMeta.update(args);
  }
  async deletePostMeta(
    args: Prisma.PostMetaDeleteArgs
  ): Promise<PrismaPostMeta> {
    return this.prisma.postMeta.delete(args);
  }
}
