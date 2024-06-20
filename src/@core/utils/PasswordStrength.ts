/**
 * Password validator for login pages
 */

// has number
const hasNumber = (number: string): boolean => new RegExp(/[0-9]/).test(number);

// has mix of small and capitals
const hasMixed = (number: string): boolean => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);

// has special chars
const hasSpecial = (number: string): boolean => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (count: number, color: any): { label: string; color: string } => {
    if (count < 2) return { label: 'Poor', color: color?.error.main };
    if (count < 3) return { label: 'Weak', color: color?.warning.dark };
    if (count < 4) return { label: 'Normal', color: color?.success.light };
    if (count < 5) return { label: 'Good', color: color?.success.main };
    if (count < 6) return { label: 'Strong', color: color?.success.dark };
    return { label: 'Poor', color: "error.main" };
};

// password strength indicator
export const strengthIndicator = (number: string): number => {
    let strengths = 0;
    if (number.length > 5) strengths += 1;
    if (number.length > 7) strengths += 1;
    if (hasNumber(number)) strengths += 1;
    if (hasSpecial(number)) strengths += 1;
    if (hasMixed(number)) strengths += 1;
    return strengths;
};
