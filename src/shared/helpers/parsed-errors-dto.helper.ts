import { ValidationError } from 'class-validator';

export const parsedErrorsDtos = (data: ValidationError[]) => {
  // console.log(data.co)
  for (let i = 0; i < data.length; i++) {
    const { constraints } = data[i];
    console.log({ constraints });
  }
  return data.map((error) => ({
    property: error.property,
    rule: error.constraints,
  }));
};
