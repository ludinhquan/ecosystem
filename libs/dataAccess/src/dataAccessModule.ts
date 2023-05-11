import {Module} from '@nestjs/common';
import {DataAccessService} from './dataAccessService';

@Module({
  providers: [DataAccessService],
  exports: [DataAccessService],
})
export class DataAccessModule {}
