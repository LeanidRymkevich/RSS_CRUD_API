export default interface IUser {
  getId: () => string;
  getUsername: () => string;
  getAge: () => number;
  getHobbies: () => string[];
  setUsername: (username: string) => void;
  setAge: (age: number) => void;
  setHobbies: (hobbies: string[]) => void;
}
