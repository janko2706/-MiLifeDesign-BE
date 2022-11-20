// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Global() //  makes PrismaService globally available
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [UsersModule, AuthModule], //  export PrismaService for DI
})
export class PrismaModule {}
