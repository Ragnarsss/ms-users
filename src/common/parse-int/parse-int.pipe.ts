import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(valueToParse: string, metadata: ArgumentMetadata) {
    const parsedValue = parseInt(valueToParse, 10);
    if (isNaN(parsedValue)) {
      throw new BadRequestException(`${parsedValue} no es un numero`);
    }
    return parsedValue;
  }
}
