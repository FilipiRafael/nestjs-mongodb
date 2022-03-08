import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/shared/tasks.service';
import { TasksModule } from './tasks/tasks.module';
import { TarefasController } from './tarefas/tarefas.controller';
import { TarefasService } from './tarefas/shared/tarefas.service';
import { TarefasModule } from './tarefas/tarefas.module';

@Module({
  imports: [TasksModule, TarefasModule],
  controllers: [AppController, TasksController, TarefasController],
  providers: [AppService, TasksService, TarefasService],
})
export class AppModule {}
