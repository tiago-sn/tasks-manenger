import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../types';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is not a valid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const i = this.allowedStatuses.indexOf(status);

    return i !== -1;
  }
}
