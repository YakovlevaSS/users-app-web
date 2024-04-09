import { IUser } from "../interface/user";

export const calculateAgeGroups = (users: IUser[]): number[] => {
  const ageGroups = [0, 0, 0, 0, 0]; 

  for (const user of users) {
    
    if (user?.dob?.age >= 11 && user?.dob?.age <= 20) {
      ageGroups[0]++;
    } else if (user?.dob?.age >= 21 && user?.dob?.age <= 30) {
      ageGroups[1]++;
    } else if (user?.dob?.age >= 31 && user?.dob?.age <= 40) {
      ageGroups[2]++;
    } else if (user?.dob?.age >= 41 && user?.dob?.age <= 50) {
      ageGroups[3]++;
    } else {
      ageGroups[4]++;
    }
  }

  return ageGroups;
};

export const calculateGenderGroups = (users: IUser[]): [number, number] => {
  let maleCount = 0;
  let femaleCount = 0;

  for (const user of users) {
    if (user.gender === 'male') {
      maleCount++;
    } else if (user.gender === 'female') {
      femaleCount++;
    }
  }

  return [maleCount, femaleCount];
};