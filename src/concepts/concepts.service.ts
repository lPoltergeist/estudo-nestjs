import { Injectable } from "@nestjs/common";

@Injectable()
export class ConceptsService {
    conceptServiceExemple(): string {
        return 'NestJS concepts!';
    }
}