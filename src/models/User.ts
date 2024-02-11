import IUser from '../types/interfaces/IUser';
import { v4 as uuid } from 'uuid';

export default class User implements IUser {
  private readonly id: string;
  private username: string;
  private age: number;
  private hobbies: string[];

  constructor(username: string, age: number, hobbies: string[] = []) {
    this.id = uuid();
    this.username = username;
    this.age = age;
    this.hobbies = hobbies;
  }

  public getId = (): string => this.id;

  public getUsername = (): string => this.username;

  public getAge = (): number => this.age;

  public getHobbies = (): string[] => this.hobbies;

  public setUsername = (username: string): void => {
    this.username = username;
  };

  public setAge = (age: number): void => {
    this.age = age;
  };

  public setHobbies = (hobbies: string[] = []): void => {
    this.hobbies = hobbies;
  };
}
