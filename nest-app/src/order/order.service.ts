import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) { }

  async findAll(): Promise<any[]> {
    return this.prisma.order.findMany();
  }

}
