
class StringCalculator {
    add(numbers) {
        if(numbers === "")
           return 0;

        // Extract custom delimiter (if present)
        let delimiter = ",";
        if (numbers.startsWith("//")) {
        delimiter = numbers.substring(2, numbers.indexOf("\n"));
        numbers = numbers.substring(numbers.indexOf("\n") + 1);
        }

        // Replace new lines with commas
         numbers = numbers.replace("\n", ",");

        // Split numbers
        const numArray = numbers.split(delimiter);

        // Sum numbers
        let sum = 0;
        const negatives = [];
        for (const num of numArray) {
        const number = parseInt(num);
        if (number < 0) {
            negatives.push(num);
        } else {
            sum += number;
        }
        }
         // Check for negative numbers
        if (negatives.length > 0) {
            return `Negative numbers not allowed: ${negatives.join(", ")}`;
        }
    
            return sum;

        }

}
const calculator = new StringCalculator();

console.log(calculator.add("-1,2,3"));
module.exports = StringCalculator