import { Repository } from 'typeorm';
import { Activity } from './../models/activity.entity';
import { CreateActivityDto } from '../dto/create-activity.dto';
export declare class ActivityService {
    private activityRepository;
    constructor(activityRepository: Repository<Activity>);
    private readonly logger;
    findAll(): Promise<Activity[]>;
    findOne(id: number): Promise<Activity>;
    create(data: CreateActivityDto): Promise<Activity>;
    update(id: number, data: CreateActivityDto): Promise<number>;
}
