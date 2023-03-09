import { Activity } from './../models/activity.entity';
import { ActivityService } from 'src/services/activity.service';
import { CreateActivityDto } from '../dto/create-activity.dto';
export declare class ActivityController {
    private activityService;
    constructor(activityService: ActivityService);
    findAll(): Promise<Activity[]>;
    findOne(id: number): Promise<Activity>;
    create(data: CreateActivityDto): Promise<Activity>;
    update(id: number, data: CreateActivityDto): Promise<number>;
}
