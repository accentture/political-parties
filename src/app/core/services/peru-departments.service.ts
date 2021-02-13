/* using injection token */
import { PeruDepartments } from './../mocks/mock-peru-departments';
import { InjectionToken } from '@angular/core';
import { department } from '../models/department';
export { department } from '../models/department';

export const DEPARTMENTS = new InjectionToken<department[]>('departments');

export const PERU_DEPARTMENTS: department[] = PeruDepartments;