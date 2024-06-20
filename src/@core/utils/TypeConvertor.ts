export const replaceUndefinedWithEmptyString = (inputObject: Record<string, any>): Record<string, any> => {
    // Create a new object to avoid modifying the original one
    const resultObject: Record<string, any> = {};
    // Loop through the properties of the inputObject
    for (const key in inputObject) {
      if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
        // If the value is undefined, replace it with an empty string
        resultObject[key] =
          (inputObject[key] === undefined || inputObject[key]===null) ? "" : inputObject[key];
      }
    }
  
    return resultObject;
  };
  